'use server'

import { z } from 'zod'
import { sql } from '@vercel/postgres'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { signIn } from '@/auth'
import { AuthError } from 'next-auth'

const FormSchema = z.object({
    id: z.string(),
    customerId: z.string({
        invalid_type_error: 'Please select a customer.'
    }),
    amount: z.coerce.number().gt(0, { message: 'Please enter an amount greater than $0.'}),
    status: z.enum(['pending', 'paid'], {
        invalid_type_error: 'Please select an invoice status.'
    }),
    date: z.string(),
})

const CreateInvoice = FormSchema.omit({id: true, date: true})

export type State = {
    errors?: {
        customerId?: string[];
        amount?: string[];
        status?: string[];
    };
    message?: string | null;
}

export async function createInvoice(prevState: State, formData: FormData) {
    // Validate form using Zod
    const validatedFields = CreateInvoice.safeParse({
      customerId: formData.get('customerId'),
      amount: formData.get('amount'),
      status: formData.get('status'),
    });
   
    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Missing Fields. Failed to Create Invoice.',
      };
    }
   
    // Prepare data for insertion into the database
    const { customerId, amount, status } = validatedFields.data;
    const amountInCents = amount * 100;
    const date = new Date().toISOString().split('T')[0];
   
    // Insert data into the database
    try {
      await sql`
        INSERT INTO invoices (customer_id, amount, status, date)
        VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
      `;
    } catch (error) {
      // If a database error occurs, return a more specific error.
      return {
        message: 'Database Error: Failed to Create Invoice.',
      };
    }
   
    // Revalidate the cache for the invoices page and redirect the user.
    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices');
}

const UpdateInvoice = FormSchema.omit({ id: true, date: true })

export async function updateInvoice(id: string, prevState: State, formData: FormData) {
    // Validate form using Zod
    const validatedFields = UpdateInvoice.safeParse({
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status')
    })

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Missing Fields. Failed to Update Invoice.',
      }
    }

    // Prepare data for insertion into the database
    const { customerId, amount, status } = validatedFields.data;

    const amountInCents = amount * 100;

    try {
        await sql`
        UPDATE invoices
        SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
        WHERE id = ${id}
        `;
    } catch (error) {
        return { message: 'Database Error: Failed to Update Invoice.'};
    }
      

    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices');

}

export async function deleteInvoice(id: string) {

    try {
        await sql`DELETE FROM invoices WHERE id = ${id}`; 
        revalidatePath('/dashboard/invoices')
        return { message: "Deleted Invoice." };
    } catch (error) {
        return { message: 'Database Error: Failed to Delete Invoice.'};
    }
       
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}


const ProductFormSchema = z.object({
    id: z.string(),
    name: z.string({
      invalid_type_error: 'Please enter a product name.'
    }).min(1, {message: 'Please enter a product name.'}),
    description: z.string(),
    category: z.string({
      invalid_type_error: 'Please enter a product category.'
    }).min(1, {message: 'Please enter a product category.'}),
    price: z.coerce.number().gt(0, {message: 'Please enter an amount greater than $0.'}),
    available: z.coerce.number().gt(0, {message: 'Please enter an amount greater than $0.'}),
    created_at: z.string(),
    image: z.object({
      size: z.number().min(1, { message: 'Please enter a product image.' }),
      type: z.string().min(1, { message: 'Please enter a product image.' }),
      name: z.string().min(1, { message: 'Please enter a product image.' }),
      lastModified: z.number().min(1, { message: 'Please enter a product image.' })
    })
})

const AddProduct = ProductFormSchema.omit({id: true, created_at: true})

export type ProductState = {
  errors?: {
      name?: string[];
      description?: string[];
      category?: string[];
      price?: string[];
      available?: string[];
      image?: string[];
  };
  message?: string | null;
}

export async function addProduct(prevState: ProductState, formData: FormData) {
  // Validate form using Zod
  const validatedFields = AddProduct.safeParse({
    name: formData.get('name'),
    description: formData.get('description'),
    category: formData.get('category'),
    price: formData.get('price'),
    available: formData.get('available'),
    image: formData.get('image')
  })

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Add Product.'
    }
  }

  // Prepare data for insertion into the database
  let { name, description, category, price, available, image } = validatedFields.data
  const created_at = new Date().toISOString().split('T')[0]
  const image_url = `/products/${image.name}`

  // Insert data into the database
  try {
    await sql`
      INSERT INTO products (name, description, category, price, available, created_at, image_url)
      VALUES (${name}, ${description}, ${category}, ${price}, ${available}, ${created_at}, ${image_url})
      `
  } catch (error) {
    // If a database error occurs, return a more specific error.
    console.log(name, description, category, price, available, created_at, image_url)
    return {
      message: 'Database Error: Failed to Add Product.'
    };
  }

  revalidatePath('/dashboard/products');
  redirect('/dashboard/products');
}

const UpdateProduct = ProductFormSchema.omit({id: true, created_at: true})

export async function updateProduct(id:string, prevState: ProductState, formData: FormData) {
  const validatedFields = UpdateProduct.safeParse({
    name: formData.get('name'),
    description: formData.get('description'),
    category: formData.get('category'),
    price: formData.get('price'),
    available: formData.get('available'),
    image: formData.get('image')
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Product.'
    }
  }

  let { name, description, category, price, available, image } = validatedFields.data
  const image_url = `/products/${image.name}`

  try {
    await sql`
      UPDATE products
      SET name = ${name}, description = ${description}, category = ${category}, price = ${price}, available = ${available}, image_url = ${image_url}
      WHERE id = ${id}
    `
  } catch (error) {
    return { message: 'Database Error: Failed to Update Product.' }
  }

  revalidatePath('/dashboard/products')
  redirect('/dashboard/products')

}

export async function deleteProduct(id: string) {
  try {
    await sql`
      DELETE FROM products WHERE id = ${id}
    `
  } catch (error) {
      return { message: 'Database Error: Failed to Delete Product.' }
  }
}

export async function addProductToCart(id: string) {
  console.log('function called')
  try {
    await sql`
      
    `
  } catch (error) {
      return { message: 'Database Error: Failed to Add Product to Cart.' }
  }
}
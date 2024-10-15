import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchProductById } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import AddToCartForm from '@/app/ui/products/cart-form';

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id
    const product = await fetchProductById(id)

    if (!product) {
        notFound();
    }

    return (
    <main>
        <Breadcrumbs
        breadcrumbs={[
            { label: 'Products', href: '/dashboard/products' },
            {
            label: `${product.name}`,
            href: `/dashboard/products/${id}`,
            active: true,
            },
        ]}
        />
        <AddToCartForm product={product}/>
    </main>
    )
}
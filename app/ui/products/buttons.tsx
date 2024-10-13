import Link from "next/link";
import { PencilIcon, PlusIcon, TrashIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { deleteProduct, addProductToCart } from "@/app/lib/actions";
import { fetchProductById } from "@/app/lib/data";

export function AddProduct() {
    return (
        <Link
            href="/dashboard/products/add"
            className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
            <span className="hidden md:block">Add Products</span>{' '}
            <PlusIcon className="h-5 md:ml-4" />
        </Link>
    )
}

export function UpdateProduct({ id }: { id: string }) {
    return (
        <Link
        href={`/dashboard/products/${id}/edit`}
        className="rounded-md border p-2 hover:bg-gray-100"
        >
        <PencilIcon className="w-5" />
        </Link>
    );
}

export function DeleteProduct({ id }: { id: string }) {
    const deleteProductWithId = deleteProduct.bind(null, id);

    return (
        <form action={deleteProductWithId}>
        <button className="rounded-md border p-2 hover:bg-gray-100">
            <span className="sr-only">Delete</span>
            <TrashIcon className="w-5" />
        </button>
        </form>
    );
}

export function AddToCart({ id }: { id: string }) {
    const addToCartWithId = addProductToCart.bind(null, id)

    return (
        <form action={addToCartWithId}>
        <button className="rounded-md border p-2 hover:bg-gray-100">
            <span className="sr-only">Add to Cart</span>
            <ShoppingBagIcon className="w-5" />
        </button>
        </form>
    )
}
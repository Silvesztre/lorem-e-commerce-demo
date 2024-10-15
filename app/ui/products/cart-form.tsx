'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from "../button"
import { useActionState } from "react"
import { ProductForm } from "@/app/lib/definitions"
import { lusitana } from '@/app/ui/fonts';
import { ProductCartState, addProductToCart } from "@/app/lib/actions"


export default function AddToCartForm({
    product
}: {
    product: ProductForm
}) {
    const initialState: ProductCartState = {message: null, errors: {}}
    const addToCart = addProductToCart.bind(null, product.id, product.available)

    const [state, formAction] = useActionState(addToCart, initialState)

    return (
        <form action={formAction}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6 flex">
                {/* Product Image */}
                <div className="image-container w-5/12 h-5/12 overflow-hidden rounded-lg">
                    <Image
                        src={product.image_url}
                        className="pr-2 w-full h-full rounded-md"
                        width={200}
                        height={200}
                        alt={`${product.name}'s product picture`}
                    />
                </div>
                <div className="product-details ml-4 w-7/12 h-7/12 flex flex-col justify-between">
                
                    <div>
                        <h2 className={`${lusitana.className} product-name text-3xl mb-5 mt-5`}>Product Name: {`${product.name}`}</h2>
                        <h2 className={`${lusitana.className} product-category text-xl mb-5`}>Category: {`${product.category}`}</h2>
                        <p className={`${lusitana.className} product-description text-xl mb-5`}>Description : {`${product.description}`}</p>
                        <h2 className={`${lusitana.className} text-xl mb-5`}>Price:  {`$${product.price}`}</h2>
                        <h2 className={`${lusitana.className} text-xl mb-5`}>Available:  {`${product.available}`}</h2>
                    </div>

                    {/* Buttons */}
                    <div className="button-container flex justify-end gap-3 mt-4">
                        <input 
                            id="amount"
                            name="amount"
                            type="number"
                            step={1}
                            min={1}
                            max={product.available}
                            defaultValue={1}
                            placeholder="Amount"
                            className="flex items-center rounded-md border-2 border-gray-200 py-2 text-lg h-10 w-24 outline-2 placeholder:text-gray-500"
                            aria-describedby='price-error'
                        />
                        <Button type="submit">Add to Cart</Button>
                        <Link
                            href="/dashboard/products"
                            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                        >
                            Cancel
                        </Link>
                    </div>
                </div>
            </div>
        </form>
    )
}
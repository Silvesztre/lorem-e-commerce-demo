'use client'

import Link from "next/link"
import { Button } from "../button"
import { addProduct, ProductState } from "@/app/lib/actions"
import { useActionState } from "react"
import {
    PlusCircleIcon,
    PencilSquareIcon,
    Squares2X2Icon,
    CurrencyDollarIcon,
    ArchiveBoxArrowDownIcon,
    PhotoIcon
} from '@heroicons/react/24/outline'

export default function Form() {
    const initialState: ProductState = {message: null, errors: {}}
    const [state, formAction] = useActionState(addProduct, initialState)

    return (
        <form action={formAction}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                {/*Product Name*/}
                <div className="mb-4">
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        Enter product name
                    </label>
                    <div className="relative">
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Enter Product Name"
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            aria-describedby='name-error'
                        />
                        <PlusCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                    </div>
                    <div id="name-error" aria-live='polite' aria-atomic="true">
                        {state.errors?.name &&
                        state.errors.name.map((error: string) => (
                            <p className='mt-2 text-sm text-red-500' key={error}>
                                {error}
                            </p>
                        ))}
                    </div>
                </div>
                
                {/*Product Description*/}
                <div className="mb-4">
                    <label htmlFor="description" className="mb-2 block text-sm font-medium">
                        Enter product description (Optional)
                    </label>
                    <div className="relative">
                        <input 
                            id="description"
                            name="description"
                            type="text"
                            placeholder="Enter Product Description"
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            aria-describedby='description-error'
                        />
                        <PencilSquareIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
                    </div>
                    <div id="description-error" aria-live='polite' aria-atomic="true">
                        {state.errors?.description &&
                        state.errors.description.map((error: string) => (
                            <p className='mt-2 text-sm text-red-500' key={error}>
                                {error}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Category */}
                <div className="mb-4">
                    <label htmlFor="category" className="mb-2 block text-sm font-medium">
                        Enter product category
                    </label>
                    <div className="relative">
                        <input 
                            id="category"
                            name="category"
                            type="text"
                            placeholder="Enter Product Category"
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            aria-describedby='category-error'
                        />
                        <Squares2X2Icon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
                    </div>
                    <div id="category-error" aria-live='polite' aria-atomic="true">
                        {state.errors?.category &&
                        state.errors.category.map((error: string) => (
                            <p className='mt-2 text-sm text-red-500' key={error}>
                                {error}
                            </p>
                        ))}
                    </div>
                </div>   

                {/* Price */}     
                <div className="mb-4">
                    <label htmlFor="price" className="mb-2 block text-sm font-medium">
                        Enter product price
                    </label>
                    <div className="relative ">
                        <input 
                            id="price"
                            name="price"
                            type="number"
                            step={0.01}
                            placeholder="Enter Product Price"
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            aria-describedby='price-error'
                        />
                        <CurrencyDollarIcon className="absolute w-[18px] h-[18px] pointer-events-none left-3 top-1/2 -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                    </div>
                    <div id="price-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.price && 
                        state.errors.price.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                                {error}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Available */}
                <div className="mb-4">
                    <label htmlFor="available" className="mb-2 block text-sm font-medium">
                        Enter available product in stock
                    </label>
                    <div className="relative">
                        <input 
                            id="available"
                            name="available"
                            type="number"
                            step={1}
                            placeholder="Enter Available Product in Stock"
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            aria-describedby='available-error'
                        />
                        <ArchiveBoxArrowDownIcon className="absolute w-[18px] h-[18px] pointer-events-none left-3 top-1/2 -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                    </div>
                    <div id="available-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.available && 
                        state.errors.available.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                                {error}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Image Input */}
                <div className="mb-4">
                    <label htmlFor="image" className="mb-2 block text-sm font-medium">
                        Enter product image
                    </label>
                    <div className="relative">
                        <input 
                            id="image"
                            name="image"
                            type="file"
                            accept="image/*"
                            placeholder="Enter Product Image"
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            aria-describedby='image-error'
                        />
                        <PhotoIcon className="absolute w-[18px] h-[18px] pointer-events-none left-3 top-1/2 -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                    </div>
                    <div id="image-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.image && 
                        state.errors.image.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                                {error}
                            </p>
                        ))}
                    </div>
                </div>
                <div aria-live='polite' aria-atomic='true'>
                        {state.message &&
                            <p className='mt-2 text-sm text-red-500' key={state.message}>
                                {state.message}
                            </p>
                            }
                </div>
            </div>
            <div className="mt-6 flex justify-end gap-4">
                <Link
                href="/dashboard/products"
                className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                Cancel
                </Link>
                <Button type="submit">Add Products</Button>
            </div>
        </form>
    )
}
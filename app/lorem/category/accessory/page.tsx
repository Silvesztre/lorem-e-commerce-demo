import { Metadata } from "next"
import { fetchProductsPages } from "@/app/lib/data"
import Search from "@/app/ui/search"
import { lusitana } from "@/app/ui/fonts"
import Pagination from "@/app/ui/invoices/pagination"
import AccessoryList from "@/app/ui/products/accessory-list"

export const metadata: Metadata = {
    title: 'Accessories',
}

export default async function Page({
    searchParams
}: {
    searchParams?: {
        query?: string
        page?: string
    }
}) {

    const query = searchParams?.query || ''
    const currentPage = Number(searchParams?.page) || 1
    const totalPages = await fetchProductsPages()

    return (
        <div>
            <h1 className={`${lusitana.className} text-2xl`}>Accessories</h1>

            {/* Search Bar */}
            <div className='mt-4'>
                <Search placeholder='Search accessories...'/>
            </div>

            {/* Product List */}
            <div>
                <AccessoryList query={query} currentPage={currentPage}/>
            </div>

            {/* Pagination */}
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div>

        </div>
    )
}
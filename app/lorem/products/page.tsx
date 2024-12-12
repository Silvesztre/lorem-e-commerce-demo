import { Metadata } from 'next';
import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import ProductsList from '@/app/ui/products/list';
import { fetchProductsPages } from '@/app/lib/data';
import Pagination from '@/app/ui/invoices/pagination';

export const metadata: Metadata = {
    title: 'Products',
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
            <h1 className={`${lusitana.className} text-2xl`}>Our Products</h1>

            {/* Search Bar */}
            <div className='mt-4'>
                <Search placeholder='Search products...'/>
            </div>

            {/* Product List */}
            <div>
                <ProductsList query={query} currentPage={currentPage}/>
            </div>

            {/* Pagination */}
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div>

        </div>
    )
}
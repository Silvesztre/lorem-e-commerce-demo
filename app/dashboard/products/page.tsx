import { Metadata } from 'next';
import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import { AddProduct } from '@/app/ui/products/buttons';
import ProductsTable from '@/app/ui/products/table';
import { fetchProductsPages } from '@/app/lib/data';
import Pagination from '@/app/ui/invoices/pagination';

export const metadata: Metadata = {
    title: 'Products',
  }

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string
        page?: string
    }
}) {

    const query = searchParams?.query || ''
    const currentPage = Number(searchParams?.page) || 1
    const totalPages = await fetchProductsPages(query)

    return (     
        <div className='w-full'>
            <div className='flex w-full items-center justify-between'>
                <h1 className={`${lusitana.className} text-2xl`}>Products</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search products..." />
                <AddProduct />
            </div>
            <div>
                <ProductsTable query={query} currentPage={currentPage}/>
            </div>
            <div className="mt-5 flex w-full justify-center">
                { <Pagination totalPages={totalPages} /> }
            </div>
        </div>
    )
}
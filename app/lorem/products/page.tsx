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

export default function Page() {
    return (
        <>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ipsum hic expedita dolor aspernatur quia sint repellendus quo quibusdam exercitationem! Neque id quo asperiores repellat ex magni fugiat in harum!</>
    )
}
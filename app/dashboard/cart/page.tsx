import { lusitana } from '@/app/ui/fonts';
import { fetchCartItems } from '@/app/lib/data';
import Checkout from '@/app/ui/cart/checkout';

export default async function Page() {
    const products = await fetchCartItems()

    return (
        
        <div className='w-full'>
            <div className='flex w-full items-center justify-between'>
                <h1 className={`${lusitana.className} text-2xl`}>
                    Cart
                </h1>
            </div>
            <div>
                <Checkout products={products}/>
            </div>
        </div>
    )
}
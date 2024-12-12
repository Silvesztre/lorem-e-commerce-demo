import { lusitana } from '@/app/ui/fonts';
import { fetchCartItems, fetchCartId } from '@/app/lib/data';
import Checkout from '@/app/ui/cart/checkout';
import { auth } from '@/auth';
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Cart',
}

export default async function Page() {
    const session = await auth()
    const userId = session?.user?.id
    const cartId = await fetchCartId(userId)
    const products = await fetchCartItems(cartId)

    return (
        <div className='w-full'>
            <div className='flex w-full items-center justify-between'>
                <h1 className={`${lusitana.className} text-2xl`}>
                    Cart
                </h1>
            </div>
            <div>
                <Checkout products={products} cartId={cartId}/>
            </div>
        </div>
    )
}
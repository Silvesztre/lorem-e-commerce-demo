'use client'

import Image from 'next/image';
import { Button } from '../button';
import { cancelCartItems, checkoutCart } from '@/app/lib/actions';
import { QueryResultRow } from '@vercel/postgres';
import { useSession } from "next-auth/react"

export default function Checkout({
  products,
  cartId
}: {
  products: QueryResultRow[],
  cartId: string
}) {

  const { data: session } = useSession()
  console.log(cartId)

  return (
    <div className="mt-6 flow-root ">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {products?.map((product) => (
              <div
                key={product.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={product.image_url}
                        className="mr-2"
                        width={28}
                        height={28}
                        alt={`${product.name}'s product picture`}
                      />
                      <p>{product.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{product.category}</p>
                  </div>
                  <p className='text-xl'>
                    {`Quantity: ${product.total_quantity}`}
                  </p>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="font-medium">
                      {`$${product.price_per_piece}/piece`}
                    </p>
                  </div>
                  <div className="flex justify-end gap-2 text-xl">
                    {`Total: $${product.total_price}`}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Product
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Category
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Quantity
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Price / Item
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Total Price
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {products?.map((product) => (
                <tr
                  key={product.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={product.image_url}
                        className="pr-2"
                        width={125}
                        height={125}
                        alt={`${product.name}'s product picture`}
                      />
                      <p>{product.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {product.category}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {product.total_quantity}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {`$${product.price_per_piece}`}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {`$${product.total_price}`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
          <div className="mt-6 flex justify-end gap-4">
            <button className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                onClick={async () => await cancelCartItems(cartId)}
            >
                Cancel
            </button>
            <Button onClick={async () => await checkoutCart(cartId)}>
                Checkout
            </Button> 
          </div>
      </div>
    </div>
  );
}

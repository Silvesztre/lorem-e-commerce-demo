import Image from 'next/image';
import { formatDateToLocal } from 'app/lib/utils';
import { fetchFilteredProducts } from 'app/lib/data';
import { UpdateProduct, DeleteProduct, AddToCart } from './buttons';

export default async function ProductsTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const products = await fetchFilteredProducts(query, currentPage);

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
                  <p>{product.available}</p>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {product.price}
                    </p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <input 
                      id="price"
                      name="price"
                      type="number"
                      step={1}
                      placeholder="Enter Product Price"
                      className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                      aria-describedby='price-error'
                    />
                    <AddToCart id={product.id} />
                    <UpdateProduct id={product.id} />
                    <DeleteProduct id={product.id} />
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
                  Price
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Available
                </th>
                <th scope="col" className="relative py-3 pl-3 pr-3">
                  <span className="sr-only">Edit</span>
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
                    ${product.price}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {product.available}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-3 pr-3">
                    <div className="flex justify-end gap-3">
                      <input 
                        id="amount"
                        name="amount"
                        type="number"
                        step={1}
                        min={1}
                        max={product.available}
                        placeholder="Amount"
                        className="rounded-md border w-1/3 border-gray-200 py-2 text-sm outline-2 placeholder:text-gray-500"
                      />
                      <AddToCart id={product.id} />
                      <UpdateProduct id={product.id} />
                      <DeleteProduct id={product.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

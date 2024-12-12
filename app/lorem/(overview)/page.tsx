import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import Link from 'next/link';
import ProductCard from '@/app/ui/products/card';
import { getProductByName } from '@/app/lib/data';

export default async function Page() {
  const productNames = [
    'Cartier LOVE Bracelet',
    'Ana Luisa Gold Heart Necklace',
    'Pandora Timeless Pavé Single-row Hoop Earrings',
    'Relaxed Fit Short-sleeved shirt',
    'Balenciaga Under Armour Knit Sneaker',
    'DryMove Pleated tennis skirt',
  ];
  
  const products = await Promise.all(productNames.map(name => getProductByName(name)));

  return (
    <main>
      <h1 className={`${lusitana.className} mb-9 text-xl md:text-4xl text-center font-bold`}>
        Discover Your Ideal Style
      </h1>

      <div className='border-black border-[1px] mb-10' />

      {/* Home Advertise Image */}
      <div className="flex justify-center mb-9">
          <Image 
              src='/home/Slides_1.png' 
              alt='slider image 1'
              width={1220}
              height={1220}
          />
      </div>

      {/* Product Category */}
      <div className='flex justify-center'>
        <div className='flex flex-row max-w-[1220px] justify-between gap-4'>
          <div>
            <Link href={'/lorem/category/apparel'} prefetch={true}>
              <Image 
                  src='/home/apparel.png' 
                  alt='slider image 1'
                  width={610}
                  height={610}
                  className='hover:cursor-pointer hover:opacity-65 transition-opacity duration-300'
              />
            </Link>
          </div>
          <div>
            <Link href={'/lorem/category/accessory'} prefetch={true}>
              <Image 
                  src='/home/accessories_edited.png' 
                  alt='slider image 1'
                  width={610}
                  height={610}
                  className='hover:cursor-pointer hover:opacity-65 transition-opacity duration-300'
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Home Page Product Preview */}
      <div className='flex justify-center mt-9'>
        <div className="grid grid-cols-3 gap-5 w-[1220px] justify-between">
          {products.map((product) => (
              <ProductCard key={product.id} product={product} />
          ),)}
        </div>
      </div>
      
    </main>
  );
}
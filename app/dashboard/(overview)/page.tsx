import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import Link from 'next/link';
export default async function Page() {


  return (
    <main>
      <h1 className={`${lusitana.className} mb-9 text-xl md:text-4xl text-center font-bold`}>
        Discover Your Ideal Style
      </h1>
      <div className='border-black border-[1px] mb-10' />
      <div className="flex justify-center mb-9">
          <Image 
              src='/home/Slides_1.png' 
              alt='slider image 1'
              width={1220}
              height={1220}
          />
      </div>
      <div className='flex justify-center '>
        <div className='flex flex-row max-w-[1220px] justify-between gap-4 '>
          <div>
            <Link href={'/dashboard/category/apparel'}>
              <Image 
                  src='/home/apparel.png' 
                  alt='slider image 1'
                  width={610}
                  height={610}
                  className='hover:cursor-pointer hover:opacity-50 transition-opacity duration-300'
              />
            </Link>
          </div>
          <div>
            <Link href={'/dashboard/category/accessory'}>
              <Image 
                  src='/home/accessories_edited.png' 
                  alt='slider image 1'
                  width={610}
                  height={610}
                  className='hover:cursor-pointer hover:opacity-50 transition-opacity duration-300'
              />
            </Link>

          </div>
        </div>
      </div>
      
    </main>
  );
}
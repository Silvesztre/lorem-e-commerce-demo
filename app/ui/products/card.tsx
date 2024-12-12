import Image from "next/image"
import { lusitana } from '@/app/ui/fonts';
import Link from "next/link";
import { QueryResultRow } from "@vercel/postgres";
import { ProductInCard } from "@/app/lib/definitions";

export default function ProductCard({
    product
}: {
    product: QueryResultRow | ProductInCard
}) {
    return (
        <Link href={`/lorem/products/${product.id}`} prefetch={true}>
            <div className="group w-full max-w-sm overflow-hidden rounded-md border-gray-200 border-[1px] hover:cursor-pointer hover:opacity-65 transition-opacity duration-300">
                <Image
                    src={product.image_url}
                    width={404}
                    height={404}
                    alt={`Image of ${product.name}`}
                    className="w-full h-auto"
                />
                <div className="m-3 pl-2 h-[80px]">
                    <div>
                        <h1 className={`${lusitana.className} text-lg sm:text-xl font-bold`}>
                        {product.name}
                        </h1>
                    </div>
                    <div>
                        <p className="text-base sm:text-lg font-medium">${product.price}</p>
                    </div>
                </div>
            </div>
        </Link>

    )
}
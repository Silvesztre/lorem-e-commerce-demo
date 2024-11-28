import Image from "next/image"
import { lusitana } from '@/app/ui/fonts';
import { Product } from "@/app/lib/definitions";
import Link from "next/link";
import { QueryResult, QueryResultRow } from "@vercel/postgres";

export default function ProductCard({
    product
}: {
    product: QueryResultRow
}) {
    return (
        <Link href={`/lorem/products/${product.id}`} prefetch={true}>
            <div className="max-w-[404px] overflow-hidden rounded-md border-gray-200 border-[1px] hover:cursor-pointer hover:opacity-65 transition-opacity duration-300">
                <Image  
                    src={product.image_url}
                    width={404}
                    height={404}
                    alt="Image of Cartier Bracelet"
                    className="max-w-[404px] max-h-[404px]"
                />
                <div className="m-3 pl-2 h-[80px]">
                    <div>
                        <h1 className={`${lusitana.className} text-xl font-bold`}>{product.name}</h1>
                    </div>
                    <div>
                        <p>${product.price}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
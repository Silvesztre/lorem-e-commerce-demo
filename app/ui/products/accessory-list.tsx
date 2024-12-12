import ProductCard from "./card";
import { fetchFilteredAccessory } from "@/app/lib/data";

export default async function AccessoryList({
    query,
    currentPage,
}: {
    query: string;
    currentPage: number;
}) {
    const products = await fetchFilteredAccessory(query, currentPage);

    return (
        <div className='flex justify-center mt-9'>
            <div className="grid grid-cols-3 gap-5 w-[1220px] justify-between">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ),)}
            </div>
        </div>
    );
}
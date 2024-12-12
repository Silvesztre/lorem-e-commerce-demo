import ProductCard from "./card";
import { fetchFilteredApparel } from "app/lib/data";

export default async function ApparelList({
    query,
    currentPage,
}: {
    query: string;
    currentPage: number;
}) {
    const products = await fetchFilteredApparel(query, currentPage);

    return (
        <div className="grid grid-cols-3 gap-6 p-4">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}
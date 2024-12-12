import { fetchFilteredProducts } from "app/lib/data";
import ProductCard from "./card";

export default async function ProductsList({
    query,
    currentPage,
}: {
    query: string;
    currentPage: number;
}) {
    const products = await fetchFilteredProducts(query, currentPage);

    return (
        <div className="grid grid-cols-3 gap-6 p-4">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}

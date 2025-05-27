import Carousel from "@/components/site/layout/Carousel";
import ProductGrid from "@/components/site/product/ProductGrid";
import BestSeller from "@/components/site/sections/Bestseller";
import NaturalProduct from "@/components/site/sections/NaturalProducts";
import NewProducts from "@/components/site/sections/NewProducts";
import SaleProducts from "@/components/site/sections/SaleProducts";

export default function Page() {
    return (
        <div className="bg-white text-black">
            <div className="container mx-auto px-4">
                <Carousel />

                <BestSeller />
                <NaturalProduct />
                <NewProducts />
                <SaleProducts />
            </div>
        </div>
    );
}

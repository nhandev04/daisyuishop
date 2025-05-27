import React from "react";

function RelatedProducts() {
    return (
        <>
            <h2 className="col-span-full text-lg font-bold">Related Products:</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </>
    );
}

export default RelatedProducts;

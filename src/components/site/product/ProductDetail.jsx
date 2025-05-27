import React from "react";
import ProductInfo from "./ProductInfo";
import ProductImages from "./ProductImages";

const ProductDetail = () => {
    return (
        <div className="flex flex-col md:flex-row gap-2 p-6">
            {/* Cột trái (40%) */}
            <div className="w-full md:w-2/5">
                <ProductImages />
            </div>
            {/* Cột phải (60%) */}
            <div className="w-full md:w-3/5">
                <ProductInfo />
            </div>
        </div>
    );
};

export default ProductDetail;

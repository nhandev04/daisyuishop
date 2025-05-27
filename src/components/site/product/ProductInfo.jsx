import React from "react";

const ProductInfo = () => {
    return (
        <div className="w-2xl mt-4 shadow-lg p-6 bg-white rounded-lg">
            <h2 className="text-2xl font-bold text-sky-600">Product Name</h2>
            <p className="text-lg text-gray-700 mt-2">This is a brief description of the product by TRANBICHLIEN.</p>
            <p className="text-lg text-gray-700 mt-2">This is a brief description of the product by TRANBICHLIEN.</p>
            <div className="mt-4 flex items-center justify-between">
                <span className="text-xl font-semibold text-sky-600">Price: $49.99</span>
                <button className="btn btn-warning">Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductInfo;

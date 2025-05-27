import React from "react";
import CategoryList from "../filters/CategoryList";
import ProductGrid from "../product/ProductGrid";
import FilterBox from "../filters/FilterBox";

const SidebarFilter = () => {
    return (
        <div className="flex flex-col md:flex-row gap-2 p-6">
            {/* Cột trái (40%) */}
            <div className="w-full md:w-1/4">
                <CategoryList />
            </div>
            {/* Cột phải (60%) */}
            <div className="w-full md:w-3/4">
                <FilterBox />
                <ProductGrid />
            </div>
        </div>
    );
};

export default SidebarFilter;

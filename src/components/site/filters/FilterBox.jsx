import React from "react";
import FilterByBrand from "./FilterByBrand";
import FilterByPrice from "./FilterByPrice";
import FilterByName from "./FilterByName";

const FilterBox = () => {
    return (
        <div className="flex gap-4 p-4 rounded-lg">
            <FilterByBrand />
            <FilterByName />
            <FilterByPrice />
        </div>
    );
};

export default FilterBox;

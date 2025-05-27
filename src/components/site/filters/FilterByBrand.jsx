"use client";

import React, { useState } from "react";

function FilterByBrand() {
    const [brand, setBrand] = useState("Samsung");
    return (
        <select value={brand} onChange={(e) => setBrand(e.target.value)} className="select select-accent min-w-1/2">
            <option disabled={true}>Type of product</option>
            <option>Samsung</option>
            <option>Apple</option>
            <option>Google</option>
        </select>
    );
}

export default FilterByBrand;

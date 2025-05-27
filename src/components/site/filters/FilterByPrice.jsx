"use client";

import React, { useState } from "react";

function FilterByPrice() {
    const [value, setValue] = useState(40);
    return (
        <input
            type="range"
            min={0}
            max="100"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className="range range-accent"
        />
    );
}

export default FilterByPrice;

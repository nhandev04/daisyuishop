"use client";

import React, { useState } from "react";

function FilterByName() {
    const [value, setValue] = useState("");
    return (
        <input
            type="text"
            placeholder="Accent"
            className="input input-accent"
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    );
}

export default FilterByName;

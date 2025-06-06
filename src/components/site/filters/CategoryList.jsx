import React from "react";

const CategoryList = () => {
    return (
        <ul className="list bg-base-100 rounded-box shadow-md">
            <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">All Categories:</li>

            <li className="list-row">
                <div>
                    <img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp" />
                </div>
                <div>
                    <div>BICHLIENNE</div>
                    <div className="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
                </div>
            </li>

            <li className="list-row">
                <div>
                    <img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/4@94.webp" />
                </div>
                <div>
                    <div>BICHLIENNE</div>
                    <div className="text-xs uppercase font-semibold opacity-60">Bears of a fever</div>
                </div>
            </li>

            <li className="list-row">
                <div>
                    <img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/3@94.webp" />
                </div>
                <div>
                    <div>BICHLIENNE</div>
                    <div className="text-xs uppercase font-semibold opacity-60">Cappuccino</div>
                </div>
            </li>
        </ul>
    );
};

export default CategoryList;

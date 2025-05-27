import Link from "next/link";
import React from "react";

const ProductCard = () => {
    return (
        <div className="card bg-base-100 w-fit shadow-sm">
            <figure>
                <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
            </figure>
            <div className="card-body">
                <Link href="/site/products/1" className="card-title">
                    BICHLIEN
                    <div className="badge badge-secondary">NEW</div>
                </Link>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <button className="btn btn-warning">Add to card</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

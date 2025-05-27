import React from "react";

const ProductImages = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="carousel-item">
                <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" alt="Pizza" />
            </div>

            <div className="flex mt-4 gap-0 h-fit rounded-box overflow-hidden">
                <div className="w-24 h-fit">
                    <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" alt="Pizza" />
                </div>
                <div className="w-24 h-fit">
                    <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" alt="Pizza" />
                </div>
                <div className="w-24 h-fit">
                    <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" alt="Pizza" />
                </div>
                <div className="w-24 h-fit">
                    <img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp" alt="Pizza" />
                </div>
            </div>
        </div>
    );
};

export default ProductImages;

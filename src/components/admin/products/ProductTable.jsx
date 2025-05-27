"use client";

import ProductItem from "./ProductItem";

const mockProducts = [
    { id: "P001", name: "Sản phẩm 1", price: 100000, status: "Còn hàng" },
    { id: "P002", name: "Sản phẩm 2", price: 200000, status: "Hết hàng" },
    { id: "P003", name: "Sản phẩm 3", price: 150000, status: "Còn hàng" },
];

// ProductTable component
export default function ProductTable() {
    return (
        <div className="overflow-x-auto bg-white rounded shadow">
            <table className="min-w-full border-collapse">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="px-4 py-2 border">STT</th>
                        <th className="px-4 py-2 border">ID</th>
                        <th className="px-4 py-2 border">Tên Sản Phẩm</th>
                        <th className="px-4 py-2 border">Giá</th>
                        <th className="px-4 py-2 border">Tình Trạng</th>
                        <th className="px-4 py-2 border">Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    {mockProducts.map((product, idx) => (
                        <ProductItem
                            key={product.id}
                            stt={idx + 1}
                            id={product.id}
                            name={product.name}
                            price={product.price.toLocaleString("vi-VN")} // format as VND
                            status={product.status}
                            onEdit={() => {}}
                            onDelete={() => {}}
                        />
                    ))}
                </tbody>
            </table>
            <div className="p-4 w-full flex justify-center">
                <div className="join">
                    <input
                        className="join-item btn btn-square"
                        type="radio"
                        name="options"
                        aria-label="1"
                        defaultChecked
                    />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
                </div>
            </div>
        </div>
    );
}

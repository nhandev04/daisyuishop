"use client";

import { FaEye } from "react-icons/fa";
import ProductItem from "./ProductItem";

const mockProducts = [
    { id: "P001", name: "Sản phẩm 1", price: 100000, status: <FaEye /> },
    { id: "P002", name: "Sản phẩm 2", price: 200000, status: <FaEye /> },
    { id: "P003", name: "Sản phẩm 3", price: 150000, status: <FaEye /> },
];

// ProductTable component
export default function ProductTable() {
    return (
        <div className="overflow-x-auto rounded">
            <table className="min-w-full border-none">
                <thead>
                    <tr className="bg-white border-none">
                        <th className="px-4 py-2 text-left">STT</th>
                        <th className="px-4 py-2 text-left">ID</th>
                        <th className="px-4 py-2 text-left">Name</th>
                        <th className="px-4 py-2 text-left">Price</th>
                        <th className="px-4 py-2 text-left">Status</th>
                        {/* <th className="px-4 py-2 border">Hành Động</th> */}
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
                    <button className="join-item btn">«</button>
                    <button className="join-item btn">1</button>
                    <button className="join-item btn">2</button>
                    <button className="join-item btn">Page 3</button>
                    <button className="join-item btn">4</button>
                    <button className="join-item btn">5</button>
                    <button className="join-item btn">»</button>
                </div>
            </div>
        </div>
    );
}

"use client";

// ProductItem component
export default function ProductItem({ stt, id, name, price, status, onEdit, onDelete }) {
    return (
        <tr>
            <td className="px-4 py-2  border-b border-gray-200 text-left">{stt}</td>
            <td className="px-4 py-2  border-b border-gray-200 text-left">{id}</td>
            <td className="px-4 py-2  border-b border-gray-200 text-left">{name}</td>
            <td className="px-4 py-2  border-b border-gray-200 text-left">{price}</td>
            <td className="px-4 py-2  border-b border-gray-200 text-left">{status}</td>
            {/* <td className="px-4 py-2 border text-center">
                <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2" onClick={onEdit}>
                    Edit
                </button>
                <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={onDelete}>
                    Delete
                </button>
            </td> */}
        </tr>
    );
}

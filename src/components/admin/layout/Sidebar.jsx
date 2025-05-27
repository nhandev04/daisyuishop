import Link from "next/link";

// Sidebar (Admin Menu) component
export default function Sidebar() {
    return (
        <aside className="p-4 w-64 border-r border-gray-200 bg-teal-600 text-white text-lg">
            <div className="text-center font-bold mb-4">Admin Panel</div>
            <ul className="menu rounded-box w-56 bg-accent text-white text-lg">
                <li>
                    <Link href="/admin">Dashboard</Link>
                </li>
                <li>
                    <details>
                        <summary>Products</summary>
                        <ul>
                            <li>
                                <Link href="/admin/products">All Products</Link>
                            </li>
                            <li>
                                <Link href="/admin/products/add">Add Product</Link>
                            </li>
                        </ul>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>Categories</summary>
                        <ul>
                            <li>
                                <Link href="/admin/categories">All Categories</Link>
                            </li>
                            <li>
                                <Link href="/admin/categories/add">Add Category</Link>
                            </li>
                        </ul>
                    </details>
                </li>
                <li>
                    <Link href="/admin/orders">Orders</Link>
                </li>
                <li>
                    <Link href="/admin/users">Users</Link>
                </li>
            </ul>
        </aside>
    );
}

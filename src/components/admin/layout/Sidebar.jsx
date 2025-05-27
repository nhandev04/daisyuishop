import Link from "next/link";
import { FaTachometerAlt, FaBoxOpen, FaTags, FaShoppingCart, FaUsers, FaList, FaPlus } from "react-icons/fa";

// Sidebar (Admin Menu) component
export default function Sidebar() {
    return (
        <aside className="p-4 w-80 border-r border-gray-200 bg-teal-600 text-white text-lg">
            <div className="text-center font-bold mb-4">Admin Panel</div>
            <ul className="menu rounded-box w-full bg-accent text-white text-lg">
                <li className="truncate">
                    <Link href="/admin" className="flex items-center gap-2 w-full truncate">
                        <FaTachometerAlt />
                        <span className="truncate">Dashboard</span>
                    </Link>
                </li>
                <li className="truncate">
                    <details>
                        <summary className="flex items-center gap-2 w-full truncate">
                            <FaBoxOpen />
                            <span className="truncate">Products</span>
                        </summary>
                        <ul>
                            <li className="truncate">
                                <Link href="/admin/products" className="flex items-center gap-2 w-full truncate">
                                    <FaList />
                                    <span className="truncate">All Products</span>
                                </Link>
                            </li>
                            <li className="truncate">
                                <Link href="/admin/products/add" className="flex items-center gap-2 w-full truncate">
                                    <FaPlus />
                                    <span className="truncate">Add Product</span>
                                </Link>
                            </li>
                        </ul>
                    </details>
                </li>
                <li className="truncate">
                    <details>
                        <summary className="flex items-center gap-2 w-full truncate">
                            <FaTags />
                            <span className="truncate">Categories</span>
                        </summary>
                        <ul>
                            <li className="truncate">
                                <Link href="/admin/categories" className="flex items-center gap-2 w-full truncate">
                                    <FaList />
                                    <span className="truncate">All Categories</span>
                                </Link>
                            </li>
                            <li className="truncate">
                                <Link href="/admin/categories/add" className="flex items-center gap-2 w-full truncate">
                                    <FaPlus />
                                    <span className="truncate">Add Category</span>
                                </Link>
                            </li>
                        </ul>
                    </details>
                </li>
                <li className="truncate">
                    <details>
                        <summary className="flex items-center gap-2 w-full truncate">
                            <FaShoppingCart />
                            <span className="truncate">Orders</span>
                        </summary>
                        <ul>
                            <li className="truncate">
                                <Link href="/admin/orders" className="flex items-center gap-2 w-full truncate">
                                    <FaList />
                                    <span className="truncate">Order Management</span>
                                </Link>
                            </li>
                        </ul>
                    </details>
                </li>
                <li className="truncate">
                    <details>
                        <summary className="flex items-center gap-2 w-full truncate">
                            <FaUsers />
                            <span className="truncate">Users</span>
                        </summary>
                        <ul>
                            <li className="truncate">
                                <Link href="/admin/users" className="flex items-center gap-2 w-full truncate">
                                    <FaList />
                                    <span className="truncate">User Management</span>
                                </Link>
                            </li>
                        </ul>
                    </details>
                </li>
            </ul>
        </aside>
    );
}

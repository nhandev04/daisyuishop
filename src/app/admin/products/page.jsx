import ProductTable from "@/components/admin/products/ProductTable";

export default function ProductsPage() {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Products</h2>
            <ProductTable />
        </div>
    );
}

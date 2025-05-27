import ProductForm from "@/components/admin/products/ProductForm";

export default function AddProductPage() {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Thêm Sản Phẩm</h2>
            <ProductForm />
        </div>
    );
}

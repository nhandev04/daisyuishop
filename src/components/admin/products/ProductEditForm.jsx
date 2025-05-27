// ProductForm component
export default function ProductForm() {
    return (
        <form className="space-y-4">
            <div>
                <label className="block text-sm font-medium">Tên Sản Phẩm:</label>
                <input type="text" className="w-full border rounded p-2" />
            </div>
            <div>
                <label className="block text-sm font-medium">Mô Tả:</label>
                <textarea className="w-full border rounded p-2"></textarea>
            </div>
            <div>
                <label className="block text-sm font-medium">Giá:</label>
                <input type="number" className="w-full border rounded p-2" />
            </div>
            <div>
                <label className="block text-sm font-medium">Ngày Xuất Bản:</label>
                <input type="datetime-local" className="w-full border rounded p-2" />
            </div>
            <div>
                <label className="block text-sm font-medium">ID Người Tạo:</label>
                <input type="text" className="w-full border rounded p-2" />
            </div>
            <div>
                <label className="block text-sm font-medium">ID Người Cập Nhật:</label>
                <input type="text" className="w-full border rounded p-2" />
            </div>
            <div>
                <label className="block text-sm font-medium">Lượt Xem:</label>
                <input type="number" className="w-full border rounded p-2" />
            </div>
            <div>
                <label className="block text-sm font-medium">Đã Bán:</label>
                <input type="number" className="w-full border rounded p-2" />
            </div>
            <div>
                <label className="block text-sm font-medium">Trạng Thái:</label>
                <input type="text" className="w-full border rounded p-2" />
            </div>
            <div>
                <label className="block text-sm font-medium">Tính Năng:</label>
                <textarea className="w-full border rounded p-2"></textarea>
            </div>
            <div>
                <label className="block text-sm font-medium">Thành Phần:</label>
                <textarea className="w-full border rounded p-2"></textarea>
            </div>
            <div>
                <label className="block text-sm font-medium">Hướng Dẫn Sử Dụng:</label>
                <textarea className="w-full border rounded p-2"></textarea>
            </div>
            <div>
                <label className="block text-sm font-medium">Tóm Tắt:</label>
                <textarea className="w-full border rounded p-2"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Thêm Sản Phẩm
            </button>
        </form>
    );
}

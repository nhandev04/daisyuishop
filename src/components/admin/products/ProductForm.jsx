// ProductForm component
export default function ProductForm() {
    return (
        <form className="space-y-0 max-w-xl mx-auto">
            <div className="grid grid-cols-12 gap-4 items-center border border-gray-200  px-1">
                <label className="col-span-4 text-sm font-medium text-left">Tên Sản Phẩm:</label>
                <input type="text" className="col-span-8 w-full border border-gray-200 rounded p-2" />
            </div>
            <div className="grid grid-cols-12 gap-4 items-center border border-gray-200  px-1">
                <label className="col-span-4 text-sm font-medium text-left">Mô Tả:</label>
                <textarea className="col-span-8 w-full border border-gray-200 rounded p-2"></textarea>
            </div>
            <div className="grid grid-cols-12 gap-4 items-center border border-gray-200  px-1">
                <label className="col-span-4 text-sm font-medium text-left">Giá:</label>
                <input type="number" className="col-span-8 w-full border border-gray-200 rounded p-2" />
            </div>
            <div className="grid grid-cols-12 gap-4 items-center border border-gray-200  px-1">
                <label className="col-span-4 text-sm font-medium text-left">Ngày Xuất Bản:</label>
                <input type="datetime-local" className="col-span-8 w-full border border-gray-200 rounded p-2" />
            </div>
            <div className="grid grid-cols-12 gap-4 items-center border border-gray-200  px-1">
                <label className="col-span-4 text-sm font-medium text-left">ID Người Tạo:</label>
                <input type="text" className="col-span-8 w-full border border-gray-200 rounded p-2" />
            </div>
            <div className="grid grid-cols-12 gap-4 items-center border border-gray-200  px-1">
                <label className="col-span-4 text-sm font-medium text-left">ID Người Cập Nhật:</label>
                <input type="text" className="col-span-8 w-full border border-gray-200 rounded p-2" />
            </div>
            <div className="grid grid-cols-12 gap-4 items-center border border-gray-200  px-1">
                <label className="col-span-4 text-sm font-medium text-left">Lượt Xem:</label>
                <input type="number" className="col-span-8 w-full border border-gray-200 rounded p-2" />
            </div>
            <div className="grid grid-cols-12 gap-4 items-center border border-gray-200  px-1">
                <label className="col-span-4 text-sm font-medium text-left">Đã Bán:</label>
                <input type="number" className="col-span-8 w-full border border-gray-200 rounded p-2" />
            </div>
            <div className="grid grid-cols-12 gap-4 items-center border border-gray-200  px-1">
                <label className="col-span-4 text-sm font-medium text-left">Trạng Thái:</label>
                <input type="text" className="col-span-8 w-full border border-gray-200 rounded p-2" />
            </div>
            <div className="grid grid-cols-12 gap-4 items-center border border-gray-200  px-1">
                <label className="col-span-4 text-sm font-medium text-left">Tính Năng:</label>
                <textarea className="col-span-8 w-full border border-gray-200 rounded p-2"></textarea>
            </div>
            <div className="grid grid-cols-12 gap-4 items-center border border-gray-200  px-1">
                <label className="col-span-4 text-sm font-medium text-left">Thành Phần:</label>
                <textarea className="col-span-8 w-full border border-gray-200 rounded p-2"></textarea>
            </div>
            <div className="grid grid-cols-12 gap-4 items-center border border-gray-200  px-1">
                <label className="col-span-4 text-sm font-medium text-left">Hướng Dẫn Sử Dụng:</label>
                <textarea className="col-span-8 w-full border border-gray-200 rounded p-2"></textarea>
            </div>
            <div className="grid grid-cols-12 gap-4 items-center border border-gray-200  px-1">
                <label className="col-span-4 text-sm font-medium text-left">Tóm Tắt:</label>
                <textarea className="col-span-8 w-full border border-gray-200 rounded p-2"></textarea>
            </div>
            <div className="text-center">
                <button type="submit" className="bg-blue-500 text-white mt-4 px-4 py-2 rounded">
                    Thêm Sản Phẩm
                </button>
            </div>
        </form>
    );
}

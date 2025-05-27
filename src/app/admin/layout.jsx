import Header from "@/components/admin/layout/Header";
import Sidebar from "@/components/admin/layout/Sidebar";
import Footer from "@/components/admin/layout/Footer";

export default function AdminLayout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-1">
                <Sidebar className="w-64" />
                <main className="flex-1 p-6 bg-gray-50">{children}</main>
            </div>
            <Footer />
        </div>
    );
}

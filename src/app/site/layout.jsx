import Footer from "@/components/site/layout/Footer";
import Header from "@/components/site/layout/Header";

export default function Layout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

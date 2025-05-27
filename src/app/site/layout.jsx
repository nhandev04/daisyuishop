import Header from "@/components/site/layout/Header";

export default function Layout({ children }) {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
}

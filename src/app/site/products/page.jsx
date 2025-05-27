import Carousel from "@/components/site/layout/Carousel";
import SidebarFilter from "@/components/site/layout/SidebarFilter";

export default function Page() {
    return (
        <div className="bg-white text-black">
            <div className="container mx-auto px-4">
                <Carousel />

                <h1 className="text-base font-bold my-4">All Product:</h1>
                <SidebarFilter />
            </div>
        </div>
    );
}

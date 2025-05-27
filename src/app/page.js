import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-base-200">
            <div className="card w-96 bg-primary text-primary-content">
                <div className="card-body">
                    <h2 className="card-title">Chào mừng bạn đến với My Shop!</h2>
                    <p>Khám phá ngay những sản phẩm mới nhất trong shop của Trần Bích Liên</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-secondary">Mua sắm ngay</button>
                    </div>
                </div>
            </div>
        </main>
    );
}

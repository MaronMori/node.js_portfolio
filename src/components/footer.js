export const Footer = () => {
    const year = new Date().getFullYear(); // 現在の年を取得

    return (
        <footer className="text-center bg-light py-3 pb-5">
            <div className="container">
                <p className="mb-0">© {year} Ryoga Mori. All rights reserved.</p>
            </div>
        </footer>
    );
}
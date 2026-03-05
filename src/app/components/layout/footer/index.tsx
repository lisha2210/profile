import Link from "next/link"

const Footer = () => {
    return (
        <footer className="-translate-y-[1px] bg-white border-t border-primary/10">
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="max-w-3xl mx-auto flex justify-center gap-10 sm:gap-16 px-4 sm:px-7 py-4 md:py-7">
                        <p>2026 © Lisha Muthukumar — All rights reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
"use client";
import Image from "next/image"
import Link from "next/link";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
    const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        navigator.clipboard.writeText("lishanandhini2210@gmail.com");
        alert("Email 'lishanandhini2210@gmail.com' has been copied to your clipboard!");
        window.location.href = "mailto:lishanandhini2210@gmail.com";
    };

    return (
        <section>
            <div className="container">
                <div className="">
                    <div className="w-full h-72">
                        <Image src={"/profile/images/hero-sec/sunflower-banner.png"} alt="banner-img" width={1080} height={267} className="w-full h-full object-cover" />
                    </div>
                    <div className="border-x border-primary/10">
                        <div className="relative flex flex-col xs:flex-row items-center xs:items-start justify-center xs:justify-between max-w-3xl mx-auto gap-10 xs:gap-3 px-4 sm:px-7 pt-22 pb-8 sm:pb-12">
                            <div className="absolute top-0 transform -translate-y-1/2">
                                <Image src={"/profile/images/hero-sec/profile.png"} alt="user-img" width={145} height={145} className="border-4 border-white rounded-full bg-white object-cover aspect-square" />
                                <span className="absolute bottom-2.5 right-5 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
                            </div>
                            <div className="flex flex-col gap-2 sm:gap-3 items-center text-center xs:items-start">
                                <h1 className="text-4xl font-bold">Lisha Muthukumar</h1>
                                <p className="text-violet-700 font-normal">Associate English Language Trainer</p>
                                <div className="flex items-center gap-2">
                                    <Image src={"/profile/images/icon/map-icon.svg"} alt="map-icon" width={20} height={20} />
                                    <p className="text-primary">Puducherry, India</p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <Link href="https://www.linkedin.com/in/lishanandhini-muthukumar/" target="_blank" className="w-fit px-4 py-2 text-primary hover:bg-primary/5 border border-primary/10 rounded-full text-sm font-medium">LinkedIn</Link>
                                    <Link href="https://www.blogger.com/profile/01273202408577306866" target="_blank" className="w-fit px-4 py-2 text-primary hover:bg-primary/5 border border-primary/10 rounded-full text-sm font-medium">Blogger</Link>
                                </div>
                                <a
                                    href="mailto:lishanandhini2210@gmail.com"
                                    onClick={handleEmailClick}
                                    className="cursor-pointer inline-block p-0.5 rounded-full bg-[linear-gradient(96.09deg,_#9282F8_12.17%,_#F3CA4D_90.71%)]"
                                >
                                    <span className="flex items-center gap-3 bg-primary hover:bg-[linear-gradient(96.09deg,_#9282F8_12.17%,_#F3CA4D_90.71%)] py-2.5 px-5 rounded-full">
                                        <Image
                                            src="/profile/images/icon/spark-icon.svg"
                                            alt="spark-icon"
                                            width={14}
                                            height={14}
                                        />
                                        <span className="text-sm sm:text-base font-semibold text-white">Get in touch</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection


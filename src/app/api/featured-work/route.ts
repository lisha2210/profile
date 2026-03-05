import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

const featureWork = [
    {
        title: "BEACH",
        description: "Some will understand and some may not: Not gonna lie, in my 22 years and 8 months on this chaotic Earth, I’ve always dreamt of seeing the beach the waves, the breeze, the salty air that smells like freedom...",
        roles: ["Writer", "Creator"],
        image: "/images/feature-work/beach.png",
        url: "https://lishamuthukumar.blogspot.com/2025/07/beach.html"
    },
    {
        title: "Ghibli Trend why not AI",
        description: "Hayao Miyazaki (born 1941) is a legendary Japanese animator, filmmaker, screenwriter, author, and manga artist. For people unfamiliar with manga who might ask, “Hey, what’s manga?”...",
        roles: ["Writer", "Reviewer"],
        image: "/images/feature-work/ghibli.png",
        url: "https://lishamuthukumar.blogspot.com/2025/03/ghibli-trend-why-not-ai.html"
    }
]

export const GET = async () => {
    return NextResponse.json({
        featureWork
    });
};
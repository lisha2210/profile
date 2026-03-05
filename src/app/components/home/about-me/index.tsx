import { Badge } from "@/components/ui/badge";

const AboutMe = () => {
    const servicesBedge = ["Academic writing and research", "Literature analysis and textual interpretation", "Classroom instruction and lesson planning", "Public speaking and mentoring"];
    return (
        <section>
            <div className="container">
                <div className="border-x border-primary/10 bg-[url('/profile/images/about-me/about-me-bg.svg')] bg-cover bg-center bg-no-repeat">
                    <div className="flex flex-col gap-9 sm:gap-12 max-w-3xl mx-auto px-4 sm:px-7 py-11 md:py-20">
                        <div className="flex flex-col gap-4">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">About Me</p>
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px]">I'm Lisha, a passionate literature graduate deeply interested in stories, words, and the <span className="bg-[linear-gradient(90deg,_rgba(243,202,77,0.4)_0%,_rgba(243,202,77,0.05)_100%)]">art of communication</span>.</h2>
                            <h5 className="text-secondary font-normal">I have a keen eye for detail, love crafting content, and am skilled at using AI tools effectively for research and writing. My journey from reading books under school benches to presenting on All India Radio reflects my commitment to making literature accessible and alive. I believe in lifelong learning, engaging discussions, and helping students discover the confidence to express themselves.</h5>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-sm text-primary uppercase font-medium">Technical Skills</p>
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                {servicesBedge?.map((value, index) => {
                                    return (
                                        <Badge variant={"outline"} key={index} className="py-1.5 px-3 rounded-lg">
                                            <p className="text-xs sm:text-sm font-medium text-primary">{value}</p>
                                        </Badge>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
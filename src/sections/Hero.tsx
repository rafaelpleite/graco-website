import React from "react";
import Image from "next/image";
import HeroPoster from "@/assets/hero.png";
import HeroMobilePoster from "@/assets/hero-mobile.png";
import Header from "@/components/layout/Header";
import Wrapper from "@/shared/Wrapper";

const Hero = () => {
    return (
        <section className="relative w-full h-screen">
            <Wrapper>
                <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                    <Header />
                    <div className="block h-sm:hidden">
                        <Image
                            src={HeroMobilePoster}
                            alt="Hero Mobile"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    
                    <div className="hidden h-sm:block">
                        <Image
                            src={HeroPoster}
                            alt="Hero"
                            fill
                            className="object-cover"
                            priority
                        />

                    </div>

                </div>
            </Wrapper>
        </section>
    );
};

export default Hero;

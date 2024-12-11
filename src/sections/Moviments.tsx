// src/sections/Moviments.tsx
import React from "react";
import Wrapper from "@/shared/Wrapper";
import FirmadoRocha from "@/assets/FirmadoRocha.png";
import Image from "next/image";

const Moviments = () => {
    return (
        <section className="text-black py-2 md:py-8">
            <Wrapper>
                {/* Desktop Version */}
                <div className="hidden md:block">
                    <div className="relative">
                        {/* Background Div */}
                        <div className="absolute top-2/3 left-0 transform -translate-y-2/3 w-full">
                            <div className="bg-[#D9D9D9] w-full h-[325px]"></div>
                        </div>

                        {/* Text and Content */}
                        <div className="relative flex flex-col items-start max-w-screen-lg mx-auto">
                            <div className="relative flex flex-row items-center w-full">
                                {/* Left Side - Text Content */}
                                <div className="w-1/2 p-8">
                                    <p className="absolute text-6xl font-bold text-white top-16">
                                        CRISTÃOS
                                    </p>
                                    <p className="text-2xl font-light text-black">
                                        que não estudam a Bíblia, deixam de ter a sua fé firmada
                                        na rocha e passam a ser conduzidos por vãs doutrinas.
                                    </p>
                                    <p className="text-2xl font-bold text-black mt-4">
                                        Junte-se a nós e nos ajude a transformar a vida de milhões
                                        de cristãos por meio da Palavra de Deus.
                                    </p>
                                    <p className="text-xl text-black mt-8">
                                        <strong>#movimento</strong>espalhandoa<strong>palavra</strong>
                                    </p>
                                </div>

                                {/* Right Side - Image */}
                                <div className="w-1/2 flex justify-center">
                                    <Image
                                        src={FirmadoRocha}
                                        alt="FirmadoRocha"
                                        width={600}
                                        height={600}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Version */}
                <div className="block md:hidden">
                    {/* Image First */}
                    <div className="relative flex justify-center p-4">
                        {/* Background Div */}
                        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full">
                            <div className="bg-[#D9D9D9] w-full h-[200px]"></div>
                        </div>
                        {/* Image */}
                        <Image
                            src={FirmadoRocha}
                            alt="FirmadoRocha"
                            width={400}
                            height={400}
                            className="relative z-10"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="p-4">
                        <p className="text-3xl font-bold text-white text-left">
                            CRISTÃOS
                        </p>
                        <div className="rounded bg-[#D9D9D9] w-full h-full mt-4 p-4">
                            <p className="text-2xl font-light text-black">
                                que não estudam a Bíblia, deixam de ter a sua fé firmada na
                                rocha e passam a ser conduzidos por vãs doutrinas.
                            </p>
                            <p className="text-2xl font-bold text-black mt-8">
                                Junte-se a nós e nos ajude a transformar a vida de milhões de
                                cristãos por meio da Palavra de Deus.
                            </p>
                            <p className="text-2xl font-bold text-black mt-8">
                                #movimentoespalhandoapalavra
                            </p>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
};

export default Moviments;

import React from "react";
import Wrapper from "@/shared/Wrapper";
import FirmadoRocha from "@/assets/FirmadoRocha.png";
import Image from "next/image";

const Moviments = () => {
    return (
        <section className="py-8 text-black">
            <Wrapper>
                <p className="text-5xl font-bold text-white px-64">CRISTÃOS</p>
                <div className="bg-[#D9D9D9] w-50 h-50">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="w-4/10 p-4 ml-64">
                            <p className="text-4xl font-light text-black">
                                que não estudam a
                                Bíblia, deixam de ter
                                a sua fé firmada na rocha
                                e passam a ser conduzidos
                                por vãs doutrinas.
                            </p>
                            <p className="text-4xl font-bold text-black mt-8">
                                Junte-se a nós e nos
                                ajude a transformar a
                                vida de milhões de cristãos
                                por meio da Palavra de Deus.
                            </p>
                            <p className="text-4xl font-bold text-black mt-8">#movimentoespalhandoapalavra</p>

                        </div>
                        <div className="w-6/10 gap-y-4 mr-64">
                            <p>
                                <Image
                                src={FirmadoRocha}
                                alt="FirmadoRocha"
                                width={5000}
                                />
                            </p>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section >
    )
}

export default Moviments;

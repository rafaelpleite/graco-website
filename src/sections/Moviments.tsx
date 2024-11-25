// src/sections/Moviments.tsx
import React from "react";
import Wrapper from "@/shared/Wrapper";
import FirmadoRocha from "@/assets/FirmadoRocha.png";
import Image from "next/image";

const Moviments = () => {
  return (
    <section className="text-black py-8">
      <Wrapper>
        {/* Desktop Version */}
        <div className="hidden md:block">
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
                <p className="text-4xl font-bold text-black mt-8">
                  #movimentoespalhandoapalavra
                </p>
              </div>
              <div className="w-6/10 gap-y-4 mr-64">
                <p>
                  <Image
                    src={FirmadoRocha}
                    alt="FirmadoRocha"
                    width={5000}
                    height={5000}
                  />
                </p>
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

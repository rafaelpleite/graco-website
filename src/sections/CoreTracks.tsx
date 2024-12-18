// src/sections/CoreTracks.tsx
'use client';

import React from "react";
import Wrapper from "@/shared/Wrapper";
import Image from "next/image";
import { useState } from 'react';

import BRAND from "@/assets/Tracks/BRAND.png";
import EDITORA from "@/assets/Tracks/EDITORA.png";
import ESCOLA from "@/assets/Tracks/ESCOLA.png";
import GRACO from "@/assets/Tracks/GRACO.png";
import PLAY from "@/assets/Tracks/PLAY.png";

const CoreTracks = () => {
    const [selectedItem, setSelectedItem] = useState<keyof typeof images>('GRACO');

    const images = {
        GRACO: GRACO,
        ESCOLA: ESCOLA,
        BRAND: BRAND,
        EDITORA: EDITORA,
        PLAY: PLAY,
    };

    const renderContent = () => {
        if (selectedItem === 'GRACO') {
            return (
                <>
                    <p className="text-5xl font-bold text-black m-4">Conheça a <br /> GRACO </p>
                    <p className="text-3xl font-bold text-black mt-8 mx-4">O ecossistema do cristão.</p>
                    <p className="text-xl font-light text-black mt-2 mx-4">
                        Fundada em 2022, o ecossistema GRACO é um ministério de
                        ensino da palavra de Deus, que tem como missão edificar e
                        capacitar o corpo de Cristo, levando-o ao caminho da GRAça
                        e COnhecimento de Deus.
                    </p>
                    <p className="text-xl font-light text-black mt-8 mx-4">
                        Dentro do nosso ecossistema você encontrará a Escola GRACO;
                        Editora GRACO; GRACObrand; e GRACOplay. Através destes
                        braços, muitas vidas estão sendo transformadas e muitos
                        cristãos estão mergulhando na santa Palavra de Deus.
                    </p>
                    <p className="text-3xl font-bold text-black mt-8 mx-4">#wearegraco</p>
                </>
            );
        } else if (selectedItem === 'ESCOLA') {
            return (
                <>
                    <p className="text-5xl font-bold text-black m-4">Conheça a <br /> Escola GRACO</p>
                    <p className="text-3xl font-bold text-black mt-8 mx-4">
                        Crescendo na GRAça e no COnhecimento.
                    </p>
                    <p className="text-xl font-light text-black mt-2 mx-4">
                        A Escola GRACO é uma escola teológica com ênfase
                        ministerial. Por meio de nossos cursos teológicos,
                        fornecemos tudo que um cristão precisa
                        para se aprofundar na Palavra de Deus.
                    </p>
                    <p className="text-xl font-light text-black mt-8 mx-4">
                        Deseja se preparar para a obra ministerial, ou
                        simplesmente conhecer mais do Deus que você serve?
                        Clique no link abaixo e conheça mais da nossa escola
                        teológica.
                    </p>
                    <a href="https://escolagraco.com.br" className="text-xl text-sky-600 mx-4">
                        escolagraco.com.br
                    </a>
                </>
            );
        }
        else if (selectedItem === 'EDITORA') {
            return (
                <>
                    <p className="text-5xl font-bold text-black m-4">Conheça a <br /> Editora GRACO </p>
                    <p className="text-3xl font-bold text-black mt-8 mx-4">
                        Levando cristãos ao potencial máximo.
                    </p>
                    <p className="text-xl font-light text-black mt-2 mx-4">
                        A Editora GRACO é uma editora de livros cristãos
                        que visa edificar e capacitar o corpo de Cristo, além
                        de anunciar a mensagem do evangelho. Nossos livros
                        possuem o foco principal de conduzir os leitores ao
                        pleno conhecimento de Deus.
                    </p>
                    <p className="text-xl font-light text-black mt-8 mx-4">
                        Deseja conhecer mais da editora GRACO, dos nossos
                        livros e até mesmo se tornar um de nossos autores?
                        Clique no link abaixo.
                    </p>
                    <a href="https://editoragraco.com" className="text-xl text-sky-600 mx-4">
                        editoragraco.com
                    </a>
                </>
            );
        }
        else if (selectedItem === 'BRAND') {
            return (
                <>
                    <p className="text-5xl font-bold text-black m-4">Conheça a <br /> GRACObrand </p>
                    <p className="text-3xl font-bold text-black mt-8 mx-4">
                        Produtos que transformam.
                    </p>
                    <p className="text-xl font-light text-black mt-2 mx-4">
                        A GRACObrand é uma marca de produtos
                        que vão além da moda. Nosso foco é
                        estabelecer uma cultura de excelência e
                        impacto, com produtos que trazem elegância
                        e transformação.
                    </p>
                    <p className="text-xl font-light text-black mt-8 mx-4">
                        Clique no link abaixo e conheça nossa loja
                        virtual.
                    </p>
                    <a href="https://gracobrand.com" className="text-xl text-sky-600 mx-4">
                        gracobrand.com
                    </a>
                </>
            );
        }
        else if (selectedItem === 'PLAY') {
            return (
                <>
                    <p className="text-7xl font-bold text-black mt-8 m-4">
                        Estamos construindo
                        o maior streaming de
                        teologia do Brasil!
                    </p>
                </>
            );
        }
    };


    return (
        <section className="py-8 text-black px-2 md:px-8">
            <Wrapper>
                <div className="bg-[#D9D9D9] rounded-xl max-w-screen-lg mx-auto">
                    <div className="hidden md:flex md:flex-row h-[600px] flex-col">
                        <div className="w-full md:w-1/3 p-4 flex flex-col items-center">

                            <Image
                                src={images[selectedItem]}
                                alt={`${selectedItem} Logo`}
                                width={200}
                                height={200}
                            />
                            <ul className="flex flex-col text-xl my-6">
                                {['GRACO', 'ESCOLA', 'EDITORA', 'BRAND', 'PLAY'].map((item) => (
                                    <li key={item}>
                                        <div
                                            className={`font-bold my-3 cursor-pointer ${selectedItem === item ? 'text-[#898989]' : ''
                                                }`}
                                            onClick={() => setSelectedItem(item as keyof typeof images)}
                                        >
                                            {item}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="hidden md:block w-px h-[90%] bg-[#aaa] self-center"></div>
                        <div className="w-full md:w-2/3 p-4 overflow-y-auto">
                            {renderContent()}
                        </div>
                    </div>

                    <div className="md:hidden min-h-[80vh] flex flex-col">
                        <div className="flex flex-col items-center">
                            <ul className="flex flex-row my-6 overflow-x-auto">
                                {['GRACO', 'ESCOLA', 'EDITORA', 'BRAND', 'PLAY'].map((item) => (
                                    <li key={item} className="mr-4 text-sm">
                                        <div
                                            className={`font-bold cursor-pointer ${selectedItem === item ? 'text-[#898989]' : ''
                                                }`}
                                            onClick={() => setSelectedItem(item as keyof typeof images)}
                                        >
                                            {item}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-4 flex-1 overflow-y-auto">
                            {renderContent()}
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
};

export default CoreTracks;

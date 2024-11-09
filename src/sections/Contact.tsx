import React from 'react';
import Wrapper from '@/shared/Wrapper';
import ContactImage from '@/assets/Contact.png';
import Image from 'next/image';

const Contact = () => {
    return (
        <section className="relative py-8 text-black px-64">
            <div className="absolute inset-0 z-0 w-full h-full top-16">
                <Image
                    src={ContactImage}
                    alt="ContactImage"
                    layout="fit"
                    objectFit="cover"
                />
            </div>
            <Wrapper>
                <p className="relative text-5xl font-bold text-white py-16 z-10">FALE CONOSCO</p>
                <div className="relative bg-white rounded-xl w-full h-auto z-10">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="w-full p-4">
                            <form className="flex flex-col space-y-4">
                                <div>
                                    <label className="block text-sm font-medium">
                                        Nome
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="mt-1 block w-full px-3 py-2 bg-white border rounded-md focus:outline-none"
                                        placeholder=""
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">
                                        Telefone
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        className="mt-1 block w-full px-3 py-2 bg-white border rounded-md focus:outline-none"
                                        placeholder="Seu telefone"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="mt-1 block w-full px-3 py-2 bg-white border rounded-md focus:outline-none"
                                        placeholder="Seu email"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">
                                        Mensagem
                                    </label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        className="mt-1 block w-full px-3 py-2 bg-white border rounded-md focus:outline-none"
                                        placeholder="Sua mensagem"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="mt-4 px-4 py-2 bg-[#000] text-white font-semibold rounded-md hover:bg-blue-600"
                                >
                                    Enviar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
};

export default Contact;
import React from 'react';
import Wrapper from '@/shared/Wrapper';
import ContactImage from '@/assets/Contact.png';
import Image from 'next/image';

const Contact = () => {
    return (
        <section className="relative text-black pb-64 px-4 md:px-64">
            <Wrapper>
                <div className='hidden md:block'>
                <div className="absolute inset-0 w-full h-full">
                        <Image
                            src={ContactImage}
                            alt="ContactImage"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <p className="relative text-5xl font-bold text-white py-2 z-10">CONTATE-NOS</p>
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
                                            WhatsApp
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            className="mt-1 block w-full px-3 py-2 bg-white border rounded-md focus:outline-none"
                                            placeholder=""
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
                                            placeholder=""
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
                                            placeholder=""
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
                </div>

                {/* Mobile Version */}
        <div className="block md:hidden">
          {/* Heading */}
          <p className="text-4xl font-bold text-black py-4 text-center">
            CONTATE-NOS
          </p>
          {/* Form Container */}
          <div className="bg-white rounded-xl w-full h-auto p-4 flex flex-col">
            <form className="flex flex-col space-y-4 flex-grow">
              {/* Form Fields */}
              <div>
                <label className="block text-sm font-medium">Nome</label>
                <input
                  type="text"
                  name="name"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none"
                  placeholder=""
                />
              </div>
              <div>
                <label className="block text-sm font-medium">WhatsApp</label>
                <input
                  type="tel"
                  name="phone"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none"
                  placeholder=""
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none"
                  placeholder=""
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Mensagem</label>
                <textarea
                  name="message"
                  rows={4}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none"
                  placeholder=""
                ></textarea>
              </div>
              <button
                type="submit"
                className="mt-4 px-4 py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-800"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Contact;
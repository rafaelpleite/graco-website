import Link from "next/link";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-20 backdrop-blur-md flex justify-center items-center">
            <div className="flex justify-center items-center py-4 sm:py-8">
                <ul className="flex justify-center items-center gap-x-6 sm:gap-x-16">
                    <li className="relative group cursor-pointer hover:text-sky-200">
                        <div className="flex gap-x-2 items-center">
                            <Link href="https://escolagraco.com.br">
                                <p className="font-extralight text-xl sm:text-2xl">
                                    Escola
                                </p>
                            </Link>
                        </div>
                    </li>
                    <li className="relative group cursor-pointer hover:text-sky-200">
                        <div className="flex gap-x-2 items-center">
                            <Link href="https://editoragraco.com">
                                <p className="font-extralight text-xl sm:text-2xl">
                                    Editora
                                </p>
                            </Link>
                        </div>
                    </li>
                    <li className="relative group cursor-pointer hover:text-sky-200">
                        <div className="flex gap-x-2 items-center">
                            <Link href="https://gracobrand.com">
                                <p className="font-extralight text-xl sm:text-2xl">
                                    Brand
                                </p>
                            </Link>
                        </div>
                    </li>
                    <li className="relative group cursor-pointer hover:text-sky-200">
                        <div className="flex gap-x-2 items-center">
                            <Link href="/">
                                <p className="font-extralight text-xl sm:text-2xl">
                                    Play
                                </p>
                            </Link>
                        </div>
                    </li>

                </ul>
            </div>
        </header>
    );
};

export default Header;
import Link from "next/link";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-20 backdrop-blur-md flex justify-center items-center">
            <div className="flex justify-center py-10 items-center">
                <ul className="flex justify-center items-center gap-x-8 sm:gap-x-16">
                    <li className="relative group cursor-pointer hover:text-sky-200">
                        <div className="flex gap-x-2 items-center">
                            <Link href="https://escolagraco.com.br">
                                <p className="text-2xl font-extralight">
                                    Escola
                                </p>
                            </Link>
                        </div>
                    </li>
                    <li className="relative group cursor-pointer hover:text-sky-200">
                        <div className="flex gap-x-2 items-center">
                            <Link href="https://editoragraco.com">
                                <p className="text-2xl font-extralight">
                                    Editora
                                </p>
                            </Link>
                        </div>
                    </li>
                    <li className="relative group cursor-pointer hover:text-sky-200">
                        <div className="flex gap-x-2 items-center">
                            <Link href="https://gracobrand.com">
                                <p className="text-2xl font-extralight">
                                    Brand
                                </p>
                            </Link>
                        </div>
                    </li>
                    <li className="relative group cursor-pointer hover:text-sky-200">
                        <div className="flex gap-x-2 items-center">
                            <Link href="/">
                                <p className="text-2xl font-extralight">
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
// src/components/Footer.tsx

import React from 'react';
import Wrapper from '@/shared/Wrapper';

const Footer = () => {
    return (
        <footer className="bg-[#D9D9D9] py-4">
            <Wrapper>
                <div className="max-w-screen-lg mx-auto text-center">
                    <p className="text-xl font-thin text-black">
                        © GRACO Technology - 2024
                    </p>
                </div>
            </Wrapper>
        </footer>
    );
};

export default Footer;

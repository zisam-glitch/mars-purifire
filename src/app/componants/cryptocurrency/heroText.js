'use client'

import { TypeAnimation } from 'react-type-animation';

export default function HeroText(){
    return(
        <h5 className="fw-normal text-white-50 mb-3">Pay with 

        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'Crypto',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'ETH',
                1000,
                'BNB',
                1000,
                'SOL',
                1000,
                'DOT',
                1000,
                'NEAR',
                1000,
                'CEL',
                1000,
            ]}
            wrapper="span"
            speed={10}
            className="typewrite text-white title-dark ms-1"
            repeat={Infinity}
            />
        
        </h5>
    )
}
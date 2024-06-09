'use client'

import { TypeAnimation } from 'react-type-animation';

export default function HeroText(){
    return(
        <h4 className="display-3 title fw-bold mb-0">James <br/> 
        <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Thompson!',
                    2000, // wait 1s before replacing "Mice" with "Hamsters"
                    'Freelancer',
                    2000,
                ]}
                wrapper="span"
                speed={5}
                className="typewrite" 
                repeat={Infinity}
                cursor={false}
                />
            </h4>    
    )
}
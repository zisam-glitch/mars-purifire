'use client'
import { TypeAnimation } from 'react-type-animation';

export default function TextAnimation(){
    return(
        <h4 className="heading fw-bold mb-4">We are a 
        <TypeAnimation
            sequence={[
                'Minimalist',
                1000,
                'Modern',
                1000,
                'Creator',
                1000,
                'Professional',
                1000
            ]}
            wrapper="span"
            speed={10}
            repeat={Infinity}
            className="text-primary typewrite ms-1"
            />
            </h4>
    )
}
"use client"
import { TypeAnimation } from 'react-type-animation';

export default function AppHeroText(){
    return(
        <h4 className="display-6 text-dark mt-4 mb-3">Built For 
            <TypeAnimation
                sequence={[
                    'Business',1000,
                    'Startups',1000,
                    'Digital Agency', 1000,
                    'Minimal Blog',1000,
                    'Gym & Fitness',1000,
                    'Cryptocurrency',1000,
                    'Jobs & Careers',1000,
                    'Personal',1000,
                    'Portfolio',1000,
                    'Restaurant',1000,
                    'Agency',1000,
                    'Marketing',1000,
                    'Parallax',1000,
                    'Onepage uses',1000,
                    'Multi uses',1000,
                ]}
                wrapper="span"
                speed={10}
                className="typewrite text-primary ps-2"
                repeat={Infinity}
                />
            
            </h4>
    )
}
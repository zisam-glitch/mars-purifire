'use client'
import { TypeAnimation } from 'react-type-animation';

export default function TextAnimation(){
    return(
        <h4 className="fw-semibold mb-4">Leading Digital <br/> Business For 
            <TypeAnimation
                sequence={[
                    'Agency',
                    2000,
                    'Software',
                    2000,
                    'Technology',
                    2000,
                    'Studio',
                    2000,
                    'Webapps',
                    2000,
                ]}
                wrapper="span"
                speed={10}
                className="text-primary typewrite ms-1" 
                repeat={Infinity}
                cursor={false}
            />
                <br/> Solution.
        </h4>
    )
}
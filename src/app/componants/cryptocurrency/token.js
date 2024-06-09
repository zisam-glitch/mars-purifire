'use client'
import dynamic from "next/dynamic"

const TinySlider = dynamic(() => import('tiny-slider-react'), {ssr:false})
import '../../../../node_modules/tiny-slider/dist/tiny-slider.css';

import { tokenData} from "../../data/data";

export default function Token(){
    let settings = {
        container: '.tiny-home-slide-four',
            controls: true,
            mouseDrag: true,
            loop: true,
            rewind: true,
            autoplay: true,
            autoplayButtonOutput: false,
            autoplayTimeout: 3000,
            navPosition: "bottom",
            controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
            nav: false,
            speed: 400,
            gutter: 0,
            responsive: {
                1025: {
                    items: 4
                },
    
                992: {
                    items: 3
                },
    
                767: {
                    items: 2
                },
    
                320: {
                    items: 1
                },
            },
    };
    return(
        <div className="tiny-home-slide-four">
            <TinySlider settings={settings}>
                {tokenData.map((item, index) =>{
                    return(
                        <div className="tiny-slide" key={index}>
                            <div className="text-center">
                                <h6 className="text-white title-dark mb-1">{item.name}</h6>
                                <span className="text-white-50 d-block">{item.amount}</span>
                                <span className={item.profit === false ? "text-danger" : "text-success"}>{item.perAmount}</span>
                            </div>
                        </div>
                    )
                })}
            </TinySlider> 
        </div>
    )
}
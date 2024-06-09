'use client'
import dynamic from "next/dynamic";
import Link from "next/link";

import { categoriesData, } from "../../data/jobData";

const TinySlider = dynamic(() => import('tiny-slider-react'), {ssr:false})
import '../../../../node_modules/tiny-slider/dist/tiny-slider.css';

let settings = {
    container: '.tiny-five-item',
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
                items: 5
            },

            992: {
                items: 4
            },

            767: {
                items: 3
            },

            376: {
                items: 2
            },

            320: {
                items: 1
            },
        },
};

export default function Categories(){
    return(
        <div className="tiny-five-item">
            <TinySlider settings={settings}>
                {categoriesData.map((item, index) =>{
                    let Icon = item.icon
                    return(
                    <div className="tiny-slide" key={index}>
                        <div className="card features feature-primary feature-clean category py-5 px-2 shadow rounded-md m-2">
                            <div className="icons bg-md text-center mx-auto d-block rounded-pill">
                                <Icon className="icon"/>
                            </div>
                                <div className="content mt-3 mx-auto text-center">
                                    <Link href="#" className="h6 title text-dark">{item.title1} <br/> {item.title2}</Link>
                                    <h6 className="text-muted fw-normal mt-3 mb-0">{item.jobs}</h6>
                                </div>
                        </div>
                    </div>
                    )
                })}
            </TinySlider>  
        </div>
    )
}
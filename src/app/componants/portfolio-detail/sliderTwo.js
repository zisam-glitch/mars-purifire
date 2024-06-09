'use client'
import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const TinySlider = dynamic(()=>import('tiny-slider-react'),{ssr:false})
import '../../../../node_modules/tiny-slider/dist/tiny-slider.css';

export default function SliderTwo(){
    let settings2 = {
        container: '.tiny-home-slide-three',
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
                items: 3
            },
    
            992: {
                items: 2
            },
    
            767: {
                items: 2
            },
    
            320: {
                items: 1
            },
        },
    };
    let sliderTwo = ['/images/portfolio/1.jpg', '/images/portfolio/2.jpg', '/images/portfolio/3.jpg', '/images/portfolio/4.jpg','/images/portfolio/5.jpg','/images/portfolio/6.jpg']
    return(
        <div className="tiny-home-slide-three">
        { <TinySlider settings={settings2}>
            {sliderTwo.map((item,index)=>{
                return(
                <div className="tiny-slide" key={index}>
                    <div className="m-2">
                        <Image src={item} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid rounded-md shadow" alt=""/>
                    </div>
                </div>
                )
            })}
        </TinySlider>}
    </div>
    )
}
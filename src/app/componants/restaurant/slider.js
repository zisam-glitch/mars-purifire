'use client'
import React,{useEffect,useState} from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const TinySlider = dynamic(()=>import('tiny-slider-react'),{ssr:false})
import '../../../../node_modules/tiny-slider/dist/tiny-slider.css';

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

import { foodData, foodImg} from "../../data/data";

export default function Slider(){

    let [lightBox, setLightbox] = useState(false);
    let [currentImageIndex, setCurrentImageIndex] = useState(0);

    let handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + foodImg.length - 1) % foodImg.length);
    };

    let handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % foodImg.length);
    };
    let handleImageClick = (index) => {
        setCurrentImageIndex(index+1);
        setLightbox(true);
    };
    let currentImage = foodImg[currentImageIndex-1];
    let settings = {
        container: '.tiny-twelve-item',
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
                items: 10
            },
    
            992: {
                items: 8
            },
    
            767: {
                items: 6
            },
    
            320: {
                items: 2
            },
        },
    };
    return(
        <>
            <div className="row">
                <div className="col-12 px-0">
                    <div className="tiny-twelve-item">
                    <TinySlider settings={settings}>
                        {foodData.map((item, index) => {
                            return(
                            <div className="tiny-slide" key={index}>
                                <div className="card border-0 rounded-0">
                                    <div className="card-body p-0">
                                        <Link href="#" onClick={() => handleImageClick(item.id)} className="lightbox d-inline-block" title="">
                                            <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt="Insta Post"/>
                                            <div className="overlay bg-dark"></div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                    </TinySlider> 
                    {lightBox && (
                        <Lightbox
                            mainSrc={currentImage}
                            prevSrc={foodImg[(currentImageIndex + foodImg.length - 1) % foodImg.length]}
                            nextSrc={foodImg[(currentImageIndex + 1) % foodImg.length]}

                            onCloseRequest={() => setLightbox(false)}
                            onMovePrevRequest={handleMovePrev}
                            onMoveNextRequest={handleMoveNext}
                        />
                    )}   
                    </div>

                    <div className="position-absolute top-50 start-50 translate-middle d-md-block d-none">
                        <Link href="https://www.instagram.com/shreethemes/" target="_blank" className="btn btn-sm btn-primary rounded-0 text-uppercase">Follow Now</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
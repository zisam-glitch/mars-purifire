'use client'
import React,{useState} from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const TinySlider = dynamic(()=>import('tiny-slider-react'),{ssr:false})
import '../../../../node_modules/tiny-slider/dist/tiny-slider.css';

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

import { portfolioData,portfolioImage } from "../../data/data";

export default function Project(){
    let settings = {
        container: '.tiny-twelve-item',
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        nav: false,
        speed: 400,
        gutter: 0,
        responsive: {
            1025: {
                items: 5
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
    let [lightBox, setLightbox] = useState(false);
    let [currentImageIndex, setCurrentImageIndex] = useState(0);

    let handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + portfolioImage.length -1) % portfolioImage.length);
    };

    let handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % portfolioImage.length);
    };
    let handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setLightbox(true);
    };
    let currentImage = portfolioImage[currentImageIndex];

    return(
    <div className="swiper-container">
        <div className="swiper-wrapper">
        <TinySlider settings={settings}>
            {portfolioData.map((item,index)=>{
                return(
                <div className="swiper-slide" key={index}>
                    <div className="card border-0 portfolio portfolio-primary portfolio-grid position-relative d-block overflow-hidden rounded mx-2">
                        <div className="card-body p-0">
                            <Link href="#" scroll={false} onClick={() => handleImageClick(item.id)} className="lightbox" title="">
                                <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                            </Link>
                            <div className="grid-content bg-white p-3 rounded shadow">
                                <h6 className="mb-1"><Link href="#" className="text-dark title">{item.name}</Link></h6>
                                <h6 className="text-muted fw-normal tag mb-0">{item.title}</h6>
                            </div>
                        </div>
                    </div>
                </div>
                )
            })}
        </TinySlider>
        {lightBox && (
            <Lightbox
                mainSrc={currentImage}
                prevSrc={portfolioImage[(currentImageIndex + portfolioImage.length - 1) % portfolioImage.length]}
                nextSrc={portfolioImage[(currentImageIndex + 1) % portfolioImage.length]}

                onCloseRequest={() => setLightbox(false)}
                onMovePrevRequest={handleMovePrev}
                onMoveNextRequest={handleMoveNext}
            />
        )}
        </div>
    </div>
    )

}



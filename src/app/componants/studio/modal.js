'use client'
import React,{useState} from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

import { heroImg} from "../../data/studioData";

const TinySlider = dynamic(()=>import('tiny-slider-react'),{ssr:false})
import '../../../../node_modules/tiny-slider/dist/tiny-slider.css'

import ModalVideo from 'react-modal-video';
import "../../../../node_modules/react-modal-video/scss/modal-video.scss"

export default function Modal(){
    let [isOpen, setOpen] = useState(false);
    let settings = {
        container: '.tiny-one-item',
        items: 1,
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
    };
    return(
        <>
        <div className="position-relative">
            <div className="tiny-one-item studio-img">
                <TinySlider settings={settings}>
                    {heroImg.map((item,index)=>{
                            return(
                                <div className="tiny-slide" key={index}>
                                    <div className="m-2 mx-3">
                                        <Image src={item} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                    </div>
                                </div>
                            )
                        })}
                </TinySlider>
                
            </div>

            <div className="play-icon">
                <Link href="#!" scroll={false} onClick={() => setOpen(true)} className="play-btn lightbox">
                    <i className="mdi mdi-play text-primary rounded-circle bg-white shadow-lg"></i>
                </Link>
            </div>
            <ModalVideo
                channel="youtube"
                youtube={{ mute: 0, autoplay: 0 }}
                isOpen={isOpen}
                videoId="yba7hPeTSjk"
                onClose={() => setOpen(false)} 
            />
        </div>
        </>
    )
}
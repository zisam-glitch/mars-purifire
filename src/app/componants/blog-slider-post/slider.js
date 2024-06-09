'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";

import dynamic from "next/dynamic";

const TinySlider = dynamic(() => import('tiny-slider-react'), {ssr:false})
import '../../../../node_modules/tiny-slider/dist/tiny-slider.css';

import { sliderImage } from "../../data/data";

let settings = {
    container: '.tiny-single-item',
    items: 1,
    controls: false,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    speed: 400,
    gutter: 16,
}

export default function Slider(){
    return(
        <div className="card border-0 shadow rounded overflow-hidden">
        <TinySlider settings={settings}>
            {sliderImage.map((item, index) => (
                <div className="tiny-slide" key={index}><Image width={0} height={0} sizes="100vw" style={{width:'100%',height:'auto'}} src={item} className="rounded-md" alt="" /></div>
            ))}
        </TinySlider>

        <div className="card-body">
            <p className="text-muted mt-4">The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to proper Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewers attention from the layout.</p>
            <p className="text-muted">Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. If the fill text is intended to illustrate the characteristics of different typefaces, it sometimes makes sense to select texts containing the various letters and symbols specific to the output language.</p>
        
            <blockquote className="text-center mx-auto blockquote"><i className="mdi mdi-format-quote-open mdi-48px text-muted opacity-2 d-block"></i> The man who comes back through the door in the wall will never be quite the same as the man who went out. <small className="d-block text-muted mt-2">- Fronter Template</small></blockquote>
        
            <p className="text-muted">There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories.</p>
        
            <Link href="#" className="badge badge-link bg-primary ms-1">Minimal</Link>
            <Link href="#" className="badge badge-link bg-primary ms-1">Interior</Link>
            <Link href="#" className="badge badge-link bg-primary ms-1">Furniture</Link>
        </div>
    </div>
    )
}
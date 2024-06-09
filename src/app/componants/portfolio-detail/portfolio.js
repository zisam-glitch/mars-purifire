'use client'
import React,{useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {masonaryImage} from "../../data/data"

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

export default function Portfolio(){
    let [currentImageIndex, setCurrentImageIndex] = useState(0);
    let [open, setIsOpen] = useState(false);

    let handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + masonaryImage.length - 1) % masonaryImage.length);
    };

    let handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % masonaryImage.length);
    };
    let handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setIsOpen(true);
    };
    let currentImage = masonaryImage[currentImageIndex];
    return(
        <div className="features-absolute">
            <div id="grid" className="">
                <ResponsiveMasonry
                    columnsCountBreakPoints={{350: 1, 750: 2, 900: 4}}
                    >
                    <Masonry>
                        {masonaryImage.map((item,index) => {
                            return(
                                <div className=" picture-item p-2" data-groups='["branding"]' key={index}>
                                    <div className="card border-0 portfolio portfolio-primary portfolio-grid position-relative d-block overflow-hidden rounded">
                                        <div className="card-body p-0">
                                            <Link href="#"  onClick={() => handleImageClick(index)} className="lightbox" title="">
                                                <Image src={item} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Masonry>
                </ResponsiveMasonry>
                
            </div>
            {open && (
                <Lightbox
                    mainSrc={currentImage}
                    prevSrc={masonaryImage[(currentImageIndex + masonaryImage.length - 1) % masonaryImage.length]}
                    nextSrc={masonaryImage[(currentImageIndex + 1) % masonaryImage.length]}

                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={handleMovePrev}
                    onMoveNextRequest={handleMoveNext}
                />
            )}      
        </div>
    )
}
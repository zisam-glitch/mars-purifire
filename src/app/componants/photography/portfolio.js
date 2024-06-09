'use client'
import React,{useState} from "react";
import Link from "next/link"
import Image from "next/image"

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import {AiOutlineEye} from "../../assets/icons/vander"

export default function Portfolio(){
    let [currentImageIndex, setCurrentImageIndex] = useState(0);
    let [open, setIsOpen] = useState(false);

    let portfolioImage = ['/images/photography/p1.jpg','/images/photography/p2.jpg','/images/photography/p3.jpg','/images/photography/p4.jpg','/images/photography/p5.jpg','/images/photography/p6.jpg']

    let handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + portfolioImage.length - 1) % portfolioImage.length);
    };

    let handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % portfolioImage.length);
    };
    let handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setIsOpen(true);
    };
    let currentImage = portfolioImage[currentImageIndex];
    return(
        <>
            <div className="" id="grid">
            <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
                >
                    <Masonry>
                        {portfolioImage.map((item, index)=>{
                            return(
                                <div className="p-2 picture-item" key={index}>
                                    <div className="card border-0 portfolio photo-showcase position-relative d-block overflow-hidden rounded">
                                        <div className="card-body p-0">
                                            <Image src={item} width={0} height={0} sizes="100vw" style={{width:"100%", height:'auto'}} className="img-fluid" alt=""/>
                                            <div className="overlay"></div>
                                            <div className="icons text-center">
                                                <Link href="#" scroll={false} className="lightbox fs-3" onClick={() => handleImageClick(index)}><AiOutlineEye className="text-white title-dark"/></Link>
                                            </div>
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
                    prevSrc={portfolioImage[(currentImageIndex + portfolioImage.length - 1) % portfolioImage.length]}
                    nextSrc={portfolioImage[(currentImageIndex + 1) % portfolioImage.length]}

                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={handleMovePrev}
                    onMoveNextRequest={handleMoveNext}
                />
            )}
        </>
    )
}
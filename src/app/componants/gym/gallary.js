"use client"
import React,{useState,useEffect} from "react";
import Link from "next/link"
import Image from "next/image"

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

import { gymImage} from "../../data/gymData";

export default function Gallery(){
    useEffect(()=>{
        document.body.classList.add('gym-scss');
    })

    let [lightBox, setLightbox] = useState(false);
    let [currentImageIndex, setCurrentImageIndex] = useState(0);


    let handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + gymImage.length - 1) % gymImage.length);
    };

    let handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % gymImage.length);
    };
    let handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setLightbox(true);
    };
    let currentImage = gymImage[currentImageIndex];
    return(
        <div className="row g-0 row-cols-lg-5 row-cols-md-3 row-cols-2 mt-4 pt-2">
            {gymImage.map((item,index)=>{
                return(
                    <div className="col" key={index}>
                        <div className="card rounded-0">
                            <div className="card-body p-0">
                                <Link href="#" onClick={() => handleImageClick(index)}  className="lightbox" title="">
                                    <Image src={item} className="img-fluid" width={0} height={0} sizes="100vw" style={{width:"100%", height:'auto'}} alt=""/>
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            })}
            {lightBox && (
                <Lightbox
                    mainSrc={currentImage}
                    prevSrc={gymImage[(currentImageIndex + gymImage.length - 1) % gymImage.length]}
                    nextSrc={gymImage[(currentImageIndex + 1) % gymImage.length]}

                    onCloseRequest={() => setLightbox(false)}
                    onMovePrevRequest={handleMovePrev}
                    onMoveNextRequest={handleMoveNext}
                />
            )}
        </div>
    )
}
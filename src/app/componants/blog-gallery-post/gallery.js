'use client'
import React,{useState} from "react";
import Link from "next/link";
import Image from "next/image";

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import{FiCamera} from "../../assets/icons/vander"

export default function Gallary(){

    let portfolioImg =['/images/portfolio/5.jpg','/images/portfolio/10.jpg','/images/portfolio/6.jpg','/images/portfolio/11.jpg','/images/portfolio/12.jpg','/images/portfolio/13.jpg','/images/portfolio/7.jpg','/images/portfolio/8.jpg']

    let [currentImageIndex, setCurrentImageIndex] = useState(0);
    let [open, setIsOpen] = useState(false);

    let handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + portfolioImg.length - 1) % portfolioImg.length);
    };

    let handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % portfolioImg.length);
    };
    let handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setIsOpen(true);
    };
    let currentImage = portfolioImg[currentImageIndex];

    return(
        <div className="card-body">
            <div id="grid" className="">
            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 4}}>
                <Masonry>
                    {portfolioImg.map((item,index)=>{
                    return(
                        <div className="p-2 picture-item" key={index}>
                            <div className="card border-0 portfolio portfolio-primary portfolio-grid position-relative d-block overflow-hidden rounded">
                                <div className="card-body p-0">
                                    <Image src={item} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                    <div className="overlay-work"></div> 
                                    
                                    <div className="icons text-center">
                                        <Link href="#" scroll={false} onClick={() => handleImageClick(index)} className="btn btn-pills btn-icon btn-primary lightbox"><FiCamera/></Link>
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
                    prevSrc={portfolioImg[(currentImageIndex + portfolioImg.length - 1) % portfolioImg.length]}
                    nextSrc={portfolioImg[(currentImageIndex + 1) % portfolioImg.length]}

                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={handleMovePrev}
                    onMoveNextRequest={handleMoveNext}
                />
            )}

            <p className="text-muted mt-4">The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to proper Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewers attention from the layout.</p>
            <p className="text-muted">Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. If the fill text is intended to illustrate the characteristics of different typefaces, it sometimes makes sense to select texts containing the various letters and symbols specific to the output language.</p>
        
            <blockquote className="text-center mx-auto blockquote"><i className="mdi mdi-format-quote-open mdi-48px text-muted opacity-2 d-block"></i> The man who comes back through the door in the wall will never be quite the same as the man who went out. <small className="d-block text-muted mt-2">- Fronter Template</small></blockquote>
        
            <p className="text-muted">There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories.</p>
        
            <Link href="#" className="badge badge-link bg-primary me-1">Minimal</Link>
            <Link href="#" className="badge badge-link bg-primary me-1">Interior</Link>
            <Link href="#" className="badge badge-link bg-primary me-1">Furniture</Link>
        </div>
    )
}
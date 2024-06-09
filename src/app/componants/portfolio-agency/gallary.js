'use client'
import React,{useState} from "react";
import Link from "next/link"
import Image from "next/image"


import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

import {FiCamera} from "../../assets/icons/vander"

import { portfolioData,portfolioImage} from "../../data/data";

export default function Gallary(){
    let [selectedCategory, setSelectedCategory] = useState(null);
    let [currentImageIndex, setCurrentImageIndex] = useState(0);
    let [open, setIsOpen] = useState(false);
    
    
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
    let matchCategory = (category) => {
        setSelectedCategory(category);
    };

    let filteredData = selectedCategory
        ? portfolioData.filter((item) => item.category === selectedCategory)
        : portfolioData;
    return(
        <>
        <div className="row justify-content-center mt-4 pt-2">
            <div className="col-12 my-4 filters-group-wrap text-center">
                <div className="filters-group">
                    <ul className="container-filter mb-0 categories-filter list-unstyled filter-options h6">
                    
                        <li className={selectedCategory === null ? 'active list-inline-item categories fw-normal position-relative text-dark' : 'list-inline-item categories fw-normal position-relative text-dark'} data-group="all" onClick={() => matchCategory(null)}>All</li>
                        <li className={selectedCategory === 'branding' ? 'active list-inline-item categories fw-normal position-relative text-dark' : 'list-inline-item categories fw-normal position-relative text-dark'} data-group="branding" onClick={() => matchCategory('branding')}>Branding</li>
                        <li className={selectedCategory === 'designing' ? 'active list-inline-item categories fw-normal position-relative text-dark' : 'list-inline-item categories fw-normal position-relative text-dark'} data-group="designing" onClick={() => matchCategory('designing')}>Designing</li>
                        <li className={selectedCategory === 'photography' ? 'active list-inline-item categories fw-normal position-relative text-dark' : 'list-inline-item categories fw-normal position-relative text-dark'} data-group="photography" onClick={() => matchCategory('photography')}>Photography</li>
                        <li className={selectedCategory === 'development' ? 'active list-inline-item categories fw-normal position-relative text-dark' : 'list-inline-item categories fw-normal position-relative text-dark'} data-group="development" onClick={() => matchCategory('development')}>Development</li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="grid" className="row g-4 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
            {filteredData.slice(0,8).map((item,index)=>{
                return(
                    <div className="col picture-item" data-groups='["branding"]' key={index}>
                        <div className="position-relative portfolio portfolio-primary portfolio-modern rounded-md">
                            <div className="position-relative port-image">
                                <div className="rounded-md p-0 overflow-hidden">
                                    <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid shadow" alt=""/>
                                    <div className="icons text-center">
                                        <Link href="#" scroll={false} onClick={() => handleImageClick(item.id)} className="btn btn-icon btn-pills btn-lg lightbox"><FiCamera/></Link>
                                    </div>
                                </div>
                            </div>
                                
                            <div className="bg rounded-md"></div>
                        </div>
                        <div className="mt-3">
                            <h6 className="mb-1"><Link href="#" className="text-dark title">{item.name}</Link></h6>
                            <h6 className="text-muted fw-normal tag mb-0">{item.title}</h6>
                        </div>
                    </div>
                )
            })}
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
'use client'
import React,{useState} from "react";
import Link from "next/link";
import Image from "next/image";

import { masonaryPortfolio, masonaryImage } from "../../data/data";

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import {FiCamera} from "../../assets/icons/vander"

export default function PortfolioTwo(){
    let [selectedCategory, setSelectedCategory] = useState(null);
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
    let matchCategory = (category) => {
        setSelectedCategory(category);
    };

    let filteredData = selectedCategory
        ? masonaryPortfolio.filter((item) => item.category === selectedCategory)
        : masonaryPortfolio;
    return(
        <>
        <div className="row justify-content-center">
            <div className="col-12 mb-4 filters-group-wrap text-center">
                <div className="filters-group">
                    <ul className="container-filter mb-0 categories-filter list-unstyled filter-options">
                        <li className={selectedCategory === null ? 'active list-inline-item categories h6 position-relative text-dark' : 'list-inline-item categories h6 position-relative text-dark'} data-group="all" onClick={() => matchCategory(null)}>All</li>
                        <li className={selectedCategory === 'branding' ? 'active list-inline-item categories h6 position-relative text-dark' : 'list-inline-item categories h6 position-relative text-dark'} data-group="branding" onClick={() => matchCategory('branding')}>Branding</li>
                        <li className={selectedCategory === 'designing' ? 'active list-inline-item categories h6 position-relative text-dark' : 'list-inline-item categories h6 position-relative text-dark'} data-group="designing" onClick={() => matchCategory('designing')}>Designing</li>
                        <li className={selectedCategory === 'photography' ? 'active list-inline-item categories h6 position-relative text-dark' : 'list-inline-item categories h6 position-relative text-dark'} data-group="photography" onClick={() => matchCategory('photography')}>Photography</li>
                        <li className={selectedCategory === 'development' ? 'active list-inline-item categories h6 position-relative text-dark' : 'list-inline-item categories h6 position-relative text-dark'} data-group="development" onClick={() => matchCategory('development')}>Development</li>
                    </ul>
                </div>
            </div>
        </div>

        <div id="grid" className="">
            <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 4}}
                >
                <Masonry>
                    {filteredData.map((item,index) => {
                        return(
                        <div className="p-2 picture-item" key={index}>
                            <div className="position-relative portfolio portfolio-primary portfolio-modern rounded-md">
                                <div className="position-relative port-image">
                                    <div className="rounded-md p-0 overflow-hidden">
                                        <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid shadow" alt=""/>
                                        <div className="icons text-center">
                                            <Link href="#" onClick={() => handleImageClick(item.id)} className="btn btn-icon btn-pills btn-lg lightbox"><FiCamera/></Link>
                                        </div>
                                    </div>
                                </div>    
                                <div className="bg rounded-md"></div>
                            </div>
                            <div className="mt-3">
                                <h6 className="mb-1"><Link href="#"  className="text-dark title">Abstract images</Link></h6>
                                <h6 className="text-muted fw-normal tag mb-0">Abstract</h6>
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
        </>
    )
}

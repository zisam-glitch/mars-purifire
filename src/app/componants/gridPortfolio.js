'use client'
import React,{useState} from "react";
import Link from "next/link";
import Image from "next/image";
import { portfolioData,portfolioImage } from "../data/data";

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

import {MdArrowForward} from "../assets/icons/vander"

export default function GridPortfolio({gridClass,col,containerClass}){

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
          <section className="section">
            <div className={containerClass === true  ? "container-fluid" : "container"}>
                <div className="row justify-content-center">
                    <div className={col}>
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
        
                        <div id="grid" className={gridClass}>
                            {filteredData.map((item,index) => {
                                return(
                                    <div className="col picture-item" key={index}>
                                        <div className="card border-0 portfolio portfolio-primary portfolio-grid position-relative d-block overflow-hidden rounded">
                                            <div className="card-body p-0">
                                                <Link href="#" scroll={false} onClick={() => handleImageClick(item.id)} className="lightbox" title="">
                                                    <Image width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} src={item.image} className="img-fluid" alt=""/>
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
                        </div>
                    </div>
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
                <div className="row justify-content-center">
                    <div className="col-12 mt-4 pt-2">
                        <div className="text-center">
                            <Link href="#" className="btn btn-link primary text-muted h6 mb-0">See More <span className="h5 mb-0 ms-1"><MdArrowForward/></span></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h6 className="text-primary fw-normal mb-3">Available for freelance projects</h6>
                            <h1 className="title mb-4">Do you have digital project? <br/> Lets talk.</h1>
                            <div className="mt-4">
                                <Link href="/page-contact-one" className="btn btn-primary">Contact us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
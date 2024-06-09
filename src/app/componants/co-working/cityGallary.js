'use client'

import React,{useState} from "react";
import Link from "next/link"
import Image from "next/image"
import { topCities, cityImage,} from "../../data/data";

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

import {LuSearch} from "../../assets/icons/vander"

export default function CityGallary(){
    let [selectedCategory, setSelectedCategory] = useState(null);
    let [currentImageIndex, setCurrentImageIndex] = useState(0);
    let [open, setIsOpen] = useState(false);
    
    let handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + cityImage.length - 1) % cityImage.length);
    };

    let handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % cityImage.length);
    };
    let handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setIsOpen(true);
    };
    let currentImage = cityImage[currentImageIndex];
    let matchCategory = (category) => {
        setSelectedCategory(category);
    };

    let filteredData = selectedCategory
        ? topCities.filter((item) => item.category === selectedCategory)
        : topCities;

    return(
        <>
        <div className="row justify-content-center">
            <div className="col-12">
                <div className="section-title mb-4 pb-2 text-center">
                    <h4 className="title mb-4">Top Coworking Cities</h4>
                    <p className="text-muted para-desc mx-auto mb-0">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect..</p>
                </div>
            </div>

            <div className="col-12 mt-4 pt-2">
                <div className="filters-group-wrap text-center">
                    <div className="filters-group">
                        <ul className="container-filter filter-box mb-0 categories-filter list-unstyled filter-options">
                            <li className={selectedCategory === null ? "list-inline-item categories position-relative rounded border active" :'list-inline-item categories position-relative rounded border'}  onClick={() => matchCategory(null)}>All</li>
                            <li className={selectedCategory === 'usa' ? "list-inline-item categories position-relative rounded border active" :'list-inline-item categories position-relative rounded border'} onClick={() => matchCategory('usa')}>USA</li>
                            <li className={selectedCategory === 'canada' ? "list-inline-item categories position-relative rounded border active" :'list-inline-item categories position-relative rounded border'} onClick={() => matchCategory('canada')}>Canada</li>
                            <li className={selectedCategory === 'australia' ? "list-inline-item categories position-relative rounded border active" :'list-inline-item categories position-relative rounded border'} onClick={() => matchCategory('australia')}>Australia</li>
                            <li className={selectedCategory === 'china' ? "list-inline-item categories position-relative rounded border active" :'list-inline-item categories position-relative rounded border'} onClick={() => matchCategory('china')}>China</li>
                            <li className={selectedCategory === 'vietnam' ? "list-inline-item categories position-relative rounded border active" :'list-inline-item categories position-relative rounded border'} onClick={() => matchCategory('vietnam')}>Vietnam</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

                <div id="grid" className=" mt-4">
                <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 4}} >
                    <Masonry>
                        {filteredData.map((item,index) => {
                            return(
                            <div className="picture-item p-2" key={index}>
                                <div className="card border-0 portfolio portfolio-primary portfolio-grid position-relative d-block overflow-hidden rounded">
                                    <div className="card-body p-0">
                                        <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid rounded" alt=""/>
                                        <div className="overlay-work bg-dark"></div>
                                        <div className="grid-content bg-white p-3 rounded shadow">
                                            <Link href="#" className="text-dark title h6">{item.title}</Link>
                                            <h6 className="text-muted fw-normal tag mb-0 small">{item.name}</h6>
                                        </div>
                                        <div className="icons text-center">
                                            <Link href="#" scroll={false} onClick={() => handleImageClick(item.id)} className="btn btn-pills btn-icon btn-primary lightbox"><LuSearch/></Link>
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
                        prevSrc={cityImage[(currentImageIndex + cityImage.length - 1) % cityImage.length]}
                        nextSrc={cityImage[(currentImageIndex + 1) % cityImage.length]}

                        onCloseRequest={() => setIsOpen(false)}
                        onMovePrevRequest={handleMovePrev}
                        onMoveNextRequest={handleMoveNext}
                    />
                )}
        </>
    )
}
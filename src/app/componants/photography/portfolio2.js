'use client'

import React,{useState} from "react";
import Link from "next/link"
import Image from "next/image"

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import { photographyData,photographyImage } from "../../data/data";
import {AiOutlineEye} from "../../assets/icons/vander"

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

export default function Portfolio2(){
    let [selectedCategory, setSelectedCategory] = useState(null);
    let [currentImageIndex, setCurrentImageIndex] = useState(0);
    let [open, setIsOpen] = useState(false);

    let handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + photographyImage.length - 1) % photographyImage.length);
    };

    let handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % photographyImage.length);
    };
    let handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setIsOpen(true);
    };
    let currentImage = photographyImage[currentImageIndex];
    let matchCategory = (category) => {
        setSelectedCategory(category);
    };

    let filteredData = selectedCategory
        ? photographyData.filter((item) => item.category === selectedCategory)
        : photographyData;
    return(
        <>
        <div className="row justify-content-center">
            <div className="col-12 filters-group-wrap">
                <div className="filters-group">
                    <ul className="container-filter mb-0 categories-filter list-unstyled filter-options text-center">
                        <li className={selectedCategory === null ? 'active list-inline-item categories h6 position-relative text-dark' : 'list-inline-item categories h6 position-relative text-dark'}  onClick={() => matchCategory(null)} data-group="all">All</li>
                        <li className={selectedCategory === 'branding' ? 'active list-inline-item categories h6 position-relative text-dark' : 'list-inline-item categories h6 position-relative text-dark'}  onClick={() => matchCategory('branding')} >Branding</li>
                        <li className={selectedCategory === 'designing' ? 'active list-inline-item categories h6 position-relative text-dark' : 'list-inline-item categories h6 position-relative text-dark'} onClick={() => matchCategory('designing')} >Designing</li>
                        <li className={selectedCategory === 'photography' ? 'active list-inline-item categories h6 position-relative text-dark' : 'list-inline-item categories h6 position-relative text-dark'} onClick={() => matchCategory('photography')}>Photography</li>
                        <li className={selectedCategory === 'development' ? 'active list-inline-item categories h6 position-relative text-dark' : 'list-inline-item categories h6 position-relative text-dark'} onClick={() => matchCategory('development')}>Development</li>
                    </ul>
                </div>
            </div>
        </div>

        <div  id="grid">
            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 4}} >
                <Masonry>
                    {filteredData.map((item,index) => {
                        return(
                            <div className="p-2 picture-item" key={index}>
                                <div className="card border-0 portfolio photo-showcase position-relative d-block overflow-hidden rounded">
                                    <div className="card-body p-0">
                                        <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                        <div className="overlay"></div>
                                        <div className="icons text-center">
                                            <Link href="#" scroll={false} onClick={() => handleImageClick(index)} className="lightbox fs-3"><AiOutlineEye className="text-white"/></Link>
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
                prevSrc={photographyImage[(currentImageIndex + photographyImage.length - 1) % photographyImage.length]}
                nextSrc={photographyImage[(currentImageIndex + 1) % photographyImage.length]}

                onCloseRequest={() => setIsOpen(false)}
                onMovePrevRequest={handleMovePrev}
                onMoveNextRequest={handleMoveNext}
            />
        )}
        </>
    )
}
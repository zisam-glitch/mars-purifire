'use client'
import React,{useState} from "react";
import Link from "next/link";
import Image from "next/image";
import { foodData,} from "../../data/data";

export default function Menu(){
    let [selectedCategory, setSelectedCategory] = useState(null);

    let matchCategory = (category) => {
        setSelectedCategory(category);
    };

    let filteredData = selectedCategory
    ? foodData.filter((item) => item.category === selectedCategory)
    : foodData;
    return(
        <>
        <div className="row justify-content-center">
            <div className="col-12 filters-group-wrap text-center">
                <div className="filters-group">
                    <ul className="container-filter mb-0 categories-filter list-unstyled filter-options">
                        <li className={selectedCategory === null ? "list-inline-item categories text-uppercase position-relative active" : "list-inline-item categories text-uppercase position-relative" } data-group="all" onClick={() => matchCategory(null)}>All</li>
                        <li className={selectedCategory === 'break' ? "list-inline-item categories text-uppercase position-relative active" : "list-inline-item categories text-uppercase position-relative" } data-group="break" onClick={() => matchCategory('break')}>Breakfast</li>
                        <li className={selectedCategory === 'lunch' ? "list-inline-item categories text-uppercase position-relative active" : "list-inline-item categories text-uppercase position-relative" } data-group="lunch" onClick={() => matchCategory('lunch')}>Lunch</li>
                        <li className={selectedCategory === 'dinner' ? "list-inline-item categories text-uppercase position-relative active" : "list-inline-item categories text-uppercase position-relative" } data-group="dinner" onClick={() => matchCategory('dinner')}>Dinner</li>
                        <li className={selectedCategory === 'tea' ? "list-inline-item categories text-uppercase position-relative active" : "list-inline-item categories text-uppercase position-relative" } data-group="tea" onClick={() => matchCategory('tea')}>Tea & Coffee</li>
                        <li className="list-inline-item categories text-uppercase position-relative" data-group="tea"></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="row justify-content-center row-cols-lg-5 row-cols-md-3 row-cols-1" id="grid">
            {filteredData.map((item,index)=>{
                return(
                <div className="col mt-5 picture-item"  key={index}>
                    <div className="portfolio portfolio-primary menu-food">
                        <Image src={item.image} width={140} height={140} className="avatar avatar-large rounded-circle shadow-lg d-block mx-auto img-thumbnail" alt=""/>

                        <div className="mt-4 text-center">
                            <Link href="#" className="title h5 d-block text-dark">{item.title}</Link>
                            <span className="text-muted">{item.desc}</span>

                            <h5 className="link mt-2">{item.price}</h5>
                        </div>
                    </div>
                </div>
                )
            })}
        </div>
        </>
    )
}
import React from "react";
import Link from "next/link";
import Image from "next/image";

import { blogData } from "../data/data";

import {MdOutlineArrowForward,AiOutlineHeart,FaRegComment,FaRegCalendar} from "../assets/icons/vander"

export default function Blog(){
    return(
        <div className="row">
            {blogData.slice(0,3).map((item,index)=>{
                return(
                    <div className="col-lg-4 col-md-6 mt-4 pt-2" key={index}>
                        <div className="card blog blog-primary shadow rounded overflow-hidden border-0">
                            <div className="card-img image position-relative overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="img-fluid" alt=""/>
                                    <div className="card-overlay"></div>
                                </div>

                                <div className="blog-tag">
                                    <Link href={`/blog-standard-post/${item.id}`} className="badge bg-light text-dark">{item.tag}</Link>
                                </div>

                                <div className="read-more">
                                    <Link href={`/blog-standard-post/${item.id}`} className="text-white title-dark-50">Read More <MdOutlineArrowForward/></Link>
                                </div>
                            </div>

                            <div className="card-body content p-0">
                                <div className="p-4">
                                    <Link href={`/blog-standard-post/${item.id}`} className="h5 title text-dark d-block mb-0">{item.title}</Link>
                                    <p className="text-muted mt-2 mb-0">{item.desc}</p>
                                </div>

                                <div className="post-meta d-flex justify-content-between p-4 border-top">
                                    <ul className="list-unstyled mb-0 d-inline-flex align-items-center">
                                        <li className="list-inline-item me-2 mb-0"><Link href="#" className="text-muted like d-flex align-items-center"><AiOutlineHeart className="me-1 align-middle"/><span>33</span></Link></li>
                                        <li className="list-inline-item mb-0"><Link href="#" className="text-muted comments"><FaRegComment className="me-1 align-middle"/><span>08</span></Link></li>
                                    </ul>
                                    <Link href="#" className="text-muted readmore d-inline-flex align-items-center"><FaRegCalendar className="me-1"/><span>{item.date}</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
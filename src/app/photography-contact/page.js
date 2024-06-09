'use client'
import React,{useEffect} from "react";
import Link from "next/link";

import ScrollTop from "../componants/scrollTop";

import {FiHome} from '../assets/icons/vander'
import Modal1 from "../componants/photography/modal";



export default function PhotographyContact(){
    useEffect(()=>{
        document.body.classList.add('photography-scss');
    })
    return(
        <>
         <div className="back-to-home rounded d-none d-sm-block">
            <Link href="/index-photography" className="btn btn-icon btn-primary"><FiHome className="icons"/></Link>
        </div>
        <section className="d-flex align-items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 px-0">
                        <div className="map map-gray map-100vh position-relative">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style={{border:"0"}} title="myFram" allowFullScreen></iframe>
                        </div>
                       <Modal1/>
                    </div>
                </div>
            </div>
        </section>
            
            <ScrollTop/>
        </>
    )
}
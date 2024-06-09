import React from "react";
import Link from "next/link";

import Navbar from "../componants/navbar/navbar";
import FooterTwo from "../componants/footer/footerTwo";
import ScrollTop from "../componants/scrollTop";

import {AiOutlineUser,AiOutlineCalendar,AiOutlineClockCircle} from "../assets/icons/vander"
import SliderOne from "../componants/portfolio-detail/sliderOne";
import SliderTwo from "../componants/portfolio-detail/sliderTwo";


export default function PortfolioDetailThree(){
    return(
        <>
        <Navbar navClass="defaultscroll sticky" manuClass="navigation-menu nav-right"/>
        <section className="bg-half-170 bg-light d-table w-100">
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <ul className="list-inline">
                                <li className="list-inline-item me-3"><AiOutlineUser className="h5 mb-0"/><Link href="#" className="text-primary"> Mr. Donald Ruffy</Link></li>
                                <li className="list-inline-item text-muted me-3"><AiOutlineCalendar className="h5 text-dark mb-0"/> 19th June 2023</li>
                                <li className="list-inline-item text-muted"><AiOutlineClockCircle className="h5 text-dark mb-0"/> 8 min read</li>
                            </ul>

                            <h5 className="heading fw-semibold sub-heading mb-0">Capsule Wardrobe Essentials <br/> The Leopard Print Coat</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <SliderOne/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-8 col-md-6 mt-5 pt-2">
                        <div className="section-title me-md-4">
                            <h4 className="mb-4">Project Description</h4>
    
                            <p className="text-muted">The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to proper Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewers attention from the layout.</p>
                            <p className="text-muted mb-0">Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. If the fill text is intended to illustrate the characteristics of different typefaces, it sometimes makes sense to select texts containing the various letters and symbols specific to the output language.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mt-5 pt-2">
                        <div className="card work-details rounded bg-light border-0">
                            <div className="card-body">
                                <h5 className="card-title border-bottom pb-3 mb-3">Project Info :</h5>
                                <dl className="row mb-0">
                                    <dt className="col-md-4 col-5">Client :</dt>
                                    <dd className="col-md-8 col-7 text-muted">Calvin Carlo</dd>

                                    <dt className="col-md-4 col-5">Category :</dt>
                                    <dd className="col-md-8 col-7 text-muted">Web Design</dd>

                                    <dt className="col-md-4 col-5">Date :</dt>
                                    <dd className="col-md-8 col-7 text-muted">23rd Sep, 2021</dd>

                                    <dt className="col-md-4 col-5">Website :</dt>
                                    <dd className="col-md-8 col-7 text-muted"><Link href="https://shreethemes.in/" target="_blank" className="text-reset">shreethemes.in</Link></dd>

                                    <dt className="col-md-4 col-5">Location :</dt>
                                    <dd className="col-md-8 col-7 text-muted">3/2/64 Mongus Street, UK</dd>
                                </dl>  
                            </div>                     
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 mt-5">
                        <SliderTwo/>
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
        <FooterTwo/>
        <ScrollTop/>
        </>
    )
}
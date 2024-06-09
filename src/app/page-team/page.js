import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "../componants/navbar/navbar";
import FooterFour from "../componants/footer/footerFour";
import ScrollTop from "../componants/scrollTop";
import ParallaxImage from "../componants/Parallax";
import Modal from "../componants/team/modal";

import { teamTwoData } from "../data/data";
import {FiFacebook, FiInstagram,FiTwitter,MdKeyboardArrowRight} from "../assets/icons/vander"

export default function PageTeam(){
    return(
        <>
        <Navbar navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light" logoLight={true}/>
        <section className="position-relative overflow-hidden">
            <ParallaxImage bgImage='/images/bg/06.jpg'/>
            <div className="bg-overlay bg-gradient-overlay-2"></div>
            <div className="bg-half-170 d-table w-100">
                <div className="container">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-12">
                            <div className="title-heading text-center">
                                <p className="text-white-50 para-desc mx-auto mb-0">Management Minds</p>
                                <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">Meet The Team</h5>
                            </div>
                        </div>
                    </div>

                    <div className="position-middle-bottom">
                        <nav aria-label="breadcrumb" className="d-block">
                            <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                                <li className="breadcrumb-item"><Link href="/">Fronter</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Team</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
        <div className="position-relative">
            <div className="shape overflow-hidden text-white">
                <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
        <section className="section">
            <div className="container">
                <div className="row">
                    {teamTwoData.map((item,index) => {
                        return(
                            <div className="col-lg-3 col-md-4 col-12 mt-5" key={index}>
                                <div className="card team team-primary text-center">
                                    <div className="card-img team-image d-inline-block mx-auto rounded-pill avatar avatar-ex-large overflow-hidden">
                                        <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:"100%", height:'auto'}} className="img-fluid" alt=""/>
                                        <div className="card-overlay avatar avatar-ex-large rounded-pill"></div>

                                        <ul className="list-unstyled team-social mb-0">
                                            <li className="list-inline-item"><Link href="" className="btn btn-sm btn-pills btn-icon"><FiFacebook className="fea icon-sm fea-social"/></Link></li>
                                            <li className="list-inline-item"><Link href="" className="btn btn-sm btn-pills btn-icon"><FiInstagram className="fea icon-sm fea-social"/></Link></li>
                                            <li className="list-inline-item"><Link href="" className="btn btn-sm btn-pills btn-icon"><FiTwitter className="fea icon-sm fea-social"/></Link></li>
                                        </ul>
                                    </div>

                                    <div className="content mt-3">
                                        <Link href={`/page-team-detail/${item.id}`} className="text-dark h5 mb-0 title">{item.name}</Link>
                                        <h6 className="text-muted mb-0 fw-normal">{item.title}</h6>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h6 className="text-primary fw-normal mb-3">Available for freelance projects</h6>
                            <h1 className="title mb-4">Do you have digital project? <br/> Lets talk.</h1>
                            <div className="mt-4">
                                <Link href="/page-contact-two" className="btn btn-primary">Contact us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section pt-0">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10 text-center">
                        <div className="video-solution-cta position-relative z-index-1">
                            <div className="position-relative">
                                <Image src='/images/digital/cta.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid rounded-md shadow-lg" alt=""/>
                                <Modal/>
                            </div>
                            <div className="content mt-md-4 pt-md-2">
                                <div className="row justify-content-center">
                                    <div className="col-lg-12 text-center">
                                        <div className="row align-items-center">
                                            <div className="col-md-6 mt-4 pt-2">
                                                <div className="section-title text-md-start">
                                                    <h6 className="text-white-50 fw-normal">Fronter Agency</h6>
                                                    <h4 className="title text-white title-dark mb-0">We are a full-service <br/> digital company</h4>
                                                </div>
                                            </div>

                                            <div className="col-md-6 col-12 mt-4 pt-md-2">
                                                <div className="section-title text-md-start">
                                                    <p className="text-white-50 para-desc">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                                    <Link href="#" className="text-white title-dark">Read More <MdKeyboardArrowRight/></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feature-posts-placeholder bg-primary"></div>
            </div>
        </section>
        <FooterFour/>
        <ScrollTop/>
        </>
    )
}

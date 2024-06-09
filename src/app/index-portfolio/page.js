import React from "react";
import Link from "next/link"

import PortfolioNavbar from "../componants/navbar/portfolioNavbar";
import DigitalProject from "../componants/digitalProject";
import Footer from "../componants/footer/footer";
import ScrollTop from "../componants/scrollTop";
import Gallary from "../componants/portfolio/gallary";

export default function IndexPortfolio(){
    return(
        <>
        <PortfolioNavbar/>
        <section className="bg-half-170 d-table w-100" style={{backgroundImage:"url('/images/digital/bg01.jpg')"}} id="hero">
            <div className="bg-overlay bg-primary-gradient-overlay"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <h4 className="heading text-white title-dark mb-4">Building <br/> digital products, brands, <br/> and experience.</h4>
                            <h5 className="para-desc mx-auto fw-normal text-white-50">A <span className="text-white title-dark">Product Designer</span> and <span className="text-white title-dark">Visual Developer</span> in NY. We specialize in UI/UX Design, Responsive Web Design, and Visual Development.</h5>
                        
                            <div className="mt-4 pt-2">
                                <Link href="#" className="btn btn-pills btn-light">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section" id="portfolio">
            <Gallary/>
           <DigitalProject/>
        </section>
        <Footer/>
        <ScrollTop/>
        </>
    )
}
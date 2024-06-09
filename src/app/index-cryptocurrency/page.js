import React from "react";
import Link from "next/link"
import Image from "next/image"

import CryptoNavbar from "../componants/navbar/cryptoNavbar";
import Clients from "../componants/clients/clients";
import CryptoFooter from "../componants/footer/cryptoFooter";
import ScrollTop from "../componants/scrollTop";
import ParallaxImage from "../componants/Parallax";
import HeroText from "../componants/cryptocurrency/heroText";
import Token from "../componants/cryptocurrency/token";
import TokenSale from "../componants/cryptocurrency/tokenSale";
import Counter from "../componants/cryptocurrency/counter";
import GetInTuch from "../componants/cryptocurrency/getIntuch";

import { brandImg,cryptoImg,BenefitsData } from "../data/data";

import {AiOutlineCheckCircle, MdKeyboardArrowRight,FiHelpCircle,MdArrowForward} from "../assets/icons/vander"

export default function IndexCryptoCurrency(){

    return(
        <>
        <CryptoNavbar/>
        <section className="bg-half-260 d-flex align-items-center " id="home">
            <ParallaxImage bgImage='/images/crypto/bg1.jpg'/>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="title-heading">
                            <HeroText/>
                            <h4 className="display-5 fw-bold text-white title-dark mb-4">Building the future <br/> of Crypto Revolution.</h4>
                            <p className="text-white-50 para-desc mb-0">Take full control of your cryptocurrencies and collectibles by storing them on your own device.</p>

                            <div className="subcribe-form mt-4 mb-3 pt-2">
                                <form className="ms-0">
                                    <input type="email" id="email2" name="email" className="rounded-pill bg-white-50 border opacity-7" placeholder="E-mail :"/>
                                    <button type="submit" className="btn btn-pills btn-primary">Register</button>
                                </form>
                            </div>
                            <span className="text-white title-dark">Looking for help? <Link href="#" className="text-warning">Get in touch with us</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="position-relative">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="shape crypto-bottom overflow-hidden">
                            <div className="p-4 crypto-border">
                                <div className="row align-items-center">
                                    <div className="col-lg-4 col-md-6 col-5">
                                        <h5 className="text-white-50 mb-0">Token Popular</h5>
                                    </div>

                                    <div className="col-lg-8 col-md-6 col-7">
                                        <Token/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
        <section className="section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 order-1 order-md-2">
                        <div className="ms-lg-5">
                            <Image src='/images/crypto/01.png' width={0} height={0} sizes="100vw" style={{width:"100%", height:'auto'}} className="img-fluid" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="section-title me-lg-5">
                            <h6 className="text-primary">Why choose us?</h6>
                            <h4 className="title mb-4">Buy cryptocurrency <br/> with Fronter</h4>
                            <p className="text-muted">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                            <ul className="list-unstyled text-muted">
                                <li className="mb-1"><span className="text-primary h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                                <li className="mb-1"><span className="text-primary h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span>Create your own skin to match your brand</li>
                            </ul>
                            <Link href="#" className="mt-3 h6 text-primary">Find Out More <MdKeyboardArrowRight/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-100 mt-60">
                <div className="row">
                    <div className="col text-center mb-4">
                        <h5>We featured on popular partners like</h5>
                    </div>
                </div>

                <div className="row justify-content-center">
                    {brandImg.map((item,index)=>{
                        return(
                            <div className="col-lg-2 col-md-2 col-6 py-2" key={index}>
                                <div className="brand-gray text-center">
                                    <Image src={item} width={114} height={28} className="avatar avatar-md-md w-auto" alt=""/>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
        <section className="section  overflow-hidden py-0" id="service">
            <ParallaxImage bgImage='/images/crypto/bg2.jpg'/>
            <div className="bg-overlay bg-primary opacity-9 "></div>
            <div className="container section">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title text-white title-dark mb-3">Our Benefits</h4>
                            <p className="text-white-50 para-desc mx-auto mb-0">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    {BenefitsData.map((item,index) =>{
                        let Icon = item.icon
                        return(
                        <div className="col-lg-4 col-sm-6 mt-4 pt-2" key={index}>
                            <div className="features feature-border-light p-4 rounded text-center">
                                <div className="text-white title-dark d-block mx-auto rounded">
                                    <Icon className="icon h1 mb-0"/>
                                </div>

                                <div className="card-body p-0 mt-4">
                                    <Link href="#" className="h5 text-white title-dark">Support</Link>
                                    <p className="text-white-50 mt-2">Composed in a pseudo-Latin language which more or less corresponds.</p>
                                    <Link href="#" className="text-white title-dark">Read More <MdArrowForward/></Link>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </section>
        <section className="section pb-0" id="token">
            <div className="container">
                <TokenSale/>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-3">All your crypto and NFTs in one place</h4>
                            <p className="text-muted para-desc mx-auto mb-0">With Fronter Trade, you can be sure your trading skills are matched with excellent service.</p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-12">
                        <ul className="list-unstyled text-center">
                            {cryptoImg.map((item,index)=>{
                                return(
                                <li className="list-inline-item m-md-4 my-4 mx-2" key={index}>
                                    <Image src={item} width={65} height={65} className="avatar avatar-small p-lg-3 p-2 rounded-pill shadow-md" alt=""/>
                                </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row align-items-lg-center align-items-end">
                    <div className="col-md-6">
                        <div className="section-title mb-4 pb-2">
                            <h4 className="title mb-4">Free your money and <br/> invest with confidence</h4>
                            <p className="text-muted para-desc mb-0">With Fronter Trade, you can be sure your trading skills are matched with excellent service.</p>

                            <ul className="list-unstyled mb-0">
                                <li className="d-flex mt-4">
                                    <AiOutlineCheckCircle className=" h4 text-primary"/>

                                    <div className="flex-1 ms-3">
                                        <h6 className="mb-0">Buy, sell, and trade on the go</h6>
                                        <p className="text-muted mt-2 mb-0">Manage your holdings from your mobile device</p>
                                    </div>
                                </li>

                                <li className="d-flex mt-4">
                                    <AiOutlineCheckCircle className=" h4 text-primary"/>
                                    <div className="flex-1 ms-3">
                                        <h6 className="mb-0">Take control of your wealth</h6>
                                        <p className="text-muted mt-2 mb-0">Rest assured you (and only you) have access to your funds</p>
                                    </div>
                                </li>
                            </ul>

                            <div className="mt-4">
                                <Link href="#" className="btn btn-primary">Download Wallet</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="">
                            <Image src='/images/crypto/hand-with-mobile.png' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className=" overflow-hidden position-relative">
            <ParallaxImage bgImage='/images/crypto/cta.jpg'/>
            <Counter/>
        </section>
        <section className="section" id="testimonial">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="section-title text-center mb-4 pb-2">
                            <h6 className="text-primary fw-normal mb-2">Testimonial</h6>
                            <h4 className="title mb-4">What our customer <br/> say about us</h4>
                            <p className="text-muted para-desc mb-0 mx-auto">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>
                </div>
                <Clients/>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <div className="d-flex">
                            <FiHelpCircle className="fea icon-ex-md text-primary me-2 mt-1"/>
                            <div className="flex-1">
                                <h5 className="mt-0 fw-normal">How our <span className="text-primary">Fronter</span> work ?</h5>
                                <p className="answer text-muted mb-0">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="d-flex">
                            <FiHelpCircle className="fea icon-ex-md text-primary me-2 mt-1"/>
                            <div className="flex-1">
                                <h5 className="mt-0 fw-normal"> What is the main process open account ?</h5>
                                <p className="answer text-muted mb-0">If the distribution of letters and words is random, the reader will not be distracted from making a neutral judgement on the visual impact</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-6 col-12 mt-4 pt-2">
                        <div className="d-flex">
                            <FiHelpCircle className="fea icon-ex-md text-primary me-2 mt-1"/>
                            <div className="flex-1">
                                <h5 className="mt-0 fw-normal"> How to make unlimited data entry ?</h5>
                                <p className="answer text-muted mb-0">Furthermore, it is advantageous when the dummy text is relatively realistic so that the layout impression of the final publication is not compromised.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-6 col-12 mt-4 pt-2">
                        <div className="d-flex">
                            <FiHelpCircle className="fea icon-ex-md text-primary me-2 mt-1"/>
                            <div className="flex-1">
                                <h5 className="mt-0 fw-normal"> Is <span className="text-primary">Fronter</span> safer to use with my account ?</h5>
                                <p className="answer text-muted mb-0">The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to proper Latin.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <GetInTuch/>
            </div>
        </section>
        <CryptoFooter/>
        <ScrollTop/>
        </>
    )
}
'use client'
import React,{useEffect,useState} from "react";
import Link from "next/link";
import Image from "next/image";

import RestaurantNavbar from "../componants/navbar/RestaurantNavbar";
import ClientsTwo from "../componants/clients/clientsTwo";
import RestaurantFooter from "../componants/footer/restaurantFooter";
import ScrollTop from "../componants/scrollTop";
import ParallaxImage from "../componants/Parallax";
import Menu from "../componants/restaurant/menu";
import Slider from "../componants/restaurant/slider";

import { restAboutData} from "../data/data";


export default function IndexRestaurant(){
    useEffect(()=>{
        document.body.classList.add('restaurant-scss');
    })
    return(
        <>
        <RestaurantNavbar/>
        <section className="bg-home d-flex align-items-center -fluid"  id="home">
            <ParallaxImage bgImage='/images/food/bg01.jpg'/>
            <div className="bg-overlay"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <h4 className="text-white title-dark display-4 fw-bold mb-3">Amazing Food and Fresh <br/> Products & Wine </h4>
                            <p className="text-light title-dark para-desc mx-auto mb-0">Beatae cum eius, animi itaque aliquid ducimus facere dicta, vitae ipsam maiores nam sit blanditiis, quisquam expedita?</p>
                        
                            <div className="mt-4 pt-2">
                                <Link href="#" className="btn btn-primary rounded-0 text-uppercase">Book a Table</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section" id="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6 col-12">
                        <Image src='/images/food/about.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                    </div>

                    <div className="col-lg-6 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="section-title ms-lg-5">
                            <p className="text-muted fs-5 mb-0">The phrasal sequence of the Lorem Ipsum text is now so widespread and commonplace that many DTP programmes can generate dummy text using the starting sequence Lorem ipsum.</p>
                        
                            <h4 className="title my-3">Food is our common ground, <br/> a universal experience.</h4>

                            <p className="text-muted">Fortunately, the phrase Lorem Ipsum is now recognized by electronic pre-press systems and, when found, an alarm can be raised. This avoids a publication going to print with overlooked dummy text.</p>
                        
                            <div className="mt-4">
                                <Image src='/images/sign.png' width={128} height={32} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    {restAboutData.map((item, index)=>{
                        let Icon = item.icon
                        return(
                        <div className="col-lg-4 col-md-6 mt-5" key={index}>
                            <div className="card border-0 text-center features feature-primary feature-clean px-md-4">
                                <div className="icons bg-md text-primary text-center mx-auto">
                                    <Icon className="icon d-block rounded-0 fs-3 mb-0"/>
                                </div>
                                <div className="content mt-4 pt-2">
                                    <h5 className="mb-3">{item.title}</h5>
                                    <p className="text-muted mb-0">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </section>
        <section className="bg-half-170 overflow-hidden position-relative" style={{backgroundImage:"url('/images/food/menu.jpg')"}}   id="menu">
            <div className="bg-overlay bg-linear-gradient-2"></div>
            <div className="section-title position-absolute bottom-0 text-center end-0 start-0">
                <h5 className="text-muted title-dark-50">Our Menu</h5>
                <h4 className="title text-white title-dark mb-4">Choose your mixture & order now!</h4>
            </div>
        </section>
        <section className="section " style={{backgroundImage:"url('/images/food/food-menu.png')", backgroundRepeat:"no-repeat", backgroundPosition:"bottom"}} >
            <div className="container">
                <Menu/>
            </div>
        </section>
        <section className="section -fluid overflow-hidden position-relative pt-0" id="table " >
            <ParallaxImage bgImage="/images/food/cta.jpg"/>
            <div className="container pt-5 mt-5">
                <div className="row justify-content-end">
                    <div className="col-lg-6 col-md-8">
                        <div className="bg-white shadow p-lg-5 p-4 ms-lg-5">
                            <div className="section-title mb-4">
                                <span className="badge rounded-pill bg-soft-primary py-2 px-3 fw-semibold">Reservation</span>
                                <h4 className="title fw-bold text-uppercase my-3">Book A Table</h4>
                                <p className="text-muted mx-auto para-desc mb-0">We make it a priority to offer flexible services to accomodate your needs</p>
                            </div>

                            <form>
                                <div className="row gx-2">
                                    <div className="col-md-6">
                                        <div className="mb-4">
                                            <label className="form-label fw-semibold text-uppercase">Your Name</label>
                                            <input name="name" id="name" type="text" className="form-control rounded-0" placeholder="First Name :"/>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-4">
                                            <label className="form-label fw-semibold text-uppercase">Your Email</label>
                                            <input name="email" id="email" type="email" className="form-control rounded-0" placeholder="Your email :"/>
                                        </div> 
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-4">
                                            <label className="form-label fw-semibold text-uppercase">Phone no.</label>
                                            <input name="number" type="number" id="phone-number" className="form-control rounded-0" placeholder="Phone no. :"/>
                                        </div> 
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-4">
                                            <label className="form-label fw-semibold text-uppercase">Person</label>
                                            <input type="number" min="0" autoComplete="off" id="adult" className="form-control rounded-0" required="" placeholder="Person :"/>
                                        </div> 
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-4">
                                            <label className="form-label fw-semibold text-uppercase">Date</label>
                                            <input name="date" type="text" className="form-control start rounded-0" placeholder="(ex: mm/ dd/ yy)"/>
                                        </div> 
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-4">
                                            <label className="form-label fw-semibold text-uppercase">Time</label>
                                            <input name="time" type="text" id="input-time" className="form-control timepicker rounded-0" placeholder="(ex: 8:00 p.m)"/>
                                        </div> 
                                    </div>
                                </div>

                                <div className="row mt-2">
                                    <div className="col-sm-12">
                                        <input type="submit" id="submit" name="send" className="btn btn-primary rounded-0 text-uppercase w-100" value="Book a table"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section bg-soft-success" id="testi">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title text-dark mb-4">Happy Clients</h4>
                            <p className="text-muted para-desc mx-auto mb-0">Splash your dream color Bring your home to lively Colors. We make it a priority to offer flexible services to accomodate your needs</p>
                        </div>
                    </div>
                </div>
                <ClientsTwo position={false}/>
            </div>
        </section>
        <div className="container-fluid">
            <Slider/>
        </div>
        <RestaurantFooter/>
        <ScrollTop/>
        </>
    )
}
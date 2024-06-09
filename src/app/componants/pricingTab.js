'use client'
import React,{useState} from "react";
import Link from "next/link";

import {FiArrowRightCircle} from "../assets/icons/vander"

export default function PricingTab(){
    let [pricing, setPricing] = useState(false)

    function handleChange(e) {
        setPricing(e.target.checked);
     }
    return(
        <>
        <div className="row justify-content-center">
            <div className="col-12 text-center">
                <div className="section-title mb-4 pb-2">
                    <h4 className="title mb-4">Pricing Rates</h4>
                    <p className="text-muted para-desc mx-auto mb-0">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="switcher-pricing d-flex justify-content-center align-items-center mb-4 pb-2">
                    <label className={pricing === false ? "toggler h6 mb-0 text-muted toggler--is-active"  :  "toggler h6 mb-0 text-muted"} id="filt-monthly">Monthly</label>
                    <div className="form-check form-switch mx-3">
                        <input className="form-check-input" type="checkbox"  id="switcher" onChange={handleChange}/>
                    </div>
                    <label className={pricing === true ? "toggler h6 mb-0 text-muted toggler--is-active"  :  "toggler h6 mb-0 text-muted"} id="filt-yearly">Yearly</label>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-12">
                
                {pricing === false ? 
                    <div id="yearly" className="wrapper-full ">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                                <div className="pricing text-center rounded position-relative shadow">
                                    <div className="price-header rounded-top bg-dark bg-white-dark pt-5 pb-5">
                                        <h5 className="price-title text-white title-dark">Starter</h5>
                                        <p className="mb-0 text-white-50">Suitable for Starter</p>
                                    </div>
                                    <div className="d-flex justify-content-center bg-light border-bottom py-4">
                                        <span className="h6 mb-0">$</span>
                                        <span className="price h4 mb-0 ms-1">0.00</span>
                                        <span className="h6 align-self-end mb-1">/year</span>
                                    </div>
                                    <div className="pricing-features text-start">
                                        <ul className="feature list-unstyled py-4 p-3 mb-0">
                                            <li className="feature-list text-muted"><FiArrowRightCircle className="fea icon-sm text-dark me-2" />Full Access</li>
                                            <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2" />Enhanced Security</li>
                                            <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2" />Source Files</li>
                                            <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2" />1 Domain Free</li>
                                            <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2" />Free Appointments</li>
                                            <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2" />Free Installment</li>
                                        </ul>
                                        <div className="border-top text-center py-4">
                                            <Link href="#" className="btn btn-dark">Free Signup</Link>                                        
                                        </div>
                                    </div>    
                                </div>
                            </div>
                            
                            <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                                <div className="pricing text-center rounded position-relative shadow">
                                    <div className="ribbon ribbon-right ribbon-warning overflow-hidden"><span className="text-center d-block shadow small h6">Best</span></div>
                                    <div className="price-header rounded-top bg-dark bg-white-dark pt-5 pb-5">
                                        <h5 className="price-title text-white title-dark">Professional</h5>
                                        <p className="mb-0 text-white-50">Suitable for Regular</p>
                                    </div>
                                    <div className="d-flex justify-content-center bg-light border-bottom py-4">
                                        <span className="h6 mb-0">$</span>
                                        <span className="price h4 mb-0 ms-1">4.99</span>
                                        <span className="h6 align-self-end mb-1">/year</span>
                                    </div>
                                    <div className="pricing-features text-start">
                                        <ul className="feature list-unstyled py-4 p-3 mb-0">
                                            <li className="feature-list text-muted"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Full Access</li>
                                            <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Enhanced Security</li>
                                            <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Source Files</li>
                                            <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>1 Domain Free</li>
                                            <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Free Appointments</li>
                                            <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Free Installment</li>
                                        </ul>
                                        <div className="border-top text-center py-4">
                                            <Link href="#" className="btn btn-dark">Subscribe Now</Link>                                        
                                        </div>
                                    </div>    
                                </div>
                            </div>
                            
                            <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                                <div className="pricing text-center rounded overflow-hidden shadow-lg bg-light">
                                    <div className="price-header rounded-top bg-primary pt-5 pb-5">
                                        <h5 className="price-title text-white title-dark">Standerd</h5>
                                        <p className="mb-0 text-white-50">Suitable for Business</p>
                                    </div>
                                    <div className="d-flex justify-content-center bg-light border-bottom py-5">
                                        <span className="h6 mb-0">$</span>
                                        <span className="price h4 mb-0 ms-1">9.99</span>
                                        <span className="h6 align-self-end mb-1">/year</span>
                                    </div>
                                    <div className="pricing-features text-start">
                                        <ul className="feature list-unstyled py-4 p-3 mb-0">
                                            <li className="feature-list text-muted"><FiArrowRightCircle className="fea icon-sm text-primary me-2"/>Full Access</li>
                                            <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-primary me-2"/>Enhanced Security</li>
                                            <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-primary me-2"/>Source Files</li>
                                            <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-primary me-2"/>1 Domain Free</li>
                                            <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-primary me-2"/>Free Appointments</li>
                                            <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-primary me-2"/>Free Installment</li>
                                        </ul>
                                        <div className="border-top text-center py-5">
                                            <Link href="#" className="btn btn-primary">Buy Now</Link>                                        
                                        </div>
                                    </div>    
                                </div>
                            </div>
                            
                            <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                                <div className="pricing text-center rounded position-relative shadow">
                                    <div className="price-header rounded-top bg-dark bg-white-dark pt-5 pb-5">
                                        <h5 className="price-title text-white title-dark">Premium</h5>
                                        <p className="mb-0 text-white-50">Suitable for Premium</p>
                                    </div>
                                    <div className="d-flex justify-content-center bg-light border-bottom py-4">
                                        <span className="h6 mb-0">$</span>
                                        <span className="price h4 mb-0 ms-1">19.99</span>
                                        <span className="h6 align-self-end mb-1">/year</span>
                                    </div>
                                    <div className="pricing-features text-start">
                                        <ul className="feature list-unstyled py-4 p-3 mb-0">
                                            <li className="feature-list text-muted"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Full Access</li>
                                            <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Enhanced Security</li>
                                            <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Source Files</li>
                                            <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>1 Domain Free</li>
                                            <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Free Appointments</li>
                                            <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Free Installment</li>
                                        </ul>
                                        <div className="border-top text-center py-4">
                                            <Link href="#" className="btn btn-dark">Buy Premium</Link>                                        
                                        </div>
                                    </div>    
                                </div>
                            </div>
                        </div>
                    </div> :
                    <div id="monthly" className="wrapper-full">
                    <div className="row align-items-lg-center">
                        <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                            <div className="pricing text-center rounded position-relative shadow">
                                <div className="price-header rounded-top bg-dark bg-white-dark pt-5 pb-5">
                                    <h5 className="price-title text-white title-dark">Starter</h5>
                                    <p className="mb-0 text-white-50">Suitable for Starter</p>
                                </div>
                                <div className="d-flex justify-content-center bg-light border-bottom py-4">
                                    <span className="h6 mb-0">$</span>
                                    <span className="price h4 mb-0 ms-1">0.00</span>
                                    <span className="h6 align-self-end mb-1">/mo</span>
                                </div>
                                <div className="pricing-features text-start">
                                    <ul className="feature list-unstyled py-4 p-3 mb-0">
                                        <li className="feature-list text-muted"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Full Access</li>
                                        <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Enhanced Security</li>
                                        <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Source Files</li>
                                        <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>1 Domain Free</li>
                                        <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Free Appointments</li>
                                        <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Free Installment</li>
                                    </ul>
                                    <div className="border-top text-center py-4">
                                        <Link href="#" className="btn btn-dark">Free Signup</Link>                                        
                                    </div>
                                </div>    
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                            <div className="pricing text-center rounded position-relative shadow">
                                <div className="ribbon ribbon-right ribbon-warning overflow-hidden"><span className="text-center d-block shadow small h6">Best</span></div>
                                <div className="price-header rounded-top bg-dark bg-white-dark pt-5 pb-5">
                                    <h5 className="price-title text-white title-dark">Professional</h5>
                                    <p className="mb-0 text-white-50">Suitable for Regular</p>
                                </div>
                                <div className="d-flex justify-content-center bg-light border-bottom py-4">
                                    <span className="h6 mb-0">$</span>
                                    <span className="price h4 mb-0 ms-1">9.99</span>
                                    <span className="h6 align-self-end mb-1">/mo</span>
                                </div>
                                <div className="pricing-features text-start">
                                    <ul className="feature list-unstyled py-4 p-3 mb-0">
                                        <li className="feature-list text-muted"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Full Access</li>
                                        <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Enhanced Security</li>
                                        <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Source Files</li>
                                        <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>1 Domain Free</li>
                                        <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Free Appointments</li>
                                        <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Free Installment</li>
                                    </ul>
                                    <div className="border-top text-center py-4">
                                        <Link href="#" className="btn btn-dark">Subscribe Now</Link>                                        
                                    </div>
                                </div>    
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                            <div className="pricing text-center rounded position-relative shadow-lg bg-light">
                                <div className="price-header rounded-top bg-primary pt-5 pb-5">
                                    <h5 className="price-title text-white title-dark">Standerd</h5>
                                    <p className="mb-0 text-white-50">Suitable for Business</p>
                                </div>
                                <div className="d-flex justify-content-center bg-light border-bottom py-5">
                                    <span className="h6 mb-0">$</span>
                                    <span className="price h4 mb-0 ms-1">19.99</span>
                                    <span className="h6 align-self-end mb-1">/mo</span>
                                </div>
                                <div className="pricing-features text-start">
                                    <ul className="feature list-unstyled py-4 p-3 mb-0">
                                        <li className="feature-list text-muted"><FiArrowRightCircle className="fea icon-sm text-primary me-2"/>Full Access</li>
                                        <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-primary me-2"/>Enhanced Security</li>
                                        <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-primary me-2"/>Source Files</li>
                                        <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-primary me-2"/>1 Domain Free</li>
                                        <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-primary me-2"/>Free Appointments</li>
                                        <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-primary me-2"/>Free Installment</li>
                                    </ul>
                                    <div className="border-top text-center py-5">
                                        <Link href="#" className="btn btn-primary">Buy Now</Link>                                        
                                    </div>
                                </div>    
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                            <div className="pricing text-center rounded position-relative shadow">
                                <div className="price-header rounded-top bg-dark bg-white-dark pt-5 pb-5">
                                    <h5 className="price-title text-white title-dark">Premium</h5>
                                    <p className="mb-0 text-white-50">Suitable for Premium</p>
                                </div>
                                <div className="d-flex justify-content-center bg-light border-bottom py-4">
                                    <span className="h6 mb-0">$</span>
                                    <span className="price h4 mb-0 ms-1">29.99</span>
                                    <span className="h6 align-self-end mb-1">/mo</span>
                                </div>
                                <div className="pricing-features text-start">
                                    <ul className="feature list-unstyled py-4 p-3 mb-0">
                                        <li className="feature-list text-muted"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Full Access</li>
                                        <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Enhanced Security</li>
                                        <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Source Files</li>
                                        <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>1 Domain Free</li>
                                        <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Free Appointments</li>
                                        <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Free Installment</li>
                                    </ul>
                                    <div className="border-top text-center py-4">
                                        <Link href="#" className="btn btn-dark">Buy Premium</Link>                                        
                                    </div>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>    
            }
                
            </div>
        </div>
        </>
    )
}
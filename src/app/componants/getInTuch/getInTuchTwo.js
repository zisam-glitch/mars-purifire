import React from "react";
import Link from "next/link";

import {FiPhoneCall, FiMail,FiMapPin} from '../../assets/icons/vander'

export default function GetInTuchTwo(){
    return(
        <section className="section" id="contact">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="section-title text-center mb-4 pb-2">
                        <h4 className="title mb-4">Get In Touch!</h4>
                        <p className="para-desc text-muted mx-auto mb-0">Obviously Im a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                    </div>
                </div>
            </div>

            <div className="row align-items-center">
                <div className="col-lg-7 col-md-6 col-12 mt-4 pt-2">
                    <div className="card rounded shadow">
                        <div className="card-body">
                            <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Your Name <span className="text-danger">*</span></label>
                                            <input name="name" id="name" type="text" className="form-control" placeholder="Name :"/>
                                        </div>
                                    </div>
    
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                            <input name="email" id="email" type="email" className="form-control" placeholder="Email :"/>
                                        </div> 
                                    </div>
    
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label className="form-label">Subject</label>
                                            <input name="subject" id="subject" className="form-control" placeholder="Subject :"/>
                                        </div>
                                    </div>
    
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label className="form-label">Comments <span className="text-danger">*</span></label>
                                            <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Message :"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="d-grid">
                                            <button type="submit" id="submit" name="send" className="btn btn-primary">Send Message</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-5 col-md-6 col-12 mt-4 pt-2">
                    <div className="ms-lg-4">
                        <div className="d-flex features feature-primary feature-clean">
                            <div className="icons text-center mx-auto rounded">
                                <FiPhoneCall className="icon d-block h4 mb-0"/>
                            </div>

                            <div className="flex-1 ms-3">
                                <h5 className="mb-2">Phone</h5>
                                <p className="text-muted mb-2">Start working with Fronter that can provide everything</p>
                                <Link href="tel:+152534-468-854" className="link">+152 534-468-854</Link>
                            </div>
                        </div>

                        <div className="d-flex features feature-primary feature-clean mt-4">
                            <div className="icons text-center mx-auto rounded">
                                <FiMail className="icon d-block h4 mb-0"/>
                            </div>

                            <div className="flex-1 ms-3">
                                <h5 className="mb-2">Email</h5>
                                <p className="text-muted mb-2">Start working with Fronter that can provide everything</p>
                                <Link href="mailto:contact@example.com" className="link">contact@example.com</Link>
                            </div>
                        </div>

                        <div className="d-flex features feature-primary feature-clean mt-4">
                            <div className="icons text-center mx-auto rounded">
                                <FiMapPin className="icon d-block h4 mb-0"/>
                            </div>

                            <div className="flex-1 ms-3">
                                <h5 className="mb-2">Location</h5>
                                <p className="text-muted mb-2">C/54 Northwest Freeway, Suite 558, <br/>Houston, USA 485</p>
                                <Link href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" className="lightbox text-primary" data-type="iframe" data-group="iframe" data-width="1024px" data-height="576px">View on Google map</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
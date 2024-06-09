import React from "react";
import Link from "next/link";
import Image from "next/image";

import {AiOutlineShoppingCart,AiOutlineDribbble,AiOutlineBehance,AiFillLinkedin,BiLogoFacebook,AiOutlineInstagram,AiOutlineTwitter,FiMail,AiOutlineFile,MdOutlineKeyboardArrowRight,MdArrowForward} from "../../assets/icons/vander"

export default function FooterFour(){
    return(
        <footer className="bg-footer">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="footer-py-60 footer-border">
                            <div className="row">
                                <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                                    <Link href="#" className="logo-footer">
                                        <Image src='/images/logo-light.png' width={118} height={28} alt=""/>
                                    </Link>
                                    <p className="mt-4">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                    <ul className="list-unstyled social-icon foot-social-icon mb-0 mt-4">
                                        <li className="list-inline-item"><Link href="https://1.envato.market/fronter-next" target="_blank" className="rounded"><AiOutlineShoppingCart className="align-middle"/></Link></li>
                                        <li className="list-inline-item"><Link href="https://dribbble.com/shreethemes" target="_blank" className="rounded"><AiOutlineDribbble/></Link></li>
                                        <li className="list-inline-item"><Link href="https://www.behance.net/shreethemes" target="_blank" className="rounded"><AiOutlineBehance/></Link></li>
                                        <li className="list-inline-item"><Link href="http://linkedin.com/company/shreethemes" target="_blank" className="rounded"><AiFillLinkedin/></Link></li>
                                        <li className="list-inline-item"><Link href="https://www.facebook.com/shreethemes" target="_blank" className="rounded"><BiLogoFacebook/></Link></li>
                                        <li className="list-inline-item"><Link href="https://www.instagram.com/shreethemes/" target="_blank" className="rounded"><AiOutlineInstagram/></Link></li>
                                        <li className="list-inline-item"><Link href="https://twitter.com/shreethemes" target="_blank" className="rounded"><AiOutlineTwitter/></Link></li>
                                        <li className="list-inline-item"><Link href="mailto:support@shreethemes.in" className="rounded"><FiMail/></Link></li>
                                        <li className="list-inline-item"><Link href="https://forms.gle/QkTueCikDGqJnbky9" target="_blank" className="rounded"><AiOutlineFile/></Link></li>
                                    </ul>
                                </div>
                                
                                <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <h5 className="footer-head">Company</h5>
                                    <ul className="list-unstyled footer-list mt-4">
                                        <li><Link href="#" className="text-foot"><MdOutlineKeyboardArrowRight className="me-1"/> About us</Link></li>
                                        <li><Link href="#" className="text-foot"><MdOutlineKeyboardArrowRight className="me-1"/> Services</Link></li>
                                        <li><Link href="#" className="text-foot"><MdOutlineKeyboardArrowRight className="me-1"/> Team</Link></li>
                                        <li><Link href="#" className="text-foot"><MdOutlineKeyboardArrowRight className="me-1"/> Pricing</Link></li>
                                        <li><Link href="#" className="text-foot"><MdOutlineKeyboardArrowRight className="me-1"/> Project</Link></li>
                                        <li><Link href="#" className="text-foot"><MdOutlineKeyboardArrowRight className="me-1"/> Careers</Link></li>
                                        <li><Link href="#" className="text-foot"><MdOutlineKeyboardArrowRight className="me-1"/> Blog</Link></li>
                                        <li><Link href="#" className="text-foot"><MdOutlineKeyboardArrowRight className="me-1"/> Login</Link></li>
                                    </ul>
                                </div>
                                
                                <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <h5 className="footer-head">Usefull Links</h5>
                                    <ul className="list-unstyled footer-list mt-4">
                                        <li><Link href="#" className="text-foot"><MdOutlineKeyboardArrowRight className="me-1"/> Terms of Services</Link></li>
                                        <li><Link href="#" className="text-foot"><MdOutlineKeyboardArrowRight className="me-1"/> Privacy Policy</Link></li>
                                        <li><Link href="#" className="text-foot"><MdOutlineKeyboardArrowRight className="me-1"/> Documentation</Link></li>
                                        <li><Link href="#" className="text-foot"><MdOutlineKeyboardArrowRight className="me-1"/> Changelog</Link></li>
                                        <li><Link href="#" className="text-foot"><MdOutlineKeyboardArrowRight className="me-1"/> Components</Link></li>
                                    </ul>
                                </div>
            
                                <div className="col-lg-4 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <h5 className="footer-head">Start project with Fronter</h5>

                                    <ul className="list-unstyled footer-list mt-4 mb-2">
                                        <li className="list-inline-item mx-1"><Link href="#" className="btn btn-soft-primary">Signin</Link></li>
                                        <li className="list-inline-item mx-1"><Link href="#" className="btn btn-primary">Signup</Link></li>
                                    </ul>
                                    <small className="d-block">Are you developer ? <Link href="#" className="text-foot fw-semibold">Learn More <MdArrowForward/></Link></small>

                                    <Image src='/images/logo-icon-48.png' width={54} height={48} className="mt-4" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-py-30 footer-bar">
                <div className="container text-center">
                    <div className="row">
                        <div className="col">
                            <div className="text-center">
                                <p className="mb-0">© {new Date().getFullYear()} Fronter. Design & Develop with <i className="mdi mdi-heart text-danger"></i> by <Link href="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
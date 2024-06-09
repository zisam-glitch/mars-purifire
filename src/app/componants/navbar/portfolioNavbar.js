'use client'
import React,{useState,useEffect} from "react";
import Link from "next/link";
import Image from "next/image";

import { Link as Link1 } from 'react-scroll';

import {AiOutlineShoppingCart,AiOutlineDribbble,AiOutlineBehance,AiFillLinkedin,BiLogoFacebook,AiOutlineInstagram,AiOutlineTwitter,FiMail,AiOutlineFile,} from "../../assets/icons/vander"
import {FaEllipsisVertical} from "react-icons/fa6"
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function PortfolioNavbar(){
    let [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
          setScroll(window.scrollY > 50);
        });
      }, []);
    
    let [show, setShow] = useState(false);

    let handleClose = () => setShow(false);
    let handleShow = () => setShow(true);

    return(
        <header id="topnav" className={`${scroll ? "nav-sticky" :""} defaultscroll sticky`}>
        <div className="container">
            <Link className="logo" href="/">
                <span className="logo-light-mode">
                    <Image src='/images/logo-dark.png' width={118} height={28} className="l-dark" alt=""/>
                    <Image src='/images/logo-light.png' width={118} height={28} className="l-light" alt=""/>
                </span>
                <Image src='/images/logo-light.png' width={118} height={28} className="logo-dark-mode" alt=""/>
            </Link>

            <ul className="buy-button list-inline mb-0">
                <li className="list-inline-item mb-0">
                    <Link href="#" onClick={handleShow}>
                        <span className="btn btn-icon btn-pills btn-primary"><FaEllipsisVertical/></span>
                    </Link>
                </li>
            </ul>

            <Offcanvas show={show} onHide={handleClose} placement="end"  className="offcanvas offcanvas-end photography-offcanvas bg-white shadow   ">
                 <div id="topnav" className="position-absolute h-100">
                    <Offcanvas.Header closeButton className="offcanvas-header px-4 border-bottom">
                    <Offcanvas.Title>
                        <h5 id="offcanvasRightLabel" className="mb-0">
                            <Image src='/images/logo-dark.png' width={118} height={28} className="light-version" alt=""/>
                            <Image src='/images/logo-light.png' width={118} height={28} className="dark-version" alt=""/>
                        </h5>
                    </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className="h-100">
                        <div className="h-100">
                            <div className="container d-flex align-items-center justify-content-center" style={{height:"85%"}}>
                                <div className="row">
                                    <div className="col-12">
                                        <div id="navigation" className="toggle-menu bg-white"> 
                                            <ul className="navigation-menu toggle-menu-item" id="navmenu-nav">
                                                <li className="has-submenu">
                                                    <Link1 to="hero" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">Home</Link1>
                                                </li>
                                                <li className="has-submenu">
                                                    <Link1 to="portfolio" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">Portfolio</Link1>
                                                </li>
                                                <li className="has-submenu">
                                                    <Link1 to="contact" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">Contact</Link1>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="offcanvas-footer p-4 border-top text-center">
                            <ul className="list-unstyled social-icon social mb-0">
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
                        </div>
                        
                    </Offcanvas.Body>
                        
                 </div>
            </Offcanvas>
        </div>
    </header>
    )
}
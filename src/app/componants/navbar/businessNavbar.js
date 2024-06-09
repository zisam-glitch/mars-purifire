'use client'
import React,{useState,useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import { Link as Link1 } from 'react-scroll';

import {BiLogoFacebook, BiLogoInstagram, BiLogoTwitter,BiLogoLinkedinSquare,FiUser,FiMail} from "../../assets/icons/vander"

export default function BusinessNavbar(){
    let [scroll, setScroll] = useState(false);
    let [isMenu, setisMenu] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
          setScroll(window.scrollY > 50);
        });
      }, []);

      let toggleMenu = () => {
        setisMenu(!isMenu);
        if (document.getElementById("navigation")) {
            let anchorArray = Array.from(document.getElementById("navigation").getElementsByTagName("a"));
            anchorArray.forEach(element => {
                element.addEventListener('click', (elem) => {
                    let target = elem.target.getAttribute("href")
                    if (target !== "") {
                        if (elem.target.nextElementSibling) {
                            var submenu = elem.target.nextElementSibling.nextElementSibling;
                            submenu.classList.toggle('open');
                        }
                    }
                })
            });
        }
    };

    return(
        <>
        <div className="tagline bg-white">
            <div className="container">                
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex align-items-center justify-content-between">
                            <ul className="list-unstyled mb-0">
                                <li className="list-inline-item mb-0"><Link href="#" className="text-muted fw-normal"><FiMail className="fea icon-sm text-primary"/> support@Fronter.com</Link></li>
                            </ul>

                            <ul className="list-unstyled social-icon tagline-social mb-0">
                                <li className="list-inline-item mb-0"><Link href="#" className="ps-0"><BiLogoFacebook className="mb-0 icon"/></Link></li>
                                <li className="list-inline-item mb-0"><Link href="#" className="ps-0"><BiLogoInstagram className="mb-0 icon"/></Link></li>
                                <li className="list-inline-item mb-0"><Link href="#" className="ps-0"><BiLogoTwitter className="mb-0 icon"/></Link></li>
                                <li className="list-inline-item mb-0"><Link href="#" className="ps-0"><BiLogoLinkedinSquare className="mb-0 icon"/></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <header id="topnav" className={`${scroll ? "nav-sticky" :""} defaultscroll sticky tagline-height`}>
            <div className="container">
				<Link className="logo" href="/">
                    <span className="logo-light-mode">
                        <Image src="/images/logo-dark.png" width={118} height={28} className="l-dark" alt=""/>
                        <Image src="/images/logo-light.png" width={118} height={28} className="l-light" alt=""/>
                    </span>
                    <Image src="/images/logo-light.png" width={118} height={28} className="logo-dark-mode" alt=""/>
                </Link>
                <div className="menu-extras">
                    <div className="menu-item">
                        <Link href="#" className={`navbar-toggle ${isMenu ? 'open' : ''}`} id="isToggle" onClick={() => toggleMenu()}>
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </Link>
                    </div>
                </div>
                <ul className="buy-button list-inline mb-0">
                    <li className="list-inline-item ps-1 mb-0">
                        <Link href="https://1.envato.market/fronter-next" target="_blank">
                            <div className="btn btn-icon btn-pills btn-primary d-sm-none d-inline-flex"><FiUser className="fea icon-sm"/></div>
                            <div className="btn btn-primary d-none d-sm-block"><FiUser className="fea icon-sm"/> Sign in</div>
                        </Link>
                    </li>
                </ul>
        
                <div id="navigation" style={{ display: isMenu ? 'block' : 'none' }}>  
                    <ul className="navigation-menu nav-light" id="navmenu-nav">
                        <li className="has-submenu">
                            <Link1 to="home" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">Home</Link1>
                        </li>
                        <li className="has-submenu">
                            <Link1 to="features" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">Feature</Link1>
                        </li>
                        <li className="has-submenu">
                            <Link1 to="about" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">About Us</Link1>
                        </li>
                        <li className="has-submenu">
                            <Link1 to="testimonial" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">Reviews</Link1>
                        </li>
                        <li className="has-submenu">
                            <Link1 to="news" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">Blog</Link1>
                        </li>
                        <li className="has-submenu">
                            <Link1 to="contact" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">Contact</Link1>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
        </>
    )
}
'use client'
import React,{useState,useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import { Link as Link1 } from 'react-scroll';

import {FiFacebook,FiInstagram, FiLinkedin} from "../../assets/icons/vander"


export default function PersonalNavbar(){
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
        <header id="topnav" className={`${scroll ? "nav-sticky" :""} defaultscroll sticky`}>
            <div className="container">
				<Link className="logo" href="/">
                    <Image src='/images/logo-dark.png' width={118} height={28} className="logo-light-mode" alt=""/>
                    <Image src='/images/logo-light.png' width={118} height={28} className="logo-dark-mode" alt=""/>
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
                    <li className="list-inline-item"><Link href="" className="btn btn-sm btn-icon btn-pills btn-primary"><FiFacebook className="icons"/></Link></li>
                    <li className="list-inline-item"><Link href="" className="btn btn-sm btn-icon btn-pills btn-primary"><FiInstagram className="icons"/></Link></li>
                    <li className="list-inline-item"><Link href="" className="btn btn-sm btn-icon btn-pills btn-primary"><FiLinkedin className="icons"/></Link></li>
                </ul>
        
                <div id="navigation" style={{ display: isMenu ? 'block' : 'none' }}>  
                    <ul className="navigation-menu nav-right personal-menu" id="navmenu-nav">
                        <li className="has-submenu">
                            <Link1 to="home" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">Home</Link1>
                        </li>
                        <li className="has-submenu">
                            <Link1 to="features" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">Feature</Link1>
                        </li>
                        <li className="has-submenu">
                            <Link1 to="experience" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">Experience</Link1>
                        </li>
                        <li className="has-submenu">
                            <Link1 to="project" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">Works</Link1>
                        </li>
                        <li className="has-submenu">
                            <Link1 to="contact" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">Contact</Link1>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
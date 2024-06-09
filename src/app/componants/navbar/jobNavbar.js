'use client'
import React,{useState,useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import { Link as Link1 } from 'react-scroll';

import {FiUser} from "../../assets/icons/vander"

export default function JobNavbar(){
    let [scroll, setScroll] = useState(false);
    let [isMenu, setisMenu] = useState(false);
    let [subMenu, setSubMenu] = useState(false);

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
        <header id="topnav" className={`${scroll ? "nav-sticky" :""} defaultscroll sticky bg-white`}>
        <div className="container">
            <Link className="logo" href="/">
                <Image src="/images/logo-dark.png" width={118} height={28} className="logo-light-mode" alt=""/>
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
                <li className="list-inline-item ps-1 mb-0">
                    <Link href="/auth-login"><div className="btn btn-icon btn-pills btn-primary"><FiUser className="fea icon-sm"/></div></Link>
                </li>
            </ul>
    
            <div id="navigation" style={{ display: isMenu ? 'block' : 'none' }}>  
                <ul className="navigation-menu nav-right" id="navmenu-nav">
                    <li className="has-submenu">
                        <Link1 to="home" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">Home</Link1>
                    </li>
                    <li className="has-submenu">
                        <Link1 to="categories" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">Categories</Link1>
                    </li>
                    <li className="has-submenu">
                        <Link1 to="about" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">About Us</Link1>
                    </li>
                    <li className="has-submenu">
                        <Link1 to="jobs" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">Jobs</Link1>
                    </li>
                    <li className="has-submenu">
                        <Link1 to="apps" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">Download Apps</Link1>
                    </li>
                    <li className="has-submenu parent-parent-menu-item">
                        <Link href="" onClick={()=>setSubMenu(!subMenu)}>Pages</Link><span className="menu-arrow" onClick={()=>setSubMenu(!subMenu)}></span>
                        <ul className={subMenu ? "submenu open" : "submenu "} >
                            <li><Link href="/jobs" className="sub-menu-item"> All Jobs</Link></li>
                            <li><Link href="/job-detail" className="sub-menu-item">Job Details</Link></li>
                            <li><Link href="/job-apply" className="sub-menu-item">Job Apply</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </header>
    )
}
'use client'
import React,{useState,useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import { Link as Link1 } from 'react-scroll';

import {AiOutlineShoppingCart} from "../../assets/icons/vander"

export default function RestaurantNavbar(){
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
        <header id="topnav"  className={`${scroll ? "nav-sticky" :""} defaultscroll sticky`}>
        <div className="container">
            <Link className="logo" href="/">
                <span className="logo-light-mode">
                    <Image src='/images/logo-dark.png' width={118} height={28} className="l-dark" alt=""/>
                    <Image src='/images/logo-light.png' width={118} height={28} className="l-light" alt=""/>
                </span>
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
                    <Link href="https://1.envato.market/fronter-next" target="_blank">
                        <span className="btn btn-icon btn-pills btn-primary"><AiOutlineShoppingCart/></span>
                    </Link>
                </li>
            </ul>
    
            <div id="navigation" style={{ display: isMenu ? 'block' : 'none' }}>  
                <ul className="navigation-menu nav-light nav-right" id="navmenu-nav">
                    <li className="has-submenu">
                        <Link1 to="home" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">Home</Link1>
                    </li>
                    <li className="has-submenu">
                        <Link1 to="about" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">About us</Link1>
                    </li>
                    <li className="has-submenu">
                        <Link1 to="menu" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">Menu</Link1>
                    </li>
                    <li className="has-submenu">
                        <Link1 to="table" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">Reservation</Link1>
                    </li>
                    <li className="has-submenu">
                        <Link1 to="testi" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">Testimonial</Link1>
                    </li>
                </ul>
            </div>
        </div>
    </header>
    )
}
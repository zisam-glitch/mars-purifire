'use client'
import React,{useState,useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation'

import {AiOutlineShoppingCart} from "../../assets/icons/vander"

export default function BlogNavbar(){
    let pathname = usePathname()
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
            const anchorArray = Array.from(document.getElementById("navigation").getElementsByTagName("a"));
            anchorArray.forEach(element => {
                element.addEventListener('click', (elem) => {
                    const target = elem.target.getAttribute("href")
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
                            <div className="btn btn-icon btn-pills btn-primary d-sm-none d-inline-flex"><AiOutlineShoppingCart/></div>
                            <div className="btn btn-pills btn-primary d-none d-sm-block"><AiOutlineShoppingCart/> Buy Now</div>
                        </Link>
                    </li>
                </ul>
        
                <div id="navigation" style={{ display: isMenu ? 'block' : 'none' }}>  
                    <ul className="navigation-menu nav-right nav-light" id="navmenu-nav">
                        <li><Link href="/index-blog" className={pathname == "/index-blog" ? "active" : "sub-menu-item"}>Home</Link></li>
                        <li><Link href="#" className="sub-menu-item">Travel</Link></li>
                        <li><Link href="#" className="sub-menu-item">Lifestyle</Link></li>
                        <li><Link href="#" className="sub-menu-item">Technology</Link></li>

                        <li className="has-submenu parent-menu-item">
                            <Link href="#">Blog Post</Link><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li><Link href="/blog-standard-post" className="sub-menu-item">Standard Post</Link></li>
                                <li><Link href="/blog-slider-post" className="sub-menu-item">Slider Post</Link></li>
                                <li><Link href="/blog-gallery-post" className="sub-menu-item">Gallery Post</Link></li>
                                <li><Link href="/blog-youtube-post" className="sub-menu-item">Youtube Post</Link></li>
                                <li><Link href="/blog-vimeo-post" className="sub-menu-item">Vimeo Post</Link></li>
                                <li><Link href="/blog-html-video-post" className="sub-menu-item">HTML Video Post</Link></li>
                                <li><Link href="/blog-audio-post" className="sub-menu-item">Audio Post</Link></li>
                                <li><Link href="/blog-html-audio-post" className="sub-menu-item">HTML Audio Post</Link></li>
                                <li><Link href="/blog-blockquote-post" className="sub-menu-item">Blockquote</Link></li>
                                <li><Link href="/blog-left-sidebar-post" className="sub-menu-item">Left Sidebar</Link></li>
                            </ul>
                        </li>

                        <li><Link href="/page-contact-one" className="sub-menu-item">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
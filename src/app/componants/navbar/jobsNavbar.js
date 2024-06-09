'use client'
import React,{useState,useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation'

import {FiUser} from "../../assets/icons/vander"

export default function JobsNavbar(){
    let pathname = usePathname()
    let [scroll, setScroll] = useState(false);
    let [isMenu, setisMenu] = useState(false)

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
                <span className="logo-light-mode">
                    <Image src="/images/logo-dark.png" width={118} height={28}  className="l-dark" alt=""/>
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
                    <Link href="/auth-login"><div className="btn btn-icon btn-pills btn-primary"><FiUser className="fea icon-sm"/></div></Link>
                </li>
            </ul>
    
            <div id="navigation" style={{ display: isMenu ? 'block' : 'none' }}>  
                <ul className="navigation-menu nav-light nav-right">
                    <li className="has-submenu">
                        <Link href="/index-job" className="sub-menu-item">Home</Link>
                    </li>
                    <li className="has-submenu">
                        <Link href="/jobs" className={pathname == "/jobs" ? "active" : ""}>Jobs</Link>
                    </li>
                    <li className="has-submenu">
                        <Link href="/job-detail" className={pathname == "/job-detail" ? "active" : ""}>Job Detail</Link>
                    </li>
                    <li className="has-submenu">
                        <Link href="/job-apply" className={pathname == "/job-apply" ? "active" : ""}>Job Apply</Link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
    )
}
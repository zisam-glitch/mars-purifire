"use client"
import React,{useState,useEffect} from "react";
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineArrowUp, FiShoppingCart} from "../../assets/icons/vander"

export default function Navbar({navClass, manuClass,logoLight,smallButton}) {
    let [isMenu, setisMenu] = useState(false);
    let[navbarTop, setNavbarTop] = useState(false); 

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
    
    useEffect(() => {
        if (typeof window !== "undefined"){
            window.addEventListener("scroll", windowScroll);
        }
        activateMenu();
        window.scrollTo(0, 0)
        
    }, []);

    function windowScroll() {
        setNavbarTop(document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50)

        const mybutton = document.getElementById("back-to-top");
        if (mybutton != null) {
            if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                mybutton.classList.add("flex");
                mybutton.classList.remove("hidden");
            } else {
                mybutton.classList.add("hidden");
                mybutton.classList.remove("flex");
            }
        }
    }

    const activateMenu = () => {
        var menuItems = document.getElementsByClassName("sub-menu-item");
        if (menuItems) {

            var matchingMenuItem = null;
            for (var idx = 0; idx < menuItems.length; idx++) {
                if (menuItems[idx].href === window.location.href) {
                    matchingMenuItem = menuItems[idx];
                }
            }
            if (matchingMenuItem) {
                matchingMenuItem.classList.add('active');

                var immediateParent = getClosest(matchingMenuItem, 'li');

                if (immediateParent) {
                    immediateParent.classList.add('active');
                }

                var parent = getClosest(immediateParent, '.child-menu-item');
                if (parent) {
                    parent.classList.add('active');
                }

                var parent = getClosest(parent || immediateParent, '.parent-menu-item');

                if (parent) {
                    parent.classList.add('active');

                    var parentMenuitem = parent.querySelector('.menu-item');
                    if (parentMenuitem) {
                        parentMenuitem.classList.add('active');
                    }

                    var parentOfParent = getClosest(parent, '.parent-parent-menu-item');
                    if (parentOfParent) {
                        parentOfParent.classList.add('active');
                    }
                } else {
                    var parentOfParent = getClosest(matchingMenuItem, '.parent-parent-menu-item');
                    if (parentOfParent) {
                        parentOfParent.classList.add('active');
                    }
                }
            }
        }
    }

    const getClosest = (elem, selector) => {

        // Element.matches() polyfill
        if (!Element.prototype.matches) {
            Element.prototype.matches =
                Element.prototype.matchesSelector ||
                Element.prototype.mozMatchesSelector ||
                Element.prototype.msMatchesSelector ||
                Element.prototype.oMatchesSelector ||
                Element.prototype.webkitMatchesSelector ||
                function (s) {
                    var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                        i = matches.length;
                    while (--i >= 0 && matches.item(i) !== this) { }
                    return i > -1;
                };
        }

        // Get the closest matching element
        for (; elem && elem !== document; elem = elem.parentNode) {
            if (elem.matches(selector)) return elem;
        }
        return null;

    };
  return (
    <>
     <header id="topnav" className={`${navbarTop ? "nav-sticky" :""} ${navClass}`}>
            <div className="container">
                {logoLight === true ? 
                <Link className="logo" href="/">
                    <span className="logo-light-mode">
                        <Image src="/images/logo-dark.png"  width={118} height={28} className="l-dark" alt=""/>
                        <Image src="/images/logo-light.png" width={118} height={28}  className="l-light" alt=""/>
                    </span>
                    <Image src="/images/logo-light.png" width={118} height={28}  className="logo-dark-mode" alt=""/>
                </Link>:

                <Link className="logo" href="/">
                    <Image src="/images/logo-dark.png"  width={118} height={28} className="logo-light-mode" alt=""/>
                    <Image src="/images/logo-light.png" width={118} height={28}  className="logo-dark-mode" alt=""/>
                </Link>
                }

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
                {smallButton === false ? 
                    <ul className="buy-button list-inline mb-0">
                        <li className="list-inline-item ps-1 mb-0">
                            <Link href="https://1.envato.market/fronter-next" target="_blank">
                                <div className="btn btn-icon btn-pills btn-primary d-sm-none d-inline-flex"><FiShoppingCart/></div>
                                <div className="btn btn-primary d-none d-sm-block">Download Now</div>
                            </Link>
                        </li>
                    </ul>:

                <ul className="buy-button list-inline mb-0">
                    <li className="list-inline-item ps-1 mb-0">
                        <Link href="https://1.envato.market/fronter-next" target="_blank">
                            <div className="btn btn-icon btn-pills btn-primary d-sm-none d-inline-flex"><FiShoppingCart/></div>
                            <div className="btn btn-pills btn-primary d-none d-sm-block"><FiShoppingCart/> Buy Now</div>
                        </Link>
                    </li>
                </ul>
                }
        
                <div id="navigation" style={{ display: isMenu ? 'block' : 'none' }}>
                    <ul className={manuClass}>
                        <li><Link href="/" className="sub-menu-item">Home</Link></li>
                        <li className="has-submenu parent-parent-menu-item">
                            <Link href="#">Landing</Link><span className="menu-arrow"></span>
                            <ul className="submenu megamenu">
                                <li>
                                    <ul>
                                        <li>
                                            <Link href="/index-business" className="sub-menu-item">
                                                <div className="text-lg-center">
                                                    <span className="d-none d-lg-block"><Image src="/images/demos/business.png" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="mt-lg-2 d-block">Business</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/index-digital-agency" className="sub-menu-item">
                                                <div className="text-lg-center">
                                                    <span className="d-none d-lg-block"><Image src="/images/demos/digital-agency.png" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="mt-lg-2 d-block">Digital Agency</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/index-startup" className="sub-menu-item">
                                                <div className="text-lg-center">
                                                    <span className="d-none d-lg-block"><Image src="/images/demos/startup.png" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="mt-lg-2 d-block">Startups</span>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        <li>
                                            <Link href="/index-saas" className="sub-menu-item">
                                                <div className="text-lg-center">
                                                    <span className="d-none d-lg-block"><Image src="/images/demos/saas.png" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="mt-lg-2 d-block">Saas</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/index-marketing" className="sub-menu-item">
                                                <div className="text-lg-center">
                                                    <span className="d-none d-lg-block"><Image src="/images/demos/marketing.png" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="mt-lg-2 d-block">Marketing</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/index-cryptocurrency" className="sub-menu-item">
                                                <div className="text-lg-center">
                                                    <span className="d-none d-lg-block"><Image src="/images/demos/crypto.png" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="mt-lg-2 d-block">Cryptocurrency</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/index-co-working" className="sub-menu-item">
                                                <div className="text-lg-center">
                                                    <span className="d-none d-lg-block"><Image src="/images/demos/cowork.png" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="mt-lg-2 d-block">Co-Working </span>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        <li>
                                            <Link href="/index-gym" className="sub-menu-item">
                                                <div className="text-lg-center">
                                                    <span className="d-none d-lg-block"><Image src="/images/demos/gym.png" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="mt-lg-2 d-block">Gym</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/index-restaurant" className="sub-menu-item">
                                                <div className="text-lg-center">
                                                    <span className="d-none d-lg-block"><Image src="/images/demos/restaurant.png" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="mt-lg-2 d-block">Restaurant</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/index-job" className="sub-menu-item">
                                                <div className="text-lg-center">
                                                    <span className="d-none d-lg-block"><Image src="/images/demos/job.png" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="mt-lg-2 d-block"> Job <span className="badge bg-warning rounded-lg">Both</span></span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/index-blog" className="sub-menu-item">
                                                <div className="text-lg-center">
                                                    <span className="d-none d-lg-block"><Image src="/images/demos/blog.png" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="mt-lg-2 d-block"> Minimal Blog <span className="badge bg-success rounded-lg">Multi</span></span>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        <li>
                                            <Link href="/index-personal" className="sub-menu-item">
                                                <div className="text-lg-center">
                                                    <span className="d-none d-lg-block"><Image src="/images/demos/personal.png" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="mt-lg-2 d-block">Personal</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/index-portfolio" className="sub-menu-item">
                                                <div className="text-lg-center">
                                                    <span className="d-none d-lg-block"><Image src="/images/demos/portfolio.png" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="mt-lg-2 d-block">Portfolio</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/index-portfolio-agency" className="sub-menu-item">
                                                <div className="text-lg-center">
                                                    <span className="d-none d-lg-block"><Image src="/images/demos/portfolio-agency.png" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="mt-lg-2 d-block">Portfolio Agency</span>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                
                                <li>
                                    <ul>
                                        <li>
                                            <Link href="/index-studio" className="sub-menu-item">
                                                <div className="text-lg-center">
                                                    <span className="d-none d-lg-block"><Image src="/images/demos/studio.png" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="mt-lg-2 d-block">Studio</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/index-multi-business" className="sub-menu-item">
                                                <div className="text-lg-center">
                                                    <span className="d-none d-lg-block"><Image src="/images/demos/business.png" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="mt-lg-2 d-block">Business <span className="badge bg-success rounded-lg">Multi</span></span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/index-photography" className="sub-menu-item">
                                                <div className="text-lg-center">
                                                    <span className="d-none d-lg-block"><Image src="/images/demos/photography.png" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="mt-lg-2 d-block">Photography <span className="badge bg-success rounded-lg">Multi</span></span>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>   
                            </ul>
                        </li>

                        <li className="has-submenu parent-parent-menu-item">
                            <Link href="#">Pages</Link><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li><Link href="/page-aboutus" className="sub-menu-item"> About Us</Link></li>
                                <li><Link href="/page-services" className="sub-menu-item">Services</Link></li>
                                <li><Link href="/page-service-detail" className="sub-menu-item">Service Detail</Link></li>
                                <li><Link href="/page-team" className="sub-menu-item"> Team</Link></li>
                                <li><Link href="/page-team-detail" className="sub-menu-item"> Team Detail</Link></li>
                                <li><Link href="/page-pricing" className="sub-menu-item">Pricing</Link></li>
                                <li><Link href="/page-faqs" className="sub-menu-item">FAQs</Link></li>

                                <li className="has-submenu parent-menu-item"><Link href="#"> Blog </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link href="/blog-grid" className="sub-menu-item">Blog Grid</Link></li>
                                        <li><Link href="/blog-grid-sidebar" className="sub-menu-item">Blog with Sidebar</Link></li>

                                        <li className="has-submenu child-menu-item"><Link href="#"> Blog Posts </Link><span className="submenu-arrow"></span>
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
                                    </ul>  
                                </li>
                                
                                <li className="has-submenu parent-menu-item"><Link href="#"> Auth Pages </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link href="/auth-login" className="sub-menu-item">Login</Link></li>
                                        <li><Link href="/auth-signup" className="sub-menu-item">Signup</Link></li>
                                        <li><Link href="/auth-reset-password" className="sub-menu-item">Reset Password</Link></li>
                                    </ul>  
                                </li>

                                <li className="has-submenu parent-menu-item"><Link href="#"> Special</Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link href="/page-comingsoon" className="sub-menu-item">Coming Soon</Link></li>
                                        <li><Link href="/page-maintenance" className="sub-menu-item">Maintenance</Link></li>
                                        <li><Link href="/page-error" className="sub-menu-item">Error</Link></li>
                                    </ul>
                                </li>
                                <li className="has-submenu parent-menu-item"><Link href="#"> Contact </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link href="/page-contact-one" className="sub-menu-item">Contact One</Link></li>
                                        <li><Link href="/page-contact-two" className="sub-menu-item">Contact Two</Link></li>
                                    </ul>  
                                </li>
                                {/* <li className="has-submenu parent-menu-item"><Link> Multi Level Menu</Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link  className="sub-menu-item">Level 1.0</Link></li>
                                        <li className="has-submenu parent-menu-item"><Link > Level 2.0 </Link><span className="submenu-arrow"></span>
                                            <ul className="submenu">
                                                <li><Link  className="sub-menu-item">Level 2.1</Link></li>
                                                <li><Link  className="sub-menu-item">Level 2.2</Link></li>
                                            </ul>  
                                        </li>
                                    </ul>  
                                </li> */}
                            </ul>
                        </li>

                        <li className="has-submenu parent-parent-menu-item">
                            <Link href="#">Portfolio</Link><span className="menu-arrow"></span>
                            <ul className="submenu megamenu">
                                <li>
                                    <ul>
                                        <li className="megamenu-head">Classic Portfolio</li>
                                        <li><Link href="/portfolio-classic-two" className="sub-menu-item">Two Column</Link></li>
                                        <li><Link href="/portfolio-classic-three" className="sub-menu-item">Three Column</Link></li>
                                        <li><Link href="/portfolio-classic-four" className="sub-menu-item">Four Column</Link></li>
                                        <li><Link href="/portfolio-classic-five" className="sub-menu-item">Five Column</Link></li>
                                        <li><Link href="/portfolio-classic-six" className="sub-menu-item">Six Column</Link></li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        <li className="megamenu-head">Modern Portfolio</li>
                                        <li><Link href="/portfolio-modern-two" className="sub-menu-item">Two Column</Link></li>
                                        <li><Link href="/portfolio-modern-three" className="sub-menu-item">Three Column</Link></li>
                                        <li><Link href="/portfolio-modern-four" className="sub-menu-item">Four Column</Link></li>
                                        <li><Link href="/portfolio-modern-five" className="sub-menu-item">Five Column</Link></li>
                                        <li><Link href="/portfolio-modern-six" className="sub-menu-item">Six Column</Link></li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        <li className="megamenu-head">Grid Portfolio</li>
                                        <li><Link href="/portfolio-grid-two" className="sub-menu-item">Two Column</Link></li>
                                        <li><Link href="/portfolio-grid-three" className="sub-menu-item">Three Column</Link></li>
                                        <li><Link href="/portfolio-grid-four" className="sub-menu-item">Four Column</Link></li>
                                        <li><Link href="/portfolio-grid-five" className="sub-menu-item">Five Column</Link></li>
                                        <li><Link href="/portfolio-grid-six" className="sub-menu-item">Six Column</Link></li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        <li className="megamenu-head">Masonry Portfolio</li>
                                        <li><Link href="/portfolio-classic-masonry" className="sub-menu-item">Classic Masonry</Link></li>
                                        <li><Link href="/portfolio-modern-masonry" className="sub-menu-item">Modern Masonry</Link></li>
                                        <li><Link href="/portfolio-grid-masonry" className="sub-menu-item">Grid Masonry</Link></li>
                                        <li><Link href="/portfolio-project-masonry" className="sub-menu-item">Project masonry</Link></li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        <li className="megamenu-head">Portfolio Detail</li>
                                        <li><Link href="/portfolio-detail-one" className="sub-menu-item">Portfolio One</Link></li>
                                        <li><Link href="/portfolio-detail-two" className="sub-menu-item">Portfolio Two</Link></li>
                                        <li><Link href="/portfolio-detail-three" className="sub-menu-item">Portfolio Three</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li><Link href="/page-contact-one" className="sub-menu-item">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    </>
  )
}

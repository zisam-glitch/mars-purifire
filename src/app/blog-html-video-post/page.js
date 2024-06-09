import Link from "next/link";
import Image from "next/image";

import { blogData,commentsData } from "../data/data";

import Navbar from "../componants/navbar/navbar";
import BlogSidebar from "../componants/blogSidebar";
import Newsletters from "../componants/newsletters";
import FooterFour from "../componants/footer/footerFour";
import ScrollTop from "../componants/scrollTop";
import ParallaxImage from "../componants/Parallax";

import {FiHeart,FaRegComment,AiOutlineCalendar,MdArrowForward,MdOutlineArrowBack,FiHome} from "../assets/icons/vander"

export default function BlogHtmlVideoPost(){
  
    return(
        <>
        <Navbar navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light" logoLight={true}/>

        <section className="position-relative overflow-hidden w-100 " >
            <ParallaxImage bgImage='/images/bg/01.jpg'/>
            <div className="bg-overlay bg-gradient-overlay-2"></div>
            <div className="bg-half-170 w-100">
                <div className="container">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-12">
                            <div className="title-heading text-center">
                                <span className="badge bg-primary">HTML Video</span>
                                <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark mt-4">Garden from Mauro Chiarello</h5>
                                
                                <ul className="list-inline text-center mb-0">
                                    <li className="list-inline-item mx-4 mt-4">
                                        <span className="text-white-50 d-block">Author</span>
                                        <Link href="#" className="text-white title-dark">Christina Gonzalez</Link>
                                    </li>

                                    <li className="list-inline-item mx-4 mt-4">
                                        <span className="text-white-50 d-block">Date</span>
                                        <span className="text-white title-dark">19th June 2023</span>
                                    </li>

                                    <li className="list-inline-item mx-4 mt-4">
                                        <span className="text-white-50 d-block">Read Time</span>
                                        <span className="text-white title-dark">8 min read</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="position-middle-bottom">
                        <nav aria-label="breadcrumb" className="d-block">
                            <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                                <li className="breadcrumb-item"><Link href="/">Fronter</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Blog</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
        <div className="position-relative">
            <div className="shape overflow-hidden text-white">
                <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-7">
                        <div className="card border-0 shadow rounded overflow-hidden">
                            <video style={{maxHeight:"415px", maxWidth:"736px"}} className="rounded shadow" controls>
                                <source src='/images/blog/video.mp4' type="video/mp4"/>
                            </video>

                            <div className="card-body">
                                <p className="text-muted">The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to proper Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewers attention from the layout.</p>
                                <p className="text-muted">Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. If the fill text is intended to illustrate the characteristics of different typefaces, it sometimes makes sense to select texts containing the various letters and symbols specific to the output language.</p>
                            
                                <blockquote className="text-center mx-auto blockquote"><i className="mdi mdi-format-quote-open mdi-48px text-muted opacity-2 d-block"></i> The man who comes back through the door in the wall will never be quite the same as the man who went out. <small className="d-block text-muted mt-2">- Fronter Template</small></blockquote>
                            
                                <p className="text-muted">There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories.</p>
                            
                                <Link href="#" className="badge badge-link bg-primary me-1">Minimal</Link>
                                <Link href="#" className="badge badge-link bg-primary me-1">Interior</Link>
                                <Link href="#" className="badge badge-link bg-primary me-1">Furniture</Link>
                            </div>
                        </div>

                        <div className="card shadow rounded border-0 mt-4">
                            <div className="card-body">
                                <h5 className="card-title mb-0">Comments :</h5>

                                <ul className="media-list list-unstyled mb-0">
                                    {commentsData.map((item,index)=>{
                                        return(
                                        <li className="mt-4" key={index}>
                                            <div className="d-flex justify-content-between" >
                                                <div className="d-flex align-items-center">
                                                    <Link className="pe-3" href="#">
                                                        <Image src={item.image} width={45} height={45} className="img-fluid avatar avatar-md-sm rounded-circle shadow" alt="img"/>
                                                    </Link>
                                                    <div className="commentor-detail">
                                                        <h6 className="mb-0"><Link href="#" className="text-dark media-heading">{item.name}</Link></h6>
                                                        <small className="text-muted">{item.date}</small>
                                                    </div>
                                                </div>
                                                <Link href="#" className="text-muted"><i className="mdi mdi-reply"></i> Reply</Link>
                                            </div>
                                            <div className="mt-3">
                                                <p className="text-muted fst-italic p-3 bg-light rounded">{item.desc}</p>
                                            </div>
                                        </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>

                        <div className="card shadow rounded mt-4">
                            <div className="card-body">
                                <h5 className="card-title mb-0">Leave A Comment :</h5>

                                <form className="mt-4">
                                    <div className="row pt-3">
                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <label className="form-label">Your Comment</label>
                                                <textarea id="message" placeholder="Your Comment" rows="5" name="message" className="form-control" required=""></textarea>
                                            </div>
                                        </div>
    
                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label className="form-label">Name <span className="text-danger">*</span></label>
                                                <input id="name" name="name" type="text" placeholder="Name" className="form-control" required=""/>
                                            </div>
                                        </div>
    
                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                                <input id="email" type="email" placeholder="Email" name="email" className="form-control" required=""/>
                                            </div>
                                        </div>
    
                                        <div className="col-md-12">
                                            <div className="send d-grid">
                                                <button type="submit" className="btn btn-primary">Send Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="card shadow rounded mt-4">
                            <div className="card-body">
                                <h5 className="card-title mb-0">Related News :</h5>

                                <div className="row mt-2">
                                    {blogData.slice(0,2).map((item,index)=>{
                                        return(
                                            <div className="col-lg-6 mt-4 pt-2" key={index}>
                                                <div className="card blog blog-primary shadow rounded overflow-hidden border-0">
                                                    <div className="card-img image position-relative overflow-hidden">
                                                        <div className="position-relative overflow-hidden">
                                                            <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                                            <div className="card-overlay"></div>
                                                        </div>
                        
                                                        <div className="blog-tag">
                                                            <Link href={`/blog-standard-post/${item.id}`} className="badge bg-light text-dark">{item.tag}</Link>
                                                        </div>
                        
                                                        <div className="read-more">
                                                            <Link href={`/blog-standard-post/${item.id}`} className="text-white title-dark-50">Read More <MdArrowForward className="align-middle ms-1"/></Link>
                                                        </div>
                                                    </div>
                        
                                                    <div className="card-body content p-0">
                                                        <div className="p-4">
                                                            <Link href={`/blog-standard-post/${item.id}`} className="h5 title text-dark d-block mb-0">Defining Your Business Target Audience</Link>
                                                            <p className="text-muted mt-2 mb-0">The most well-known dummy text is the Lorem Ipsum, in the 16th century.</p>
                                                        </div>
                        
                                                        <div className="post-meta d-flex justify-content-between p-4 border-top">
                                                            <ul className="list-unstyled mb-0">
                                                                <li className="list-inline-item me-2 mb-0"><Link href="#" className="text-muted like"><FiHeart className="me-1 align-middle"/>33</Link></li>
                                                                <li className="list-inline-item"><Link href="#" className="text-muted comments"><FaRegComment className="me-1 align-middle"/>08</Link></li>
                                                            </ul>
                                                            <Link href="#" className="text-muted readmore"><AiOutlineCalendar className="me-1 align-middle"/>  20th Dec 2021</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}

                                    <div className="col-12 mt-5">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <Link href="blog-standard-post" className="text-dark align-items-center">
                                                <span className="pro-icons"><MdOutlineArrowBack className="align-middle me-1"/></span>
                                                <span className="text-muted d-none d-lg-inline-block">Web Development</span>
                                                <Image src='/images/blog/6.jpg' width={66} height={44} className="avatar avatar-small rounded shadow ms-2" style={{height:"auto"}} alt=""/>
                                            </Link>
        
                                            <Link href="/" className="btn btn-lg btn-pills btn-icon btn-soft-primary"><FiHome className="icon"/></Link>
                                            
                                            <Link href="/blog-standard-post" className="text-dark align-items-center">
                                                <Image src='/images/blog/6.jpg' width={66} height={44} className="avatar avatar-small rounded shadow me-2" style={{height:"auto"}} alt=""/>
                                                <span className="text-muted d-none d-lg-inline-block">Web Designer</span>
                                                <span className="pro-icons"><MdArrowForward className="align-middle ms-1"/></span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                   <BlogSidebar/>
                   
                </div>
            </div>

           <Newsletters/>
        </section>
        <FooterFour/>
        <ScrollTop/>
        </>
    )
}
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { recentPost } from "../data/data";
export default function BlogSidebar(){
    
    return(
        <div className="col-lg-4 col-md-6 mt-4 pt-2">
            <div className="card bg-white p-4 rounded shadow sticky-bar">
                <div className="widget">
                    <h6 className="widget-title font-weight-bold pt-2 pb-2 bg-light rounded text-center">Search</h6>
                    <div id="search2" className="widget-search mt-4 mb-0">
                        <form role="search" method="get" id="searchform2" className="searchform">
                            <div>
                                <input type="text" className="border rounded" name="s" id="s2" placeholder="Search Keywords..."/>
                                <input type="submit" id="searchsubmit2" value="Search"/>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="widget mt-4 pt-2">
                    <h6 className="widget-title font-weight-bold pt-2 pb-2 bg-light rounded text-center">Recent Post</h6>
                    <div className="mt-4">
                        {recentPost.map((item,index) =>{
                            return(
                                <div className="d-flex align-items-center mt-3" key={index}>
                                    <Image src={item.image} width={94} height={64} className="avatar avatar-small rounded" style={{width:'auto'}} alt=""/>
                                    <div className="flex-1 ms-3">
                                        <Link href="/blog-standard-post" className="d-block widget-post-title text-dark">{item.title}</Link>
                                        <span className="text-muted">{item.date}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="widget mt-4 pt-2 text-center">
                    <h6 className="widget-title font-weight-bold pt-2 pb-2 bg-light rounded">Tags Cloud</h6>
                    <div className="tagcloud mt-4">
                        <Link href="#" className="rounded">Business</Link>
                        <Link href="#" className="rounded">Finance</Link>
                        <Link href="#" className="rounded">Marketing</Link>
                        <Link href="#" className="rounded">Fashion</Link>
                        <Link href="#" className="rounded">Bride</Link>
                        <Link href="#" className="rounded">Lifestyle</Link>
                        <Link href="#" className="rounded">Travel</Link>
                        <Link href="#" className="rounded">Beauty</Link>
                        <Link href="#" className="rounded">Video</Link>
                        <Link href="#" className="rounded">Audio</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
import React from "react"
import Link from "next/link"
import Image from "next/image"


import JobsNavbar from "../componants/navbar/jobsNavbar"
import Mobileapp from "../componants/mobileApp"
import FooterFive from "../componants/footer/footerFive"
import ScrollTop from "../componants/scrollTop"
import ParallaxImage from "../componants/Parallax"
import JobForm from "../componants/job/form"

import {AiOutlineDollarCircle,AiOutlineClockCircle} from "../assets/icons/vander"

import { jobData } from "../data/data"

export default function Jobs(){
    return(
        <>
        <JobsNavbar/>
        <section className=" d-table w-100  position-relative ">
            <ParallaxImage bgImage='/images/bg/job.jpg'/>
            <div className="bg-overlay bg-gradient-overlay-2"></div>
            <div className="bg-half-170">
                <div className="container">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-12">
                            <div className="title-heading text-center">
                                <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">Job Listings</h5>
                                <nav aria-label="breadcrumb" className="d-block mt-3">
                                    <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                                        <li className="breadcrumb-item"><Link href="/">Fronter</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Jobs</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
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
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="features-absolute">
                            <div className="row justify-content-center" id="reserve-form">
                                <div className="col-lg-10 mt-lg-5">
                                    <div className="card feature-top border-0 shadow rounded p-3">
                                       <JobForm/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row g-4 mt-4 mt-lg-0">
                    {jobData.map((item,index) =>{
                        return(
                            <div className="col-lg-4 col-md-6" key={index}>
                                <div className="card features feature-primary rounded shadow">
                                    <div className="card-body content">
                                        <Link href={`/job-detail/${item.id}`} className="h5 mb-1 d-block title text-dark">{item.title}</Link>
                                        <p className="text-muted"><AiOutlineClockCircle className="me-1"/>{item.posted}</p>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <span className="badge rounded bg-soft">{item.jobTime}</span>
                                            <div>
                                                <AiOutlineDollarCircle className="link me-1"/>
                                                <span className="text-muted">{item.salary}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center p-4 border-top">
                                        <Image src={item.image} width={45} height={45} className="avatar avatar-md-sm shadow-md rounded-md p-2 bg-white" alt=""/>

                                        <div className="ms-3">
                                            <h6 className="mb-0">{item.name}</h6>
                                            <small className="text-muted">{item.location}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <Mobileapp/>
        </section>
        <FooterFive/>
        <ScrollTop/>
        </>
    )
}
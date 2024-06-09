'use client'
import React,{useEffect, useState} from "react";
import Link from "next/link"
import Image from "next/image";

import {BiRightArrowCircle,FiVideo} from '../../assets/icons/vander'

import ModalVideo from 'react-modal-video';
import "../../../../node_modules/react-modal-video/scss/modal-video.scss"

export default function TokenSale(){
    let [isOpen, setOpen] = useState(false);
    let [days, setDays] = useState();
    let [hours, setHours] = useState();
    let [minutes, setMinutes] = useState();
    let [seconds, setSeconds] = useState();

    let deadline = "December, 31, 2024";
  
    let getTime = () => {
      let time = Date.parse(deadline) - Date.now();
  
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    };
  
    useEffect(() => {
      let interval = setInterval(() => getTime(deadline), 1000);
  
      return () => clearInterval(interval);
    }, []);
    return(
        <>
        <div className="row align-items-center">
            <div className="col-lg-5 col-md-7 col-12 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="card border-0 shadow rounded p-4 bg-light overflow-hidden">
                    <Image src='/images/logo-icon-80.png' width={90} height={80} className="d-block mx-auto" alt=""/>
                    <h5 className="text-center mt-3">Fronter Token Sale</h5>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div id="token-sale">
                                <ul className="count-down list-unstyled m-0">
                                    <li id="days" className="count-number fw-semibold mb-0 list-inline-item px-3 me-0">{days}<p className='count-head'>Days</p></li>
                                    <li id="hours" className="count-number fw-semibold mb-0 list-inline-item px-3 me-0">{hours}<p className='count-head'>Hours</p></li>
                                    <li id="mins" className="count-number fw-semibold mb-0 list-inline-item px-3 me-0">{minutes}<p className='count-head'>Minutes</p></li>
                                    <li id="secs" className="count-number fw-semibold mb-0 list-inline-item px-3 me-0">{seconds}<p className='count-head'>Seconds</p></li>
                                    <li id="end" className="h1"></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <p className="text-muted text-center">Token sale ends <span className="text-dark fw-semibold">August 25th 2022</span></p>

                    <div className="progress-box mt-4">
                        <div className="progress rounded-md" style={{height:'16px'}}>
                            <div className="progress-bar position-relative bg-gradient-primary rounded-md" style={{width:'60%'}}>
                                <div className="progress-value d-block text-muted">Funded 60% = $ 600000</div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                            <h6 className="title text-muted text-start mb-0">$ 1000</h6>
                            <h6 className="title text-muted text-end mb-0">$ 1000000</h6>
                        </div>
                    </div>

                    <ul className="list-unstyled mb-0 mt-4">
                        <li className="mb-0"><BiRightArrowCircle className=" text-primary align-middle fs-5 me-1"/><span className="text-muted">Soft Cap:</span> &nbsp;10000 USD</li>
                        <li className="mb-0"><BiRightArrowCircle className=" text-primary align-middle fs-5 me-1"/><span className="text-muted">Min. transaction Amount:</span> &nbsp;1000 USD</li>
                        <li className="mb-0"><BiRightArrowCircle className=" text-primary align-middle fs-5 me-1"/><span className="text-muted">Target:</span> &nbsp;900000 USD</li>
                    </ul>

                    <div className="mt-4">
                        <Link href="#" className="btn btn-primary w-100">Join Now</Link>
                    </div>
                </div>
            </div>

            <div className="col-lg-6 offset-lg-1 col-md-5 col-12 order-1 order-md-2">
                <div className="section-title">
                    <span className="badge bg-soft-primary rounded-md">Sale tokens</span>
                    <h4 className="title mt-3 mb-4">The token sale is live!</h4>
                    <p className="text-muted para-desc mx-auto">With Fronter Trade, you can be sure your trading skills are matched with excellent service.</p>
                    <p className="text-muted para-desc mx-auto mb-0">Fronter Institutional Markets is a full-stack crypto services platform that works with crypto-native businesses and institutional clients on lending, trading, and custody solutions tailored to your needs.</p>
                    <div className="mt-4">
                        <Link href="#" className="btn btn-primary">Token sale</Link>
                        <Link href="#!" scroll={false} onClick={() => setOpen(true)} className="btn btn-icon btn-pills btn-primary m-1 lightbox"><FiVideo className="icons"/></Link><small className="fw-semibold align-middle ms-1">Watch Now</small>
                    </div>
                    <ModalVideo
                    channel="youtube"
                    youtube={{ mute: 0, autoplay: 0 }}
                    isOpen={isOpen}
                    videoId="yba7hPeTSjk"
                    onClose={() => setOpen(false)} 
                    />
                </div>
            </div>
        </div>
        </>
    )
}
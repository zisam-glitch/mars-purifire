'use client'
import React,{useState} from "react";
import Link from "next/link";

import ModalVideo from 'react-modal-video';
import "../../../../node_modules/react-modal-video/scss/modal-video.scss"

import {FiPlay} from '../../assets/icons/vander'

export default function Modal(){
    let [isOpen, setOpen] = useState(false);
    return(
        <>
        <div className="title-heading margin-top-100">
            <h1 className="heading text-white title-dark mb-3">Build your project with Fronter Saas</h1>
            <p className="para-desc mx-auto text-white-50">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap html page.</p>
            

            <Link href="#!" scroll={false} onClick={() => setOpen(true)} className="play-btn border border-light mt-4 lightbox">
                <FiPlay className="fea icon-ex-md text-white title-dark"/>
            </Link>
        </div>
        <ModalVideo
            channel="youtube"
            youtube={{ mute: 0, autoplay: 0 }}
            isOpen={isOpen}
            videoId="yba7hPeTSjk"
            onClose={() => setOpen(false)} 
        />
        </>
    )
}
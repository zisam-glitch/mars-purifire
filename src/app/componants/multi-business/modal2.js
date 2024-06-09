'use client'
import React,{useState} from "react";
import Link from "next/link";

import ModalVideo from 'react-modal-video';
import "../../../../node_modules/react-modal-video/scss/modal-video.scss"

import {FiPlay} from '../../assets/icons/vander'

export default function Modal2(){
    let [isOpen, setOpen] = useState(false);
    return(
        <>
        <div className="section-title">
            <h4 className="title title-dark text-white mb-4">Stop leaving money on the table.</h4>
            <p className="text-light para-dark para-desc mx-auto">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
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
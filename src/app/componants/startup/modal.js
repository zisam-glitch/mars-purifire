'use client'
import React,{useState} from "react";
import Link from "next/link";

import ModalVideo from 'react-modal-video';
import "../../../../node_modules/react-modal-video/scss/modal-video.scss"

import {FiVideo} from '../../assets/icons/vander'

export default function Modal(){
    let [isOpen, setOpen] = useState(false);
    return(
        <>
            <div className="mt-4">
                <Link href="#" className="btn btn-primary">Learn More</Link>
                <Link href="#!" scroll={false} onClick={() => setOpen(true)} className="btn btn-icon btn-pills btn-primary lightbox ms-2"><FiVideo className="fea icon-sm"/></Link><span className="fw-normal align-middle ms-2">Watch Now</span>
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
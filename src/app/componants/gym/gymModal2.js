"use client"
import React,{useState} from "react";
import Link from "next/link";

import ModalVideo from 'react-modal-video';
import "../../../../node_modules/react-modal-video/scss/modal-video.scss"

export default function GynModal2(){
    let [isOpen, setOpen] = useState(false);
    return(
        <>
        <div className="position-absolute top-50 start-50 translate-middle">
            <Link href="#" onClick={() => setOpen(true)} className="btn btn-pills btn-icon btn-primary lightbox">
                <i className="mdi mdi-play"></i>
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
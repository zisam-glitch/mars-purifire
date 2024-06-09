"use client"
import React,{useState} from "react";
import Link from "next/link";

import ModalVideo from 'react-modal-video';
import "../../../../node_modules/react-modal-video/scss/modal-video.scss"

export default function GynModal1(){
    let [isOpen, setOpen] = useState(false);
    return(
        <>
        <div className="mt-5">
            <Link href="#" onClick={() => setOpen(true)} className="btn btn-pills btn-primary align-middle lightbox p-2 ps-4">3:07 Min video <span className="btn btn-icon btn-pills btn-success ms-2"><i className="mdi mdi-play"></i></span></Link>
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
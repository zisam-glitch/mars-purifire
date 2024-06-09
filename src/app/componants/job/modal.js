'use client'
import React,{useState} from "react";
import Link from "next/link"

import ModalVideo from 'react-modal-video';
import "../../../../node_modules/react-modal-video/scss/modal-video.scss"

export default function Modal(){
    let [isOpen, setOpen] = useState(false);
    return(
        <>
        <div className="position-absolute top-50 start-50 translate-middle">
            <Link href="#!" scroll={false} onClick={() => setOpen(true)} className="btn btn-icon btn-pills btn-primary lightbox">
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
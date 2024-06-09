"use client"
import Image from 'next/image'
import Link from 'next/link';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default function About(){
    return(
    <div className="mt-5 d-md-block d-none position-relative" style={{zIndex: "1"}}>
        <div className="mt-5 d-md-block d-none position-relative" style={{zIndex: "1"}}>
            <OverlayTrigger placement="bottom" overlay={<Tooltip>Next Js</Tooltip>}>
                <Link href="#"><Image src='/images/live/next.png' width={65} height={65} className="img-fluid avatar avatar-small my-2 my-sm-0 mx-2 p-2 bg-white rounded-circle shadow" alt=""/></Link>
            </OverlayTrigger>
            <OverlayTrigger placement="bottom" overlay={<Tooltip>React Js</Tooltip>}>
                <Link href="#"><Image src='/images/live/react.png' width={65} height={65} className="img-fluid avatar avatar-small my-2 my-sm-0 mx-2 p-2 bg-white rounded-circle shadow" alt=""/></Link>
            </OverlayTrigger>
            <OverlayTrigger placement="bottom" overlay={<Tooltip>Bootstrap 5</Tooltip>}>
                <Link href="#"><Image src='/images/live/bootstrap2.png' width={65} height={65} className="img-fluid avatar avatar-small my-2 my-sm-0 mx-2 p-2 bg-white rounded-circle shadow" alt=""/></Link>
            </OverlayTrigger>
            <OverlayTrigger placement="bottom" overlay={<Tooltip>SASS</Tooltip>}>
                <Link href="#"><Image src='/images/live/scss2.png' width={65} height={65} className="img-fluid avatar avatar-small my-2 my-sm-0 mx-2 p-2 bg-white rounded-circle shadow" alt=""/></Link>
            </OverlayTrigger>
            <OverlayTrigger placement="bottom" overlay={<Tooltip>CSS</Tooltip>}>
                <Link href="#"><Image src='/images/live/css2.png' width={65} height={65} className="img-fluid avatar avatar-small my-2 my-sm-0 mx-2 p-2 bg-white rounded-circle shadow" alt=""/></Link>
            </OverlayTrigger>
            <OverlayTrigger placement="bottom" overlay={<Tooltip>Javascript</Tooltip>}>
                <Link href="#"><Image src='/images/live/js.png' width={65} height={65} className="img-fluid avatar avatar-small my-2 my-sm-0 mx-2 p-2 bg-white rounded-circle shadow" alt=""/></Link>
            </OverlayTrigger>
        </div>
    </div>
    )
}
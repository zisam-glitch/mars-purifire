'use client'
import React,{useState} from "react";
import Link from "next/link"
import Modal from 'react-bootstrap/Modal';

import {BsTelephone} from "../../assets/icons/vander"

export default function GetInTuch(){
    let [show, setShow] = useState(false);

    let handleClose = () => setShow(false);
    let handleShow = () => setShow(true);
    return(
        <>
        <div className="row mt-md-5 pt-md-3 justify-content-center">
            <div className="col-12 text-center">
                <div className="section-title">
                    <h4 className="title mb-4">Have Question ? Get in touch!</h4>
                    <p className="text-muted para-desc mx-auto">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    <Link href="#" scroll={false} onClick={handleShow} className="btn btn-primary mt-4"><BsTelephone className="align-middle"/> Contact us</Link>
                </div>
            </div>
        </div>
        <Modal show={show} onHide={handleClose} centered={true}>
            <Modal.Header closeButton>
            <Modal.Title><h5 className="modal-title" id="exampleModalCenterTitle">Contact Us </h5></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <p id="error-msg" className="mb-0"></p>
                    <div id="simple-msg"></div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label fw-normal">Your Name <span className="text-danger">*</span></label>
                                <input name="name" id="name" type="text" className="form-control" placeholder="Name :"/>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label fw-normal">Your Email <span className="text-danger">*</span></label>
                                <input name="email" id="email" type="email" className="form-control" placeholder="Email :"/>
                            </div> 
                        </div>

                        <div className="col-12">
                            <div className="mb-3">
                                <label className="form-label fw-normal">Subject</label>
                                <input name="subject" id="subject" className="form-control" placeholder="subject :"/>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="mb-3">
                                <label className="form-label fw-normal">Comments <span className="text-danger">*</span></label>
                                <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Message :"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="d-grid">
                                <button type="submit" id="submit" name="send" className="btn btn-primary">Send Message</button>
                            </div>
                        </div>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
        </>
    )
}
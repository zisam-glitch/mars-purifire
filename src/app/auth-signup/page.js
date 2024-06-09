'ues client'
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Signup(){
    return(
        <>
        <section className="bg-home d-flex align-items-center" style={{backgroundImage:"url('/images/bg/07.jpg')"}}>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="form-signin p-4 bg-white rounded shadow-md">
                            <form>
                                <Link href="/"><Image src='/images/logo-icon-80.png' width={90} height={80} className="mb-4 d-block mx-auto" alt=""/></Link>
                                <h5 className="mb-3">Register your account</h5>
                            
                                <div className="form-floating mb-2">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="Harry"/>
                                    <label htmlFor="floatingInput">First Name</label>
                                </div>

                                <div className="form-floating mb-2">
                                    <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com"/>
                                    <label htmlFor="floatingEmail">Email Address</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>
                            
                                <div className="form-check mb-3">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label text-muted" htmlFor="flexCheckDefault">I Accept <Link href="#" className="text-primary">Terms And Condition</Link></label>
                                </div>
                
                                <button className="btn btn-primary w-100" type="submit">Register</button>

                                <div className="col-12 text-center mt-3">
                                    <span><span className="text-muted me-2">Already have an account ? </span> <Link href="/auth-login" className="text-dark fw-medium">Sign in</Link></span>
                                </div>

                                <p className="mb-0 text-muted mt-3 text-center">© {new Date().getFullYear()} Fronter.</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
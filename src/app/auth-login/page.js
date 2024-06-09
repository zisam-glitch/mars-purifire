import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Login(){
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
                                <h5 className="mb-3">Please sign in</h5>
                            
                                <div className="form-floating mb-2">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>
                            
                                <div className="d-flex justify-content-between">
                                    <div className="mb-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                            <label className="form-check-label text-muted" htmlFor="flexCheckDefault">Remember me</label>
                                        </div>
                                    </div>
                                    <span className="forgot-pass text-muted mb-0"><Link href="/auth-reset-password" className="text-muted fw-medium">Forgot password ?</Link></span>
                                </div>
                
                                <button className="btn btn-primary w-100" type="submit">Sign in</button>

                                <div className="col-12 text-center mt-3">
                                    <span><span className="text-muted me-2">Dont have an account ?</span> <Link href="/auth-signup" className="text-dark fw-medium">Sign Up</Link></span>
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
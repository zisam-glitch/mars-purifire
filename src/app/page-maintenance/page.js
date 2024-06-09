import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Timer from '../componants/timer'

export default function Maintenance(){
    return(
        <>
        <section className="bg-home d-flex align-items-center" style={{backgroundImage:"url('/images/bg/07.jpg')"}}>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 text-center">
                        <Link href='/'>
                            <Image src="/images/logo-light.png" width={118} height={28} alt=""/>
                        </Link>
                        <h1 className="text-white title-dark mt-4 mb-4">We are back soon...</h1>
                        <p className="text-white-50 para-desc mx-auto">Explore and learn more about everything from machine learning and global payments to scaling your team.</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 text-center">
                        <Timer/>
                    </div>
                </div>

                <div className="row mt-4 pt-2">
                    <div className="col-12 text-center">
                        <div className="subcribe-form">
                            <form action="index.html">
                                <input name="email" id="email" type="email" className="rounded-pill opacity-5" required="" placeholder="Your email :"/>
                                <button type="submit" className="btn btn-primary rounded-pill">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
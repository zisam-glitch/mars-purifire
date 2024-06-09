import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import BackSoon from '../componants/backSoon';

export default function Comingsoon(){
    return(
        <>
        <section className="bg-home d-flex align-items-center" style={{backgroundImage:"url('/images/bg/07.jpg')"}}>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 p-0">
                    <div className="d-flex flex-column min-vh-100 justify-content-center px-md-5 py-5 px-4">
                            <div className="text-center">
                                <Link href="/"><Image src="/images/logo-icon-48.png" width={54} height={48} alt=""/></Link>
                            </div>
                            <div className="title-heading text-center my-auto">
                                <h1 className="title-dark text-white mt-2 mb-4 coming-soon">We are coming soon...</h1>
                                <p className="text-white-50 para-desc para-dark mx-auto">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                            
                                <div id="countdown">
                                    <BackSoon/>
                                </div>
                            </div>
                            <div className="text-center">
                                <p className="mb-0 text-muted">© {new Date().getFullYear()} Fronter. Design & Develop with <i className="mdi mdi-heart text-danger"></i> by <Link href="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
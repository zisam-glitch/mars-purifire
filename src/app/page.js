import Image from 'next/image'
import Link from 'next/link';

import Navbar from './componants/navbar/navbar'
import Footer from './componants/footer/footer';
import ScrollTop from './componants/scrollTop';
import AppHeroText from './componants/app/appHeroText';
import About from './componants/app/about';

import {FiAirplay,PiBrowsersBold, FiEye, BsBootstrapFill, BiWater,FiMoon, TbIcons,BiCube, BsBezier2,BiLogoSass,PiSealCheckFill,FiSettings,SiPhp,BsFillFileEarmarkImageFill,FiCamera,FaGooglePlay,FiGitCommit,BsCode,MdUpdate,RiUserHeartFill,SiNextdotjs,BiLogoReact} from "./assets/icons/vander"

export default function Home() {
  let templateData =[
    {
        image:"/images/demos/business.png",
        title:"BUSINESS",
        link:'/index-business'
    },
    {
        image:"/images/demos/digital-agency.png",
        title:"DIGITAL AGENCY",
        link:'/index-digital-agency'
    },
    {
        image:"/images/demos/startup.png",
        title:"STARTUP",
        link:"/index-startup"
    },
    {
        image:"/images/demos/saas.png",
        title:"SAAS",
        link:"/index-saas"
    },
    {
        image:"/images/demos/marketing.png",
        title:"MARKETING",
        link:"/index-marketing"
    },
    {
        image:"/images/demos/crypto.png",
        title:"CRYPTOCURRENCY",
        link:"/index-cryptocurrency"
    },
    {
        image:"/images/demos/gym.png",
        title:"GYM & FITNESS",
        link:"/index-gym"
    },
    {
        image: "/images/demos/restaurant.png",
        title:"RESTAURANT",
        link:"/index-restaurant"
    },
    {
        image:"/images/demos/job.png",
        title:"JOB & CAREERS",
        link:"/index-job",
        tag1:"Onepage & Multi-use"
    },
    {
        image:"/images/demos/personal.png",
        title:"PERSONAL",
        link:"/index-personal"
    },
    {
        image:"/images/demos/portfolio.png",
        title:"PORTFOLIO",
        link:"/index-portfolio"
    },
    {
        image:"/images/demos/portfolio-agency.png",
        title:"PORTFOLIO AGENCY",
        link:"/index-portfolio-agency"
    },
    {
        image:"/images/demos/studio.png",
        title:"STUDIO",
        link:"/index-studio"
    },
    {
        image:"/images/demos/business.png",
        title:"BUSINESS",
        link:"/index-multi-business",
        tag1:"MULTI-USE"
    },
    {
        image:"/images/demos/photography.png",
        title:"PHOTOGRAPHY",
        link:"/index-photography",
        tag1:"MULTI-USE"
    },
    {
        image:"/images/demos/cowork.png",
        title:"CO-WORKING SPACE",
        link:"/index-co-working",
    },
    {
        image:"/images/demos/blog.png",
        title:"CMINIMAL BLOG",
        link:"/index-blog",
        tag1:"MULTI-USE",
    },
]
let featuresData = [
    {
        icon:SiNextdotjs,
        title:'Next Js 13.5.5'
    },
    {
        icon:SiNextdotjs,BiLogoReact,
        title:'React Js 18.2.0'
    },
    {
        icon:BsBootstrapFill,
        title:'Bootstrap 5.3.2'
    },
    {
        icon:BiLogoSass,
        title:'Built With SCSS'
    },
    {
        icon:FiAirplay,
        title:'Fully Responsive'
    },
    {
        icon:PiBrowsersBold,
        title:'Browser Compatibility'
    },
    {
        icon:FiEye,
        title:'Retina Ready'
    },
    {
        icon:BiWater,
        title:'Parallax Demos'
    },
    {
        icon:FiMoon,
        title:'Dark Supported Theme'
    },
    {
        icon:TbIcons,
        title:'React Icons'
    },
    {
        icon:BiCube,
        title:'Material Design Icon'
    },
    {
        icon:FiSettings,
        title:'Easy to customize'
    },
    {
        icon:BsFillFileEarmarkImageFill,
        title:'Free Illustrator Image'
    },
    {
        icon:FiCamera,
        title:'Free Images'
    },
    {
        icon:FaGooglePlay,
        title:'Free Google Fonts'
    },
    {
        icon:FiGitCommit,
        title:'Well Commented Code'
    },
    {
        icon:BsCode,
        title:'Clean Code'
    },
    {
        icon:MdUpdate,
        title:'Free Updates'
    },
    {
        icon:RiUserHeartFill,
        title:'Developer Friendly'
    },
]
  return (
    <>
      <Navbar navClass="defaultscroll sticky" manuClass="navigation-menu nav-right" smallButton={false}/>

      <section className="bg-half-170 pb-0 d-table w-100 bg-soft-primary" style={{backgroundImage:'url("/images/live/home-shape.png")'}}  id="home">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-12 text-center">
                    <div className="title-heading">
                        <Image src="/images/logo-icon-80.png" width={90} height={80} alt=""/>
                        <AppHeroText/>
                        <p className="para-desc text-muted mx-auto mb-0">Start working with Fronter one page and multipurpose parallax template that can provide everything you need.</p>
                        <div className="mt-4 pt-2"> 
                            <Link href="#landing" className="btn btn-primary rounded mouse-down mr-2 mb-2">View Demos</Link>
                        </div>

                        <div className="mt-5 d-md-block d-none position-relative" style={{zIndex: "1"}}>
                            <About/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid">
            <div className="row">
                <div className="col-12 px-0">
                    <div className="live-preview mt-4">
                        <Image src="/images/live/hero.png" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} alt="" className="img-fluid position-relative border-bottom"/>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <div className="position-relative">
            <div className="home-shape-arrow">
                {/* <Link href="/features"><i className="mdi mdi-arrow-down arrow-icon text-dark h5 shadow-md"></i></Link> */}
                <Link href="features"><i className="mdi mdi-arrow-down arrow-icon text-dark h5 shadow-md"></i></Link>
            </div>
        </div>
        <section className="section" id="landing">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title mb-4 mb-md-5 text-center">
                            <h4>Template Demos</h4>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {templateData.map((item,index)=>{
                        return(
                            <div className="col-md-6 col-12 mt-5" key={index}>
                                <div className="text-center">
                                    <div className="demos-box rounded-md shadow-md text-center border-0 overflow-hidden">
                                        <Link href={item.link} target="_blank">
                                            <Image src={item.image}  width={0} height={0} sizes='100vw' style={{width:"100%", height:'auto'}} className="img-fluid" alt="demo-img"/>
                                        </Link>
                                    </div>
                                    <h6 className="title text-uppercase mt-4">{item.title} {item?.tag2 ? <span className="badge rounded-lg bg-danger ms-2">{item.tag2}</span> :""} {item?.tag1 ? <span className="badge rounded-lg bg-warning ms-2">{item.tag1}</span> :""} </h6>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
        <section className="section bg-light" id="features">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title mb-4 text-center">
                            <h4>Template Features</h4>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {featuresData.map((item, index) =>{
                        let Icon = item.icon
                        return(
                            <div className="col-lg-3 col-md-6 mt-4 pt-2" key={index}>
                                <div className="d-flex align-items-center features feature-primary">
                                    <div className="feature-icon text-center rounded">
                                        <Icon className=" h4 icon mb-0"/>
                                    </div>
                                    <div className="flex-1 ms-3">
                                        <h6 className="mt-0">{item.title}</h6>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
        <Footer/>
        <ScrollTop/>
    </>
  )
}

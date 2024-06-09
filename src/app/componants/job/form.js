'use client'
import dynamic from "next/dynamic";
const Select = dynamic(() => import('react-select'), {ssr:false})

import { country, time } from "../../data/jobData";


import {BiBriefcaseAlt2,FiMapPin} from "../../assets/icons/vander"

export default function JobForm(){
    return(
        <form action="#">
            <div className="registration-form text-dark text-start">
                <div className="row g-lg-0">
                    <div className="col-lg-3 col-md-6">
                        <div className="filter-search-form position-relative filter-border bg-light">
                            <BiBriefcaseAlt2 className="icons"/>
                            <input name="name" type="text" id="job-keyword" className="form-control filter-input-box bg-light border-0" placeholder="Search your keaywords"/>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mt-3 mt-md-0">
                        <div className="filter-search-form position-relative filter-border bg-light">
                            <FiMapPin className="icons"/>
                            <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={country} />
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-md-6 mt-3 mt-lg-0">
                        <div className="filter-search-form position-relative filter-border bg-light">
                            <BiBriefcaseAlt2 className="icons"/>
                            <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={time} />
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mt-3 mt-lg-0">
                        <input type="submit" id="search" name="search" style={{height:"60px"}} className="btn btn-primary searchbtn submit-btn w-100" value="Search"/>
                    </div>
                </div>
            </div>
        </form>
    )
}
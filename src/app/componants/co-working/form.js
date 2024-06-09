'use client'
import React from "react";

import Select from 'react-select'
import {BiBriefcaseAlt2,FiMapPin,AiOutlineCalendar} from "../../assets/icons/vander"

export default function CoworkingForm(){

    let office =[
        { value: '1', label: 'Private office' },
        { value: '2', label: 'Dedicated Space' },
        { value: '3', label: 'Small office' },
        { value: '4', label: 'Floating Seat' },
        { value: '5', label: 'Startups Desk' },
        { value: '7', label: 'Retail Space' },
        { value: '7', label: 'Meeting Room' },
    ]
    let country = [
        { value : "AF", label : 'Afghanistan'},
        { value : "AX", label : 'land Islands'},
        { value : "AL", label : 'Albania'},
        { value : "DZ", label : 'Algeria'},
        { value : "AS", label : 'American Samoa'},
        { value : "AD", label : 'Andorra'},
        { value : "AO", label : 'Angola'},
        { value : "AI", label : 'Anguilla'},
        { value : "AQ", label : 'Antarctica'},
        { value : "AG", label : 'Antigua and Barbuda'},
        { value : "AR", label : 'Argentina'},
        { value : "AM", label : 'Armenia'},
        { value : "AW", label : 'Aruba'},
        { value : "AU", label : 'Australia'},
        { value : "AT", label : 'Austria'},
    ]
    return(
        <form action="#">
            <div className="registration-form text-dark text-start">
                <div className="row g-0">
                    <div className="col-lg-3">
                        <div className="filter-search-form position-relative filter-border bg-light">
                            <BiBriefcaseAlt2 className="icons"/>
                            <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={office} />
                        </div>
                    </div>
                    <div className="col-lg-3 mt-3 mt-lg-0">
                        <div className="filter-search-form position-relative filter-border bg-light">
                            <FiMapPin className="icons"/>
                            <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={country} />
                        </div>
                    </div>
                    <div className="col-lg-3 mt-3 mt-lg-0">
                        <div className="filter-search-form position-relative filter-border bg-light position-relative">
                            <AiOutlineCalendar className="icons"/>
                            {/* <div>
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div> */}
                            <input name="date" type="text" className="form-control border-0 filter-input-box bg-light start rounded-0" placeholder="Select date"/>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="mt-3 mt-lg-0">
                            <input type="submit" id="search" name="search" style={{height:"60px"}} className="btn btn-primary searchbtn submit-btn w-100" value="Search"/>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
"use client"
import React,{useState} from "react";
import Image from "next/image"
import { exersiceData } from "../../data/gymData";

export default function Timetable(){
    let [selectedGroup, setSelectedGroup] = useState('all');

    function filterItems(e,group) {
        let items = document.querySelectorAll('.picture-item');
        setSelectedGroup(group);
        items.forEach(function (item) {
            let groups = JSON.parse(item.getAttribute('data-groups'));

            if (group === 'all' || groups.includes(group)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
    return(
        <>
        <div className="row justify-content-center">
            <div className="col-12 pt-4 filters-group-wrap text-center">
                <div className="filters-group">
                    <ul className="container-filter mb-0 categories-filter list-unstyled filter-options">
                        <li className={`list-inline-item categories h5 fw-normal position-relative text-dark ${selectedGroup === 'all' ? 'active' : ''}`} data-group="all" onClick={(e) => filterItems(e,'all')}>All</li>
                        <li className={`list-inline-item categories h5 fw-normal position-relative text-dark ${selectedGroup === 'monday' ? 'active' : ''}`} data-group="monday" onClick={(e) => filterItems(e,'monday')}>Monday</li>
                        <li className={`list-inline-item categories h5 fw-normal position-relative text-dark ${selectedGroup === 'tuesday' ? 'active' : ''}`} data-group="tuesday" onClick={(e) => filterItems(e,'tuesday')}>Tuesday</li>
                        <li className={`list-inline-item categories h5 fw-normal position-relative text-dark ${selectedGroup === 'wednesday' ? 'active' : ''}`} data-group="wednesday" onClick={(e) => filterItems(e,'wednesday')}>Wednesday</li>
                        <li className={`list-inline-item categories h5 fw-normal position-relative text-dark ${selectedGroup === 'thursday' ? 'active' : ''}`} data-group="thursday" onClick={(e) => filterItems(e,'thursday')}>Thursday</li>
                        <li className={`list-inline-item categories h5 fw-normal position-relative text-dark ${selectedGroup === 'friday' ? 'active' : ''}`} data-group="friday" onClick={(e) => filterItems(e,'friday')}>Friday</li>
                        <li className={`list-inline-item categories h5 fw-normal position-relative text-dark ${selectedGroup === 'saturday' ? 'active' : ''}`} data-group="saturday" onClick={(e) => filterItems(e,'saturday')}>Saturday</li>
                    </ul>
                </div>
            </div>
        </div>

        <div id="grid" className="row row-cols-xl-6 row-cols-lg-5 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center">
            {exersiceData.map((item,index) => {
                return(
                <div className="col picture-item mt-4" data-groups={item.dataGroup} key={index}>
                    <div className="card schedule-time p-4 rounded shadow text-center m-1">
                        <Image src={item.image} width={65} height={65} className="avatar avatar-small d-block mx-auto" alt=""/>

                        <div className="content mt-4">
                            <h5 className="mb-0 ex-name fw-normal">{item.name}</h5>
                            <small className="text-muted mb-0">{item.time}</small>
                        </div>
                    </div>
                </div>
                )
            })}
            
        </div>
        </>
    )
}
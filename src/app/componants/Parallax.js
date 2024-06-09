'use client'
import React from "react";
import { Parallax } from 'react-parallax';

export default function ParallaxImage({bgImage}){
    return(
    <Parallax
        blur={{ min: 0, max: 0}}
        bgImage={bgImage}
        bgImageAlt="the dog"
        strength={500}
        bgportfolioImgize="100%"
        bgStyle={{with:"auto", height:"100%" }}
        style={{position:"absolute", width:"100%" , height:"100%"}}
    />
    )
}
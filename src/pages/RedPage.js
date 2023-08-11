import React from 'react';
import '../App.css';
import Navbar from "../components/Navbar2";
import p1 from "../resources/red/red1.jpg"
import p2 from "../resources/red/red2.jpg";
import p3 from "../resources/red/red3.jpg";
import p4 from "../resources/red/red4.jpg"
import p5 from "../resources/red/red5.jpg";
import p6 from "../resources/red/red6.jpg";
import p7 from "../resources/red/red7.jpg"
import p8 from "../resources/red/red8.jpg";
import p9 from "../resources/red/red9.jpg";
import p10 from "../resources/red/red10.jpg"
import p11 from "../resources/red/red11.jpg";
import p12 from "../resources/red/red12.jpg";
import p13 from "../resources/red/red13.jpg"
import p14 from "../resources/red/red14.jpg";
import p15 from "../resources/red/red15.jpg";
import p16 from "../resources/red/red16.jpg"
import p17 from "../resources/red/red17.jpg";
import p18 from "../resources/red/red18.jpg";
import p19 from "../resources/red/red19.jpg";
import p20 from "../resources/red/red20.jpg";

import "yet-another-react-lightbox/styles.css";
import ImageDisplay from "../components/ImageDisplay";


const photos = [

    {src:p2, width: 2130, height: 2833},
    {src:p3, width: 3000, height: 4000},
    {src:p4, width: 3010, height: 2008},
    {src:p5, width: 2739, height: 3652},
    {src:p6, width: 2619, height: 3492},
    {src:p7, width: 3343, height: 4179},
    {src:p8, width: 3791, height: 3033},
    {src:p9, width: 3352, height: 2215},
    {src:p10, width: 2140, height: 2854},
    {src:p11, width: 4800, height: 3840},
    {src:p12, width: 3840, height: 5760},
    {src:p13, width: 1882, height: 2823},
    {src:p1 ,width:5760, height:3840},
    {src:p14, width: 3742, height: 4678},
    {src:p15, width: 2593, height: 3456},
    {src:p16, width: 2695, height: 3369},
    {src:p17, width: 2240, height: 3373},
    {src:p18, width: 3089, height: 2048},
    {src:p19, width: 1505, height: 1004},
    {src:p20, width: 1370, height: 1827}
]
function RedPage()  {

    return (
        <div>
            <Navbar page={"colour"}/>
            <ImageDisplay photos={photos} photos2={photos}/>
        </div>
    );
}

export default RedPage
import React from 'react';
import '../App.css';
import Navbar from "../components/Navbar2";
import p1 from "../resources/red/red1.jpeg"
import p2 from "../resources/red/red2.jpeg";
import p3 from "../resources/red/red3.jpeg";
import p4 from "../resources/red/red4.jpeg"
import p5 from "../resources/red/red5.jpeg";
import p6 from "../resources/red/red6.jpeg";
import p7 from "../resources/red/red7.jpg"
import p8 from "../resources/red/red8.jpg";
import p9 from "../resources/red/red9.jpeg";
import p10 from "../resources/red/red10.jpeg"
import p11 from "../resources/red/red11.jpeg";
import p12 from "../resources/red/red12.jpeg";
import p13 from "../resources/red/red13.jpeg"
import p14 from "../resources/red/red14.jpg";
import p15 from "../resources/red/red15.jpeg";
import p16 from "../resources/red/red16.jpg"
import p17 from "../resources/red/red17.jpeg";
import p18 from "../resources/red/red18.jpeg";
import p19 from "../resources/red/red19.jpg";
import p20 from "../resources/red/red20.jpeg";

import PhotoAlbum from "react-photo-album";

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
class RedPage extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div style={{marginLeft:"3vw", marginRight:"3vw", marginTop:"5vh"}}>
                    <PhotoAlbum layout="columns" photos={photos} padding={20}
                                columns={(containerWidth) => {
                                    if (containerWidth < 600) return 2;
                                    return 3;
                                }} />
                </div>
            </div>
        );
    }
}

export default RedPage
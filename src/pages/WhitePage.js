import React from 'react';
import '../App.css';
import Navbar from "../components/NavbarMobile";
import p1 from "../resources/white/white1.jpg"
import p2 from "../resources/white/white2.jpg"
import p3 from "../resources/white/white3.jpg"
import p4 from "../resources/white/white4.jpg"
import p5 from "../resources/white/white5.jpg"
import ImageDisplay from "../components/ImageDisplay";
import NavbarWide from "../components/NavbarWide";


const photos = [
    {src:p1, width: 1900, height: 2868},
    {src:p3, width: 3346, height: 2234},
    {src:p2, width: 2702, height: 3377},
    {src:p4, width: 5760, height: 3840},
    {src:p5, width: 3087, height: 3859},
]
function WhitePage () {

    return (
        <div>
            <NavbarWide page={"colour"}/>
            <Navbar page={"colour"}/>
            <ImageDisplay photos={photos} photos2={photos}/>
            <div style={{position: "fixed", zIndex:-1, bottom: 0, left:0, backgroundColor:"white", width:"100vw", height: "100vh"}} />

        </div>
    );
}

export default WhitePage
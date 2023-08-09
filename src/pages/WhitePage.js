import React from 'react';
import '../App.css';
import Navbar from "../components/Navbar2";
import p1 from "../resources/white/white1.jpg"
import p2 from "../resources/white/white2.jpg"
import p3 from "../resources/white/white3.jpg"
import p4 from "../resources/white/white4.jpg"
import p5 from "../resources/white/white5.jpg"
import ImageDisplay from "../components/ImageDisplay";


const photos = [
    {src:p1, width: 1900, height: 2868},
    {src:p2, width: 2702, height: 3377},
    {src:p3, width: 3346, height: 2234},
    {src:p4, width: 5760, height: 3840},
    {src:p5, width: 3087, height: 3859},
]
function WhitePage () {

    return (
        <div>
            <Navbar/>
            <ImageDisplay photos={photos} />
        </div>
    );
}

export default WhitePage
import React from 'react';
import '../App.css';
import Navbar from "../components/Navbar2";
import p1 from "../resources/white/white1.jpeg"
import p2 from "../resources/white/white2.jpg"
import p3 from "../resources/white/white3.jpeg"
import p4 from "../resources/white/white4.jpeg"
import p5 from "../resources/white/white5.jpeg"
import PhotoAlbum from "react-photo-album";


const photos = [
    {src:p1, width: 1900, height: 2868},
    {src:p2, width: 2702, height: 3377},
    {src:p3, width: 3346, height: 2234},
    {src:p4, width: 5760, height: 3840},
    {src:p5, width: 3087, height: 3859},
]
class BlackWhitePage extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div style={{marginLeft:"3vw", marginRight:"3vw", marginTop:"5vh"}}>
                    <PhotoAlbum layout="masonry" photos={photos}
                                columns={(containerWidth) => {
                                    if (containerWidth < 600) return 2;
                                    return 3;
                                }} />
                </div>
            </div>
        );
    }
}

export default BlackWhitePage
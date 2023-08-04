import React from 'react';
import '../App.css';
import Navbar from "../components/Navbar2";
import PhotoAlbum from "react-photo-album";
import p1 from "../resources/lifestyle/lifestyle.jpg"
import p2 from "../resources/green/green1.JPG"
import p3 from "../resources/blue/blue1.jpg"
import p4 from "../resources/orange/orange1.JPG"


const photos = [
    {src:p1, width: 1280, height: 852},
    {src:p2, width: 1920, height: 2880},
    {src:p3, width: 1847, height: 2309},
    {src:p4, width: 2880, height: 1920},

]
class LifestylePage extends React.Component {

    render() {
        return (
            <div >
                <Navbar/>
                <div style={{marginLeft:"3vw", marginRight:"3vw", marginTop:"5vh"}}>
                    <PhotoAlbum layout="columns" photos={photos} padding='0' />
                </div>
            </div>
        );
    }
}

export default LifestylePage
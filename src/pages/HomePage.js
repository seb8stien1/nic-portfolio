import React from 'react';
import '../App.css';
import Navbar from "../components/Navbar2";
import ImageDisplay from "../components/ImageDisplay";

const photos = [
    {src:require("../resources/home/home1.jpg"), width: 562, height: 1000},
    {src:require("../resources/home/home2.jpg"), width: 800, height: 1000},
    {src:require("../resources/home/home3.jpg"), width: 800, height: 1000},
    {src:require("../resources/home/home4.jpg"), width: 800, height: 1000},
    {src:require("../resources/home/home5.jpg"), width: 1000, height: 800},
    {src:require("../resources/home/home6.jpg"), width: 800, height: 1000},
    {src:require("../resources/home/home7.jpg"), width: 800, height: 1000},
    {src:require("../resources/home/home8.jpg"), width: 1000, height: 667},
    {src:require("../resources/home/home9.jpg"), width: 800, height: 1000},
    {src:require("../resources/home/home10.jpg"), width: 1000, height: 682},
    {src:require("../resources/home/home11.jpg"), width: 1000, height: 666},
    {src:require("../resources/home/home12.jpg"), width: 1000, height: 667},
    {src:require("../resources/home/home13.jpg"), width: 1000, height: 667},
    {src:require("../resources/home/home14.jpg"), width: 667, height: 1000},
    {src:require("../resources/home/home15.jpg"), width: 667, height: 1000},
    {src:require("../resources/home/home16.jpg"), width: 714, height: 1000},
    {src:require("../resources/home/home17.jpg"), width: 1000, height: 694},
    {src:require("../resources/home/home18.jpg"), width: 1000, height: 663},
    {src:require("../resources/home/home19.jpg"), width: 667, height: 1000},
    {src:require("../resources/home/home20.jpg"), width: 750, height: 1000},
    {src:require("../resources/home/home21.jpg"), width: 800, height: 1000},
    {src:require("../resources/home/home22.jpg"), width: 750, height: 1000},
    {src:require("../resources/home/home23.jpg"), width: 750, height: 1000},
    {src:require("../resources/home/home24.jpg"), width: 800, height: 1000},
    {src:require("../resources/home/home25.jpg"), width: 1000, height: 667},
]
function HomePage()  {

    return (
        <div>
            <Navbar/>
            <ImageDisplay photos={photos} />
        </div>
    );
}

export default HomePage;

import React from 'react';
import '../App.css';
import Navbar from "../components/Navbar2";
import ImageDisplay from "../components/ImageDisplay";

const photos = [
    {src:require("../resources/green/green2.jpg"), width: 1890, height: 2850},
    {src:require("../resources/green/green3.jpg"), width: 3140, height: 3925},
    {src:require("../resources/green/green4.jpg"), width: 4840, height: 2420},
    {src:require("../resources/green/green5.jpg"), width: 3738, height: 4673},
    {src:require("../resources/green/green6.jpg"), width: 3638, height: 4548},
    {src:require("../resources/green/green7.jpg"), width: 3089, height: 2048},
    {src:require("../resources/green/green8.jpg"), width: 5305, height: 3537},
    {src:require("../resources/green/green9.jpg"), width: 2048, height: 3089},
    {src:require("../resources/green/green10.jpg"), width: 800, height: 1000},

]

function GreenPage () {

    return (
        <div>
            <Navbar page={"colour"}/>
            <ImageDisplay photos={photos} photos2={photos}/>
        </div>
    );
}

export default GreenPage
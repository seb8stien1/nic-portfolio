import React from 'react';
import '../App.css';
import Navbar from "../components/Navbar2";
import ImageDisplay from "../components/ImageDisplay";


const photos = [
    {src:require("../resources/cuba/cuba1.jpg"), width: 1000, height: 661},
    {src:require("../resources/cuba/cuba2.jpg"), width: 1000, height: 669},
    {src:require("../resources/cuba/cuba3.JPG"), width: 1000, height: 664},
    {src:require("../resources/cuba/cuba4.jpg"), width: 1000, height: 667},
    {src:require("../resources/cuba/cuba5.jpg"), width: 1000, height: 694},
    {src:require("../resources/cuba/cuba6.JPG"), width: 1000, height: 661},
    {src:require("../resources/cuba/cuba7.JPG"), width: 1000, height: 660},
    {src:require("../resources/cuba/cuba8.jpg"), width: 1000, height: 664},
    {src:require("../resources/cuba/cuba9.jpg"), width: 1000, height: 661},
    {src:require("../resources/cuba/cuba10.JPG"), width: 666, height: 1000},
    {src:require("../resources/cuba/cuba11.jpg"), width: 1000, height: 666},
    {src:require("../resources/cuba/cuba12.jpg"), width: 1000, height: 682},

]
function CubaPage()  {

    return (
        <div>
            <Navbar/>
            <ImageDisplay photos={photos} />
        </div>
    );
}


export default CubaPage
import React from 'react';
import '../App.css';
import Navbar from "../components/Navbar2";
import ImageDisplay from "../components/ImageDisplay";

const photos = [
    {src:require("../resources/portrait/portrait1.jpg"), width: 663, height: 1000},
    {src:require("../resources/portrait/portrait2.jpg"), width: 668, height: 1000},
    {src:require("../resources/portrait/portrait3.jpg"), width: 800, height: 1000},
    {src:require("../resources/portrait/portrait4.jpg"), width: 1000, height: 667},
    {src:require("../resources/portrait/portrait5.jpg"), width: 663, height: 1000},
    {src:require("../resources/portrait/portrait6.jpg"), width: 667, height: 1000},
    {src:require("../resources/portrait/portrait7.jpg"), width: 663, height: 1000},
    {src:require("../resources/portrait/portrait8.jpg"), width: 1000, height: 663},
    {src:require("../resources/portrait/portrait9.jpg"), width: 663, height: 1000},
    {src:require("../resources/portrait/portrait10.jpg"), width: 675, height: 1000},
    {src:require("../resources/portrait/portrait11.jpg"), width: 1000, height: 661},
    {src:require("../resources/portrait/portrait12.jpg"), width: 668, height: 1000},
    {src:require("../resources/portrait/portrait13.jpg"), width: 690, height: 1000},
    {src:require("../resources/portrait/portrait14.jpg"), width: 1000, height: 667},
    {src:require("../resources/portrait/portrait15.jpg"), width: 1000, height: 667},
    {src:require("../resources/portrait/portrait16.jpg"), width: 562, height: 1000},
    {src:require("../resources/portrait/portrait17.jpg"), width: 667, height: 1000},
    {src:require("../resources/portrait/portrait18.jpg"), width: 1000, height: 667},
    {src:require("../resources/portrait/portrait19.jpg"), width: 667, height: 1000},
    {src:require("../resources/portrait/portrait20.jpg"), width: 667, height: 1000},
    {src:require("../resources/portrait/portrait21.jpg"), width: 667, height: 1000},
    {src:require("../resources/portrait/portrait22.jpg"), width: 667, height: 1000},
    {src:require("../resources/portrait/portrait23.jpg"), width: 667, height: 1000},
    {src:require("../resources/portrait/portrait24.jpg"), width: 666, height: 1000},
    {src:require("../resources/portrait/portrait25.jpg"), width: 667, height: 1000},
    {src:require("../resources/portrait/portrait26.jpg"), width: 1000, height: 667},
    {src:require("../resources/portrait/portrait27.jpg"), width: 667, height: 1000},
    {src:require("../resources/portrait/portrait28.jpg"), width: 714, height: 1000},
    {src:require("../resources/portrait/portrait29.jpg"), width: 714, height: 1000},
    {src:require("../resources/portrait/portrait30.jpg"), width: 667, height: 1000},
    {src:require("../resources/portrait/portrait31.jpg"), width: 667, height: 1000},
    {src:require("../resources/portrait/portrait32.jpg"), width: 667, height: 1000},
    {src:require("../resources/portrait/portrait33.jpg"), width: 1000, height: 667},
    {src:require("../resources/portrait/portrait34.jpg"), width: 800, height: 1000},
    {src:require("../resources/portrait/portrait35.jpg"), width: 667, height: 1000},
    {src:require("../resources/portrait/portrait36.jpg"), width: 800, height: 1000},
    {src:require("../resources/portrait/portrait37.jpg"), width: 800, height: 1000},
    {src:require("../resources/portrait/portrait38.jpg"), width: 800, height: 1000},
    {src:require("../resources/portrait/portrait40.jpg"), width: 1000, height: 667},
    {src:require("../resources/portrait/portrait41.jpg"), width: 1000, height: 667},
    {src:require("../resources/portrait/portrait42.jpg"), width: 800, height: 1000},
    {src:require("../resources/portrait/portrait43.jpg"), width: 800, height: 1000},
    {src:require("../resources/portrait/portrait44.jpg"), width: 1000, height: 667},
    {src:require("../resources/portrait/portrait45.jpg"), width: 1000, height: 667},
    {src:require("../resources/portrait/portrait46.jpg"), width: 800, height: 1000},
    {src:require("../resources/portrait/portrait47.jpg"), width: 1000, height: 667},
    {src:require("../resources/portrait/portrait48.jpg"), width: 800, height: 1000},
    {src:require("../resources/portrait/portrait49.jpg"), width: 800, height: 1000},
    {src:require("../resources/portrait/portrait50.jpg"), width: 1000, height: 667},
    {src:require("../resources/portrait/portrait51.jpg"), width: 1000, height: 667},
]
function PortraitPage()  {

    return (
        <div>
            <Navbar page={'portrait'}/>
            <ImageDisplay photos={photos} />
        </div>
    );
}

export default PortraitPage
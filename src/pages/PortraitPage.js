import React from 'react';
import '../App.css';
import Navbar from "../components/NavbarMobile";
import ImageDisplay from "../components/ImageDisplay";
import Box from "@mui/material/Box";
import NavbarWide from "../components/NavbarWide";

const photos3Column = [

    {src:require("../resources/portrait/portrait54.jpg"), width: 800, height: 1000},
    {src:require("../resources/portrait/portrait57.jpg"), width: 1000, height: 800},
     {src:require("../resources/portrait/portrait5.jpg"), width: 663, height: 1000},
    {src:require("../resources/portrait/portrait66.jpg"), width: 800, height: 1000},
    {src:require("../resources/portrait/portrait11.jpg"), width: 1000, height: 661},
    {src:require("../resources/portrait/portrait56.jpg"), width: 800, height: 1000},
    {src:require("../resources/portrait/portrait26.jpg"), width: 1000, height: 667},
    {src:require("../resources/portrait/portrait13.jpg"), width: 690, height: 1000},
    {src:require("../resources/portrait/portrait16.jpg"), width: 562, height: 1000},
    {src:require("../resources/portrait/portrait49.jpg"), width: 800, height: 1000},
    {src:require("../resources/portrait/portrait19.jpg"), width: 667, height: 1000},
    {src:require("../resources/portrait/portrait61.jpg"), width: 800, height: 1000},
    {src:require("../resources/portrait/portrait58.jpg"), width: 664, height: 1000},
    {src:require("../resources/portrait/portrait12.jpg"), width: 668, height: 1000},



    {src:require("../resources/portrait/portrait14.jpg"), width: 1000, height: 667},
    {src:require("../resources/portrait/portrait65.jpg"), width: 800, height: 1000},
    {src:require("../resources/portrait/portrait27.jpg"), width: 667, height: 1000},
    {src:require("../resources/portrait/portrait52.jpg"), width: 800, height: 1000},
    {src:require("../resources/portrait/portrait6.jpg"), width: 667, height: 1000},
    {src:require("../resources/portrait/portrait33.jpg"), width: 1000, height: 667},
    {src:require("../resources/portrait/portrait32.jpg"), width: 667, height: 1000},
    {src:require("../resources/portrait/portrait55.jpg"), width: 800, height: 1000},
    {src:require("../resources/portrait/portrait18.jpg"), width: 1000, height: 667},
    {src:require("../resources/portrait/portrait43.jpg"), width: 800, height: 1000},
    {src:require("../resources/portrait/portrait37.jpg"), width: 800, height: 1000},
    {src:require("../resources/portrait/portrait59.jpg"), width: 800, height: 1000},
    {src:require("../resources/portrait/portrait29.jpg"), width: 714, height: 1000},
    {src:require("../resources/portrait/portrait63.jpg"), width: 800, height: 1000},
    {src:require("../resources/portrait/portrait67.jpg"), width: 1000, height: 667},

    {src:require("../resources/portrait/portrait20.jpg"), width: 667, height: 1000},
    {src:require("../resources/portrait/portrait24.jpg"), width: 666, height: 1000},
    {src:require("../resources/portrait/portrait44.jpg"), width: 1000, height: 667},
    {src:require("../resources/portrait/portrait36.jpg"), width: 800, height: 1000},
    {src:require("../resources/portrait/portrait25.jpg"), width: 667, height: 1000},
    {src:require("../resources/portrait/portrait41.jpg"), width: 1000, height: 667},
    // {src:require("../resources/portrait/portrait28.jpg"), width: 714, height: 1000},
    {src:require("../resources/portrait/portrait47.jpg"), width: 1000, height: 667},
    {src:require("../resources/portrait/portrait2.jpg"), width: 668, height: 1000},
    {src:require("../resources/portrait/portrait60.jpg"), width: 800, height: 1000},
    {src:require("../resources/portrait/portrait53.jpg"), width: 800, height: 1000},
    {src:require("../resources/portrait/portrait38.jpg"), width: 800, height: 1000},
// {src:require("../resources/portrait/portrait57.jpg"), width: 1000, height: 800},
    {src:require("../resources/portrait/portrait46.jpg"), width: 800, height: 1000},
    {src:require("../resources/portrait/portrait68.jpg"), width: 800, height: 1000},
    {src:require("../resources/portrait/portrait3.jpg"), width: 800, height: 1000},


]
const photosMobile = [

    {src:require("../resources/portrait/portrait54.jpg"), width: 800, height: 1000},
    {src:require("../resources/portrait/portrait57.jpg"), width: 1000, height: 800},
    {src:require("../resources/portrait/portrait5.jpg"), width: 663, height: 1000},
    {src:require("../resources/portrait/portrait24.jpg"), width: 666, height: 1000},
    {src:require("../resources/portrait/portrait11.jpg"), width: 1000, height: 661},
    {src:require("../resources/portrait/portrait56.jpg"), width: 800, height: 1000},
    {src:require("../resources/portrait/portrait52.jpg"), width: 800, height: 1000},
    {src:require("../resources/portrait/portrait12.jpg"), width: 668, height: 1000},
    {src:require("../resources/portrait/portrait6.jpg"), width: 667, height: 1000},
    {src:require("../resources/portrait/portrait18.jpg"), width: 1000, height: 667},
    {src:require("../resources/portrait/portrait55.jpg"), width: 800, height: 1000},
    {src:require("../resources/portrait/portrait37.jpg"), width: 800, height: 1000},
    {src:require("../resources/portrait/portrait27.jpg"), width: 667, height: 1000},
    {src:require("../resources/portrait/portrait61.jpg"), width: 800, height: 1000},
    {src:require("../resources/portrait/portrait58.jpg"), width: 664, height: 1000},
    {src:require("../resources/portrait/portrait36.jpg"), width: 800, height: 1000},
    {src:require("../resources/portrait/portrait29.jpg"), width: 714, height: 1000},
    {src:require("../resources/portrait/portrait68.jpg"), width: 800, height: 1000},
    {src:require("../resources/portrait/portrait3.jpg"), width: 800, height: 1000},
    {src:require("../resources/portrait/portrait19.jpg"), width: 667, height: 1000},



    {src:require("../resources/portrait/portrait14.jpg"), width: 1000, height: 667},
    {src:require("../resources/portrait/portrait20.jpg"), width: 667, height: 1000},
    {src:require("../resources/portrait/portrait60.jpg"), width: 800, height: 1000},
    {src:require("../resources/portrait/portrait44.jpg"), width: 1000, height: 667},
    {src:require("../resources/portrait/portrait66.jpg"), width: 800, height: 1000},
    {src:require("../resources/portrait/portrait65.jpg"), width: 800, height: 1000},
    {src:require("../resources/portrait/portrait16.jpg"), width: 562, height: 1000},
    {src:require("../resources/portrait/portrait33.jpg"), width: 1000, height: 667},
    {src:require("../resources/portrait/portrait59.jpg"), width: 800, height: 1000},
    {src:require("../resources/portrait/portrait43.jpg"), width: 800, height: 1000},
    {src:require("../resources/portrait/portrait46.jpg"), width: 800, height: 1000},
    {src:require("../resources/portrait/portrait26.jpg"), width: 1000, height: 667},
    {src:require("../resources/portrait/portrait25.jpg"), width: 667, height: 1000},
    {src:require("../resources/portrait/portrait2.jpg"), width: 668, height: 1000},
    {src:require("../resources/portrait/portrait41.jpg"), width: 1000, height: 667},
    {src:require("../resources/portrait/portrait38.jpg"), width: 800, height: 1000},
    {src:require("../resources/portrait/portrait13.jpg"), width: 690, height: 1000},
    {src:require("../resources/portrait/portrait32.jpg"), width: 667, height: 1000},
    {src:require("../resources/portrait/portrait53.jpg"), width: 800, height: 1000},
    {src:require("../resources/portrait/portrait67.jpg"), width: 1000, height: 667},
    {src:require("../resources/portrait/portrait49.jpg"), width: 800, height: 1000},

    // {src:require("../resources/portrait/portrait28.jpg"), width: 714, height: 1000},
    // {src:require("../resources/portrait/portrait51.jpg"), width: 1000, height: 667},
    // {src:require("../resources/portrait/portrait48.jpg"), width: 800, height: 1000},
    // {src:require("../resources/portrait/portrait57.jpg"), width: 1000, height: 800},
    // {src:require("../resources/portrait/portrait9.jpg"), width: 663, height: 1000},
    // {src:require("../resources/portrait/portrait47.jpg"), width: 1000, height: 667},

]
function PortraitPage()  {

    return (
        <div>
            <NavbarWide page={'portrait'}/>
            <Navbar page={'portrait'}/>
            <Box sx={{display: {xs:"inline", lg: "none"} }} >
                <ImageDisplay photos={photosMobile}/>
            </Box>
            <Box sx={{display: {xs:"none", lg: "inline"} }} >
                <ImageDisplay photos={photos3Column}/>
            </Box>
        </div>
    );
}

export default PortraitPage
import React from 'react';
import '../App.css';
import Navbar from "../components/NavbarMobile";
import ImageDisplay from "../components/ImageDisplay";
import Box from "@mui/material/Box";
import NavbarWide from "../components/NavbarWide";

const photos3Column = [
    {src:require("../resources/green/green4.jpg"), width: 4840, height: 2420},
    {src:require("../resources/green/green8.jpg"), width: 5305, height: 3537},
    {src:require("../resources/green/green2.jpg"), width: 1890, height: 2850},


    {src:require("../resources/green/green5.jpg"), width: 3738, height: 4673},
    {src:require("../resources/green/green7.jpg"), width: 3089, height: 2048},
    {src:require("../resources/green/green10.jpg"), width: 800, height: 1000},


    {src:require("../resources/green/green3.jpg"), width: 3140, height: 3925},
    {src:require("../resources/green/green9.jpg"), width: 2048, height: 3089},
    {src:require("../resources/green/green6.jpg"), width: 3638, height: 4548},


]
const photosMobile = [
    {src:require("../resources/green/green4.jpg"), width: 4840, height: 2420},
    {src:require("../resources/green/green5.jpg"), width: 3738, height: 4673},
    {src:require("../resources/green/green10.jpg"), width: 800, height: 1000},
    {src:require("../resources/green/green9.jpg"), width: 2048, height: 3089},


    {src:require("../resources/green/green3.jpg"), width: 3140, height: 3925},
    {src:require("../resources/green/green8.jpg"), width: 5305, height: 3537},
    {src:require("../resources/green/green7.jpg"), width: 3089, height: 2048},
    {src:require("../resources/green/green2.jpg"), width: 1890, height: 2850},
    {src:require("../resources/green/green6.jpg"), width: 3638, height: 4548},

]
function GreenPage () {

    return (
        <div>
            <NavbarWide page={"colour"}/>
            <Navbar page={"colour"}/>
            <Box sx={{display: {xs:"inline", lg: "none"} }} >
                <ImageDisplay photos={photosMobile}/>
            </Box>
            <Box sx={{display: {xs:"none", lg: "inline"} }} >
                <ImageDisplay photos={photos3Column}/>
            </Box>
            <div style={{position: "fixed", zIndex:-1, bottom: 0, left:0, backgroundColor:"white", width:"100vw", height: "100vh"}} />

        </div>
    );
}

export default GreenPage
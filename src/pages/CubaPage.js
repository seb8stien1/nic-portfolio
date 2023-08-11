import React from 'react';
import '../App.css';
import Navbar from "../components/Navbar2";
import ImageDisplay from "../components/ImageDisplay";
import Box from "@mui/material/Box";


const photos3Column = [
    {src:require("../resources/cuba/cuba2.jpg"), width: 1000, height: 669},
    {src:require("../resources/cuba/cuba11.jpg"), width: 1000, height: 666},
    {src:require("../resources/cuba/cuba12.jpg"), width: 1000, height: 682},
    {src:require("../resources/cuba/cuba4.jpg"), width: 1000, height: 667},

    {src:require("../resources/cuba/cuba3.jpg"), width: 1000, height: 664},
    {src:require("../resources/cuba/cuba5.jpg"), width: 1000, height: 694},
    {src:require("../resources/cuba/cuba7.jpg"), width: 1000, height: 660},

    // {src:require("../resources/cuba/cuba10.jpg"), width: 666, height: 1000},
    {src:require("../resources/cuba/cuba9.jpg"), width: 1000, height: 661},
    {src:require("../resources/cuba/cuba6.jpg"), width: 1000, height: 661},
    {src:require("../resources/cuba/cuba1.jpg"), width: 1000, height: 661},
    {src:require("../resources/cuba/cuba8.jpg"), width: 1000, height: 664},
]
const photosMobile = [
    {src:require("../resources/cuba/cuba2.jpg"), width: 1000, height: 669},
    {src:require("../resources/cuba/cuba11.jpg"), width: 1000, height: 666},
    {src:require("../resources/cuba/cuba12.jpg"), width: 1000, height: 682},
    {src:require("../resources/cuba/cuba9.jpg"), width: 1000, height: 661},
    {src:require("../resources/cuba/cuba7.jpg"), width: 1000, height: 660},
    {src:require("../resources/cuba/cuba6.jpg"), width: 1000, height: 661},
    {src:require("../resources/cuba/cuba3.jpg"), width: 1000, height: 664},

    {src:require("../resources/cuba/cuba10.jpg"), width: 666, height: 1000},
    {src:require("../resources/cuba/cuba5.jpg"), width: 1000, height: 694},
    {src:require("../resources/cuba/cuba4.jpg"), width: 1000, height: 667},
    {src:require("../resources/cuba/cuba1.jpg"), width: 1000, height: 661},
    {src:require("../resources/cuba/cuba8.jpg"), width: 1000, height: 664},
]
function CubaPage()  {

    return (
        <div>
            <Navbar page={'cuba'}/>
            <Box sx={{display: {xs:"inline", lg: "none"} }} >
                <ImageDisplay photos={photosMobile}/>
            </Box>
            <Box sx={{display: {xs:"none", lg: "inline"} }} >
                <ImageDisplay photos={photos3Column}/>
            </Box>
        </div>
    );
}


export default CubaPage
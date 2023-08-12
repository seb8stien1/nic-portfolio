import React from 'react';
import '../App.css';
import Navbar from "../components/NavbarMobile";
import ImageDisplay from "../components/ImageDisplay";
import Box from "@mui/material/Box";
import NavbarWide from "../components/NavbarWide";

const photos3Column = [
    {src:require("../resources/home/home9.jpg"), width: 800, height: 1000},
    {src:require("../resources/home/home1.jpg"), width: 562, height: 1000},
    {src:require("../resources/home/home5.jpg"), width: 1000, height: 800},
    {src:require("../resources/home/home2.jpg"), width: 800, height: 1000},
    {src:require("../resources/home/home12.jpg"), width: 1000, height: 667},
    {src:require("../resources/home/home4.jpg"), width: 800, height: 1000},
    {src:require("../resources/home/home11.jpg"), width: 1000, height: 666},

    {src:require("../resources/home/home18.jpg"), width: 1000, height: 663},
    {src:require("../resources/home/home15.jpg"), width: 667, height: 1000},
    {src:require("../resources/home/home13.jpg"), width: 1000, height: 667},
    {src:require("../resources/home/home22.jpg"), width: 750, height: 1000},
    {src:require("../resources/home/home6.jpg"), width: 800, height: 1000},
    {src:require("../resources/home/home17.jpg"), width: 1000, height: 694},
    {src:require("../resources/home/home27.jpg"), width: 800, height: 1000},

    {src:require("../resources/home/home14.jpg"), width: 667, height: 1000},
    {src:require("../resources/home/home7.jpg"), width: 800, height: 1000},
    {src:require("../resources/home/home26.jpg"), width: 1000, height: 667},
    {src:require("../resources/home/home21.jpg"), width: 800, height: 1000},
    {src:require("../resources/home/home24.jpg"), width: 1000, height: 667},
    {src:require("../resources/home/home10.jpg"), width: 1000, height: 682},
    {src:require("../resources/home/home20.jpg"), width: 750, height: 1000},
    {src:require("../resources/home/home25.jpg"), width: 1000, height: 667},
]
const photosMobile = [
    {src:require("../resources/home/home9.jpg"), width: 800, height: 1000},
    {src:require("../resources/home/home1.jpg"), width: 562, height: 1000},
    {src:require("../resources/home/home21.jpg"), width: 800, height: 1000},
    {src:require("../resources/home/home27.jpg"), width: 800, height: 1000},
    {src:require("../resources/home/home4.jpg"), width: 800, height: 1000},
    {src:require("../resources/home/home18.jpg"), width: 1000, height: 663},
    {src:require("../resources/home/home20.jpg"), width: 750, height: 1000},
    {src:require("../resources/home/home11.jpg"), width: 1000, height: 666},
    {src:require("../resources/home/home24.jpg"), width: 1000, height: 667},
    {src:require("../resources/home/home2.jpg"), width: 800, height: 1000},

    {src:require("../resources/home/home5.jpg"), width: 1000, height: 800},
    {src:require("../resources/home/home15.jpg"), width: 667, height: 1000},
    {src:require("../resources/home/home7.jpg"), width: 800, height: 1000},
    {src:require("../resources/home/home12.jpg"), width: 1000, height: 667},
    {src:require("../resources/home/home6.jpg"), width: 800, height: 1000},
    {src:require("../resources/home/home17.jpg"), width: 1000, height: 694},
    {src:require("../resources/home/home14.jpg"), width: 667, height: 1000},
    {src:require("../resources/home/home26.jpg"), width: 1000, height: 667},
    {src:require("../resources/home/home13.jpg"), width: 1000, height: 667},
    {src:require("../resources/home/home10.jpg"), width: 1000, height: 682},
    {src:require("../resources/home/home22.jpg"), width: 750, height: 1000},
    {src:require("../resources/home/home25.jpg"), width: 1000, height: 667},
]
function HomePage()  {

    return (
        <div>
            <Navbar/>
            <NavbarWide />
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

export default HomePage;

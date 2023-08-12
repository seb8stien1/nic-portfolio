import React from 'react';
import '../App.css';
import Navbar from "../components/NavbarMobile";
import ImageDisplay from "../components/ImageDisplay";
import Box from "@mui/material/Box";
import NavbarWide from "../components/NavbarWide";

const photos3Column = [
    {src:require("../resources/concert/concert26.jpg"), width: 800, height: 1000},
    {src:require("../resources/concert/concert27.jpg"), width: 800, height: 1000},
    {src:require("../resources/concert/concert22.jpg"), width: 667, height: 1000},
    {src:require("../resources/concert/concert36.jpg"), width: 1000, height: 666},
    {src:require("../resources/concert/concert10.jpg"), width: 750, height: 1000},
    {src:require("../resources/concert/concert8.jpg"), width: 752, height: 1000},
    {src:require("../resources/concert/concert23.jpg"), width: 1000, height: 667},
    {src:require("../resources/concert/concert34.jpg"), width: 800, height: 1000},
    {src:require("../resources/concert/concert15.jpg"), width: 1000, height: 750},

    // {src:require("../resources/concert/concert16.jpg"), width: 750, height: 1000},
    {src:require("../resources/concert/concert18.jpg"), width: 750, height: 1000},
    {src:require("../resources/concert/concert14.jpg"), width: 1000, height: 750},
    {src:require("../resources/concert/concert28.jpg"), width: 800, height: 1000},
    {src:require("../resources/concert/concert13.jpg"), width: 750, height: 1000},
    {src:require("../resources/concert/concert17.jpg"), width: 750, height: 1000},
    {src:require("../resources/concert/concert21.jpg"), width: 750, height: 1000},
    {src:require("../resources/concert/concert20.jpg"), width: 750, height: 1000},
    {src:require("../resources/concert/concert24.jpg"), width: 1000, height: 667},
    {src:require("../resources/concert/concert25.jpg"), width: 800, height: 1000},

    {src:require("../resources/concert/concert6.jpg"), width: 750, height: 1000},
    {src:require("../resources/concert/concert30.jpg"), width: 800, height: 1000},
    {src:require("../resources/concert/concert42.jpg"), width: 1000, height: 663},
    {src:require("../resources/concert/concert29.jpg"), width: 800, height: 1000},
    {src:require("../resources/concert/concert7.jpg"), width: 1000, height: 750},
    {src:require("../resources/concert/concert5.jpg"), width: 800, height: 1000},
    {src:require("../resources/concert/concert41.jpg"), width: 750, height: 1000},
    {src:require("../resources/concert/concert19.jpg"), width: 750, height: 1000},
    {src:require("../resources/concert/concert12.jpg"), width: 750, height: 1000},

]
const photosMobile = [
    {src:require("../resources/concert/concert26.jpg"), width: 800, height: 1000},
    {src:require("../resources/concert/concert14.jpg"), width: 1000, height: 750},
    {src:require("../resources/concert/concert27.jpg"), width: 800, height: 1000},
    {src:require("../resources/concert/concert28.jpg"), width: 800, height: 1000},
    {src:require("../resources/concert/concert30.jpg"), width: 800, height: 1000},
    {src:require("../resources/concert/concert17.jpg"), width: 750, height: 1000},
    {src:require("../resources/concert/concert36.jpg"), width: 1000, height: 666},
    {src:require("../resources/concert/concert20.jpg"), width: 750, height: 1000},
    {src:require("../resources/concert/concert8.jpg"), width: 752, height: 1000},
    {src:require("../resources/concert/concert10.jpg"), width: 750, height: 1000},
    {src:require("../resources/concert/concert7.jpg"), width: 1000, height: 750},
    {src:require("../resources/concert/concert12.jpg"), width: 750, height: 1000},
    {src:require("../resources/concert/concert15.jpg"), width: 1000, height: 750},

    {src:require("../resources/concert/concert18.jpg"), width: 750, height: 1000},
    {src:require("../resources/concert/concert42.jpg"), width: 1000, height: 663},
    {src:require("../resources/concert/concert29.jpg"), width: 800, height: 1000},
    {src:require("../resources/concert/concert6.jpg"), width: 750, height: 1000},
    {src:require("../resources/concert/concert13.jpg"), width: 750, height: 1000},
    {src:require("../resources/concert/concert22.jpg"), width: 667, height: 1000},
    {src:require("../resources/concert/concert21.jpg"), width: 750, height: 1000},
    {src:require("../resources/concert/concert23.jpg"), width: 1000, height: 667},
    {src:require("../resources/concert/concert19.jpg"), width: 750, height: 1000},
    {src:require("../resources/concert/concert41.jpg"), width: 750, height: 1000},
    {src:require("../resources/concert/concert5.jpg"), width: 800, height: 1000},
    {src:require("../resources/concert/concert34.jpg"), width: 800, height: 1000},
    {src:require("../resources/concert/concert25.jpg"), width: 800, height: 1000},

]
function ConcertPage()  {

    return (
        <div>
            <NavbarWide page={'concert'}/>
            <Navbar page={'concert'}/>
            <Box sx={{display: {xs:"inline", lg: "none"} }} >
                <ImageDisplay photos={photosMobile}/>
            </Box>
            <Box sx={{display: {xs:"none", lg: "inline"} }} >
                <ImageDisplay photos={photos3Column}/>
            </Box>
        </div>
    );
}

export default ConcertPage
import React from 'react';
import '../App.css';
import Navbar from "../components/NavbarMobile";
import ImageDisplay from "../components/ImageDisplay";
import Box from "@mui/material/Box";
import NavbarWide from "../components/NavbarWide";

const photos3Column = [
        {src:require("../resources/orange/orange4.jpg"), width: 3353, height: 4694},
        {src:require("../resources/orange/orange8.jpg"), width: 5760, height: 3840},

        {src:require("../resources/orange/orange6.jpg"), width: 2606, height: 3257},
        {src:require("../resources/orange/orange14.jpg"), width: 5760, height: 3840},
        {src:require("../resources/orange/orange3.jpg"), width: 3203, height: 4806},
        {src:require("../resources/orange/orange10.jpg"), width: 5760, height: 3840},
        {src:require("../resources/orange/orange13.jpg") ,width:3598, height:4498},


        {src:require("../resources/orange/orange5.jpg"), width: 3840, height: 5760},
        {src:require("../resources/orange/orange9.jpg"), width: 3840, height: 5760},


        {src:require("../resources/orange/orange11.jpg"), width: 2407, height: 3370},
        {src:require("../resources/orange/orange12.jpg"), width: 3089, height: 2048},
        {src:require("../resources/orange/orange2.jpg"), width: 3089, height: 2048},
        {src:require("../resources/orange/orange15.jpg"), width: 3840, height: 5760},

]
const photosMobile = [

    {src:require("../resources/orange/orange4.jpg"), width: 3353, height: 4694},
    {src:require("../resources/orange/orange8.jpg"), width: 5760, height: 3840},
    {src:require("../resources/orange/orange6.jpg"), width: 2606, height: 3257},
    {src:require("../resources/orange/orange12.jpg"), width: 3089, height: 2048},
    {src:require("../resources/orange/orange5.jpg"), width: 3840, height: 5760},
    {src:require("../resources/orange/orange14.jpg"), width: 5760, height: 3840},
    {src:require("../resources/orange/orange3.jpg"), width: 3203, height: 4806},


    {src:require("../resources/orange/orange10.jpg"), width: 5760, height: 3840},
    {src:require("../resources/orange/orange11.jpg"), width: 2407, height: 3370},
    {src:require("../resources/orange/orange13.jpg") ,width:3598, height:4498},
    {src:require("../resources/orange/orange2.jpg"), width: 3089, height: 2048},
    {src:require("../resources/orange/orange9.jpg"), width: 3840, height: 5760},
    {src:require("../resources/orange/orange15.jpg"), width: 3840, height: 5760},

]
function OrangePage()  {

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

export default OrangePage;
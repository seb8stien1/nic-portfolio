
import React from 'react';
import '../App.css';
import Navbar from "../components/Navbar2";
import ImageDisplay from "../components/ImageDisplay";
import Box from "@mui/material/Box";

const photos3Column = [
    {src:require("../resources/black/black38.jpg"), width: 3631, height: 4539},
    {src:require("../resources/black/black1.jpg"), width: 1155, height: 1443},
    {src:require("../resources/black/black2.jpg"), width: 3385, height: 2238},
    {src:require("../resources/black/black3.jpg"), width: 3333, height: 2208},
    {src:require("../resources/black/black4.jpg"), width: 3364, height: 2252},
    {src:require("../resources/black/black5.jpg"), width: 3510, height: 4387},
    {src:require("../resources/black/black6.jpg"), width: 1833, height: 2292},
    {src:require("../resources/black/black7.jpg"), width: 2421, height: 3228},
    {src:require("../resources/black/black8.jpg"), width: 3639, height: 2729},
    {src:require("../resources/black/black9.jpg"), width: 3000, height: 4000},
    {src:require("../resources/black/black10.jpg"), width: 4000, height: 3000},
    {src:require("../resources/black/black11.jpg"), width: 2696, height: 1797},
    {src:require("../resources/black/black12.jpg"), width: 4000, height: 3000},
    {src:require("../resources/black/black13.jpg"), width: 2521, height: 3151},
    {src:require("../resources/black/black14.jpg"), width: 2407, height: 3009},
    {src:require("../resources/black/black17.jpg"), width: 2720, height: 3400},
    {src:require("../resources/black/black18.jpg"), width: 2655, height: 3319},
    {src:require("../resources/black/black19.jpg"), width: 2160, height: 2700},
    {src:require("../resources/black/black20.jpg"), width: 953, height: 635},
    {src:require("../resources/black/black21.jpg"), width: 1424, height: 944},
    {src:require("../resources/black/black22.jpg"), width: 3089, height: 2048},
    {src:require("../resources/black/black23.jpg"), width: 1412, height: 2130},
    {src:require("../resources/black/black24.jpg"), width: 1340, height: 888},
    {src:require("../resources/black/black25.jpg"), width: 1017, height: 1534},
    {src:require("../resources/black/black26.jpg"), width: 2206, height: 3327},
    {src:require("../resources/black/black27.jpg"), width: 2164, height: 3208},
    {src:require("../resources/black/black28.jpg"), width: 3355, height: 2217},
    {src:require("../resources/black/black29.jpg"), width: 2224, height: 3329},
    {src:require("../resources/black/black30.jpg"), width: 2073, height: 3006},
    {src:require("../resources/black/black31.jpg"), width: 3840, height: 5760},
    {src:require("../resources/black/black32.jpg"), width: 3840, height: 5760},
    {src:require("../resources/black/black33.jpg"), width: 3840, height: 5760},
    {src:require("../resources/black/black34.jpg"), width: 3532, height: 5298},
    {src:require("../resources/black/black35.jpg"), width: 3840, height: 5760},


    {src:require("../resources/black/black36.jpg"), width: 3840, height: 5760},
    {src:require("../resources/black/black37.jpg"), width: 3713, height: 5570},
    {src:require("../resources/black/black39.jpg"), width: 3095, height: 3869},
    {src:require("../resources/black/black40.jpg"), width: 5139, height: 3426},
    {src:require("../resources/black/black41.jpg"), width: 3503, height: 4379},
    {src:require("../resources/black/black42.jpg"), width: 5325, height: 3550},
    {src:require("../resources/black/black43.jpg"), width: 3700, height: 4625},
    {src:require("../resources/black/black44.jpg"), width: 4316, height: 2877},
    {src:require("../resources/black/black45.jpg"), width: 4881, height: 3254},
    {src:require("../resources/black/black46.jpg"), width: 5512, height: 3675},
    {src:require("../resources/black/black47.jpg"), width: 2939, height: 3674},
    {src:require("../resources/black/black48.jpg"), width: 2954, height: 3693},
    {src:require("../resources/black/black49.jpg"), width: 2770, height: 3463},
    {src:require("../resources/black/black50.jpg"), width: 4449, height: 2966},
    {src:require("../resources/black/black51.jpg"), width: 2426, height: 3033},
    {src:require("../resources/black/black52.jpg"), width: 2531, height: 3164},
    {src:require("../resources/black/black53.jpg"), width: 3157, height: 3946},
    {src:require("../resources/black/black54.jpg"), width: 4626, height: 3212},
    {src:require("../resources/black/black55.jpg"), width: 2017, height: 1334},
    {src:require("../resources/black/black56.jpg"), width: 2012, height: 1340},
    {src:require("../resources/black/black57.jpg"), width: 2017, height: 1376},

]
const photosMobile = [
    {src:require("../resources/black/black38.jpg"), width: 3631, height: 4539},
    {src:require("../resources/black/black1.jpg"), width: 1155, height: 1443},
    {src:require("../resources/black/black2.jpg"), width: 3385, height: 2238},
    {src:require("../resources/black/black3.jpg"), width: 3333, height: 2208},
    {src:require("../resources/black/black4.jpg"), width: 3364, height: 2252},
    {src:require("../resources/black/black5.jpg"), width: 3510, height: 4387},
    {src:require("../resources/black/black6.jpg"), width: 1833, height: 2292},
    {src:require("../resources/black/black7.jpg"), width: 2421, height: 3228},
    {src:require("../resources/black/black8.jpg"), width: 3639, height: 2729},
    {src:require("../resources/black/black9.jpg"), width: 3000, height: 4000},
    {src:require("../resources/black/black10.jpg"), width: 4000, height: 3000},
    {src:require("../resources/black/black11.jpg"), width: 2696, height: 1797},
    {src:require("../resources/black/black12.jpg"), width: 4000, height: 3000},
    {src:require("../resources/black/black13.jpg"), width: 2521, height: 3151},
    {src:require("../resources/black/black14.jpg"), width: 2407, height: 3009},
    {src:require("../resources/black/black17.jpg"), width: 2720, height: 3400},
    {src:require("../resources/black/black18.jpg"), width: 2655, height: 3319},
    {src:require("../resources/black/black19.jpg"), width: 2160, height: 2700},
    {src:require("../resources/black/black20.jpg"), width: 953, height: 635},
    {src:require("../resources/black/black21.jpg"), width: 1424, height: 944},
    {src:require("../resources/black/black22.jpg"), width: 3089, height: 2048},
    {src:require("../resources/black/black23.jpg"), width: 1412, height: 2130},
    {src:require("../resources/black/black24.jpg"), width: 1340, height: 888},
    {src:require("../resources/black/black25.jpg"), width: 1017, height: 1534},
    {src:require("../resources/black/black26.jpg"), width: 2206, height: 3327},
    {src:require("../resources/black/black27.jpg"), width: 2164, height: 3208},
    {src:require("../resources/black/black28.jpg"), width: 3355, height: 2217},
    {src:require("../resources/black/black29.jpg"), width: 2224, height: 3329},
    {src:require("../resources/black/black30.jpg"), width: 2073, height: 3006},
    {src:require("../resources/black/black31.jpg"), width: 3840, height: 5760},
    {src:require("../resources/black/black32.jpg"), width: 3840, height: 5760},
    {src:require("../resources/black/black33.jpg"), width: 3840, height: 5760},
    {src:require("../resources/black/black34.jpg"), width: 3532, height: 5298},
    {src:require("../resources/black/black35.jpg"), width: 3840, height: 5760},


    {src:require("../resources/black/black36.jpg"), width: 3840, height: 5760},
    {src:require("../resources/black/black37.jpg"), width: 3713, height: 5570},
    {src:require("../resources/black/black39.jpg"), width: 3095, height: 3869},
    {src:require("../resources/black/black40.jpg"), width: 5139, height: 3426},
    {src:require("../resources/black/black41.jpg"), width: 3503, height: 4379},
    {src:require("../resources/black/black42.jpg"), width: 5325, height: 3550},
    {src:require("../resources/black/black43.jpg"), width: 3700, height: 4625},
    {src:require("../resources/black/black44.jpg"), width: 4316, height: 2877},
    {src:require("../resources/black/black45.jpg"), width: 4881, height: 3254},
    {src:require("../resources/black/black46.jpg"), width: 5512, height: 3675},
    {src:require("../resources/black/black47.jpg"), width: 2939, height: 3674},
    {src:require("../resources/black/black48.jpg"), width: 2954, height: 3693},
    {src:require("../resources/black/black49.jpg"), width: 2770, height: 3463},
    {src:require("../resources/black/black50.jpg"), width: 4449, height: 2966},
    {src:require("../resources/black/black51.jpg"), width: 2426, height: 3033},
    {src:require("../resources/black/black52.jpg"), width: 2531, height: 3164},
    {src:require("../resources/black/black53.jpg"), width: 3157, height: 3946},
    {src:require("../resources/black/black54.jpg"), width: 4626, height: 3212},
    {src:require("../resources/black/black55.jpg"), width: 2017, height: 1334},
    {src:require("../resources/black/black56.jpg"), width: 2012, height: 1340},
    {src:require("../resources/black/black57.jpg"), width: 2017, height: 1376},

]
function BlackWhitePage (props) {

    return (
        <div>
            <Navbar page={"colour"}/>
            <Box sx={{display: {xs:"inline", lg: "none"} }} >
                <ImageDisplay photos={photosMobile}/>
            </Box>
            <Box sx={{display: {xs:"none", lg: "inline"} }} >
                <ImageDisplay photos={photos3Column}/>
            </Box>
        </div>
    );
}

export default BlackWhitePage
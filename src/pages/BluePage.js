import React, {useState} from 'react';
import '../App.css';
import Navbar from "../components/Navbar2";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";

const photos = [
    {src:require("../resources/blue/blue2.jpg"), width: 3776, height: 5653},
    {src:require("../resources/blue/blue3.jpg"), width: 3000, height: 3871},
    {src:require("../resources/blue/blue4.jpg"), width: 4000, height: 3000},
    {src:require("../resources/blue/blue5.jpg"), width: 3000, height: 4000},
    {src:require("../resources/blue/blue6.jpg"), width: 2480, height: 3306},
    {src:require("../resources/blue/blue7.jpg"), width: 4000, height: 3000},
    {src:require("../resources/blue/blue8.jpg"), width: 2472, height: 3090},
    {src:require("../resources/blue/blue9.jpg"), width: 4000, height: 3000},
    {src:require("../resources/blue/blue10.jpg"), width: 5565, height: 3710},
    {src:require("../resources/blue/blue11.jpg"), width: 3173, height: 3966},
    {src:require("../resources/blue/blue12.jpg"), width: 3091, height: 2048},
    {src:require("../resources/blue/blue13.jpg"), width: 5626, height: 3751},
    {src:require("../resources/blue/blue14.jpg"), width: 3840, height: 5760},
    {src:require("../resources/blue/blue15.jpg"), width: 5760, height: 3840},
    {src:require("../resources/blue/blue16.jpg"), width: 2327, height: 3491},
    {src:require("../resources/blue/blue17.jpg"), width: 3840, height: 5760},
    {src:require("../resources/blue/blue18.jpg"), width: 5641, height: 3761},
    {src:require("../resources/blue/blue19.jpg"), width: 3622, height: 4528},
    {src:require("../resources/blue/blue20.jpg"), width: 3384, height: 4230},
    {src:require("../resources/blue/blue21.jpg"), width: 5475, height: 3650},
    {src:require("../resources/blue/blue22.jpg"), width: 5760, height: 3840},
    {src:require("../resources/blue/blue23.jpg"), width: 5465, height: 3643},
    {src:require("../resources/blue/blue24.jpg"), width: 3694, height: 4618},
    {src:require("../resources/blue/blue25.jpg"), width: 5092, height: 3395},
    {src:require("../resources/blue/blue26.jpg"), width: 3806, height: 4757},
    {src:require("../resources/blue/blue27.jpg"), width: 3348, height: 4185},
    {src:require("../resources/blue/blue28.jpg"), width: 5463, height: 3642},
    {src:require("../resources/blue/blue29.jpg"), width: 3809, height: 4761},
    {src:require("../resources/blue/blue30.jpg"), width: 1626, height: 2033},
    {src:require("../resources/blue/blue31.jpg"), width: 3259, height: 4074},
    {src:require("../resources/blue/blue32.jpg"), width: 2547, height: 3184},
    {src:require("../resources/blue/blue33.jpg"), width: 2781, height: 1862},
]

function BluePage () {
    const [index, setIndex] = useState(-1);

    return (
        <div>
            <Navbar/>
            <div style={{marginLeft:"3vw", marginRight:"3vw", marginTop:"5vh"}}>

                <PhotoAlbum layout="columns" photos={photos}
                            padding={(containerWidth) => {
                                if (containerWidth < 846) return 0;
                                return "25";
                            }}
                            columns={(containerWidth) => {
                                if (containerWidth < 846) return 2;
                                return 3;
                            }}
                            onClick={({ index }) => setIndex(index)} />
                <Lightbox
                    slides={photos}
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                    styles={{
                        root: {
                            "--yarl__color_backdrop": "rgba(255, 255, 255, 0.98)",
                            "--yarl__color_button": "rgb(0,0,0)",
                            "--yarl__color_button_active": "rgb(0,0,0)"
                        },
                        button: {"filter": "none"},
                        navigationNext: {"transform": "scale(2)"},
                        navigationPrev: {"transform": "scale(2)"},
                    }}
                />
            </div>
        </div>
    );
}

export default BluePage
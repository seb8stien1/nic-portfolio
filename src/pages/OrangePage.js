import React, {useState} from 'react';
import '../App.css';

import Navbar from "../components/Navbar2";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";

const photos = [

        {src:require("../resources/orange/orange2.jpg"), width: 3089, height: 2048},
        {src:require("../resources/orange/orange3.jpg"), width: 3203, height: 4806},
        {src:require("../resources/orange/orange4.jpg"), width: 3353, height: 4694},
        {src:require("../resources/orange/orange5.jpg"), width: 3840, height: 5760},
        {src:require("../resources/orange/orange6.jpg"), width: 2606, height: 3257},
        {src:require("../resources/orange/orange7.jpg"), width: 1024, height: 1545},
        {src:require("../resources/orange/orange8.jpg"), width: 5760, height: 3840},
        {src:require("../resources/orange/orange9.jpg"), width: 3840, height: 5760},
        {src:require("../resources/orange/orange10.jpg"), width: 5760, height: 3840},
        {src:require("../resources/orange/orange11.jpg"), width: 2407, height: 3370},
        {src:require("../resources/orange/orange12.jpg"), width: 3089, height: 2048},
        {src:require("../resources/orange/orange13.jpg") ,width:3598, height:4498},
        {src:require("../resources/orange/orange14.jpg"), width: 5760, height: 3840},
        {src:require("../resources/orange/orange15.jpg"), width: 3840, height: 5760},
        {src:require("../resources/orange/orange16.jpg"), width: 5594, height: 3729},
]

function OrangePage()  {
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

export default OrangePage;
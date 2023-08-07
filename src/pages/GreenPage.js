import React, {useState} from 'react';
import '../App.css';
import Navbar from "../components/Navbar2";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";

const photos = [
    {src:require("../resources/green/green2.jpg"), width: 1890, height: 2850},
    {src:require("../resources/green/green3.jpg"), width: 3140, height: 3925},
    {src:require("../resources/green/green4.jpg"), width: 4840, height: 2420},
    {src:require("../resources/green/green5.jpg"), width: 3738, height: 4673},
    {src:require("../resources/green/green6.jpg"), width: 3638, height: 4548},
    {src:require("../resources/green/green7.jpg"), width: 3089, height: 2048},
    {src:require("../resources/green/green8.jpg"), width: 5305, height: 3537},
    {src:require("../resources/green/green9.jpg"), width: 2048, height: 3089},
]




function GreenPage () {
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

export default GreenPage
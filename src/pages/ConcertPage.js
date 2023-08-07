import React, {useState} from 'react';
import '../App.css';
import Navbar from "../components/Navbar2";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";

const photos = [
    {src:require("../resources/concert/concert1.jpg"), width: 800, height: 1000},
    // {src:require("../resources/concert/concert2.jpg"), width: 663, height: 1000},
    {src:require("../resources/concert/concert3.jpg"), width: 668, height: 1000},
    {src:require("../resources/concert/concert4.jpg"), width: 668, height: 1000},
    {src:require("../resources/concert/concert5.jpg"), width: 800, height: 1000},
    {src:require("../resources/concert/concert6.jpg"), width: 750, height: 1000},
    {src:require("../resources/concert/concert7.jpg"), width: 1000, height: 750},
    {src:require("../resources/concert/concert8.jpg"), width: 752, height: 1000},
    {src:require("../resources/concert/concert9.jpg"), width: 750, height: 1000},
    {src:require("../resources/concert/concert10.jpg"), width: 750, height: 1000},
    {src:require("../resources/concert/concert11.jpg"), width: 750, height: 1000},
    {src:require("../resources/concert/concert12.jpg"), width: 750, height: 1000},
    {src:require("../resources/concert/concert13.jpg"), width: 750, height: 1000},
    {src:require("../resources/concert/concert14.jpg"), width: 1000, height: 750},
    {src:require("../resources/concert/concert15.jpg"), width: 1000, height: 750},
    {src:require("../resources/concert/concert16.jpg"), width: 750, height: 1000},
    {src:require("../resources/concert/concert17.jpg"), width: 750, height: 1000},
    {src:require("../resources/concert/concert18.jpg"), width: 750, height: 1000},
    {src:require("../resources/concert/concert19.jpg"), width: 750, height: 1000},
    {src:require("../resources/concert/concert20.jpg"), width: 750, height: 1000},
    {src:require("../resources/concert/concert21.jpg"), width: 750, height: 1000},
    {src:require("../resources/concert/concert22.jpg"), width: 667, height: 1000},
    {src:require("../resources/concert/concert23.jpg"), width: 1000, height: 667},
    {src:require("../resources/concert/concert24.jpg"), width: 1000, height: 667},
    {src:require("../resources/concert/concert25.jpg"), width: 800, height: 1000},
    {src:require("../resources/concert/concert26.jpg"), width: 800, height: 1000},
    {src:require("../resources/concert/concert27.jpg"), width: 800, height: 1000},
    {src:require("../resources/concert/concert28.jpg"), width: 800, height: 1000},
    {src:require("../resources/concert/concert29.jpg"), width: 800, height: 1000},
    {src:require("../resources/concert/concert30.jpg"), width: 800, height: 1000},
    {src:require("../resources/concert/concert31.jpg"), width: 800, height: 1000},
    {src:require("../resources/concert/concert32.jpg"), width: 1000, height: 667},
    // {src:require("../resources/concert/concert33.jpg"), width: 800, height: 1000},
    {src:require("../resources/concert/concert34.jpg"), width: 800, height: 1000},
    // {src:require("../resources/concert/concert35.jpg"), width: 663, height: 1000},
    {src:require("../resources/concert/concert36.jpg"), width: 1000, height: 666},
    // {src:require("../resources/concert/concert37.jpg"), width: 667, height: 1000},
    // {src:require("../resources/concert/concert38.jpg"), width: 663, height: 1000},
    {src:require("../resources/concert/concert39.jpg"), width: 1000, height: 663},
    {src:require("../resources/concert/concert40.jpg"), width: 663, height: 1000},
    {src:require("../resources/concert/concert41.jpg"), width: 750, height: 1000},
]

function ConcertPage()  {
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

export default ConcertPage
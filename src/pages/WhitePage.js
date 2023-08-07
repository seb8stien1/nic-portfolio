import React, {useState} from 'react';
import '../App.css';
import Navbar from "../components/Navbar2";
import p1 from "../resources/white/white1.jpg"
import p2 from "../resources/white/white2.jpg"
import p3 from "../resources/white/white3.jpg"
import p4 from "../resources/white/white4.jpg"
import p5 from "../resources/white/white5.jpg"
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";


const photos = [
    {src:p1, width: 1900, height: 2868},
    {src:p2, width: 2702, height: 3377},
    {src:p3, width: 3346, height: 2234},
    {src:p4, width: 5760, height: 3840},
    {src:p5, width: 3087, height: 3859},
]
function WhitePage () {
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

export default WhitePage
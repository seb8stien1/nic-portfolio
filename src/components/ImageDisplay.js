import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import {useState} from "react";

export default function ImageDisplay(props) {
    const [index, setIndex] = useState(-1);

    return(
    //     todo:lazy load images
    <div style={{marginLeft:"3vw", marginRight:"3vw", marginBottom:"2vh"}}>
        <PhotoAlbum layout="columns"
                    photos={props.photos}
                    padding={(containerWidth) => {
                        if (containerWidth < 846) return 0;
                        return "25";
                    }}
                    columns={(containerWidth) => {
                        if (containerWidth < 846) return 2;
                        return 3;
                    }}
                    rowConstraints={(containerWidth) => {
                        if (containerWidth < 846) return {maxPhotos:2};
                        return {maxPhotos: 3};
                    }}
                    onClick={({ index }) => setIndex(index)} />
        <Lightbox
            slides={props.photos}
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
    );
}

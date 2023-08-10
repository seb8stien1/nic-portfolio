import React from 'react';

import blue from '../resources/blue.png';
import red from '../resources/red.png';
import orange from '../resources/orange.png';
import black from '../resources/black.png';
import green from '../resources/green.png';
import white from "../resources/white.png";
import {Link} from "react-router-dom";

const CircleImages = () => {
    const images = [
        { src: blue, alt: 'blue' },
        { src: red, alt: 'red' },
        { src: orange, alt: 'orange' },
        { src: black, alt: 'black-white' },
        { src: green, alt: 'green' },
        { src: white, alt: 'white'}
    ];

    return (
            <div className="circle-container" style={{aspectRatio:"1 / 1", maxWidth:"80vw", maxHeight:"80vh", marginTop: "10vh", marginLeft: "calc(max(10vw, 10vw + (80vw - 80vh) / 2))"}}>
                {images.map((image, index) => (
                    <Link to={'/'+image.alt}>
                        <img
                            key={index}
                            src={image.src}
                            alt={image.alt}
                            className={`circle-image circle-image-${index}`}
                            style={{maxWidth: "30%", maxHeight:"30%"}}
                        />
                    </Link>
                ))}
            </div>
    );
};

export default CircleImages;

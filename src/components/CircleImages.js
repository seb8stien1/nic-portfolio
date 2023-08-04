import React from 'react';

import blue from '../resources/blue.png';
import red from '../resources/red.png';
import orange from '../resources/orange.png';
import black from '../resources/black.png';
import green from '../resources/green.png';
import white from "../resources/white.png";
import {Link} from "react-router-dom";

const CircleImages = (props) => {
    const { imageSize, elementHeight, elementWidth } = props;
    const images = [
        { src: blue, alt: 'blue' },
        { src: red, alt: 'red' },
        { src: orange, alt: 'orange' },
        { src: black, alt: 'black-white' },
        { src: green, alt: 'green' },
        { src: white, alt: 'white'}
    ];

    return (
        <div className="circle-container" style={{maxWidth:elementWidth, height:elementHeight}}>
            {images.map((image, index) => (
                <Link to={'/'+image.alt}>
                    <img
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        className={`circle-image circle-image-${index}`}
                        style={{maxWidth:imageSize, maxHeight:imageSize}}
                    />
                </Link>
            ))}
        </div>
    );
};

export default CircleImages;

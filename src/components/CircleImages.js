import React from 'react';

import blue from '../resources/blue.png';
import red from '../resources/red.png';
import orange from '../resources/orange.png';
import gray from '../resources/gray.png';
import green from '../resources/green.png';

const CircleImages = () => {
    const images = [
        { src: blue, alt: 'blue' },
        { src: red, alt: 'red' },
        { src: orange, alt: 'orange' },
        { src: gray, alt: 'gray' },
        { src: green, alt: 'green' },
    ];

    return (
        <div className="circle-container">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className={`circle-image circle-image-${index}`}
                />
            ))}
        </div>
    );
};

export default CircleImages;

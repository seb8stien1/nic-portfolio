import React from 'react';

const CirclePortion = ({ radius, angle, fillColor, extendRatio = 0.5 }) => {
    const startAngle = 0; // Starting angle of the slice (in radians)
    const endAngle = angle; // Ending angle of the slice (in radians)
    const centerX = radius; // X coordinate of the center of the circle
    const centerY = radius; // Y coordinate of the center of the circle

    // Convert degrees to radians
    const toRadians = (degrees) => {
        return degrees * (Math.PI / 180);
    };

    // Calculate the start and end coordinates of the slice
    const outerStartX = centerX + radius * Math.cos(toRadians(startAngle));
    const outerStartY = centerY + radius * Math.sin(toRadians(startAngle));
    const outerEndX = centerX + radius * Math.cos(toRadians(endAngle));
    const outerEndY = centerY + radius * Math.sin(toRadians(endAngle));
    const innerStartX = centerX + (radius * extendRatio) * Math.cos(toRadians(startAngle));
    const innerStartY = centerY + (radius * extendRatio) * Math.sin(toRadians(startAngle));
    const innerEndX = centerX + (radius * extendRatio) * Math.cos(toRadians(endAngle));
    const innerEndY = centerY + (radius * extendRatio) * Math.sin(toRadians(endAngle));

    // Determine the largeArcFlag for drawing the outer arc
    const largeArcFlag = angle <= 180 ? 0 : 1;

    // Create the path string for the slice
    const path = `M ${outerStartX} ${outerStartY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${outerEndX} ${outerEndY} L ${innerEndX} ${innerEndY} A ${radius * extendRatio} ${radius * extendRatio} 0 ${largeArcFlag} 0 ${innerStartX} ${innerStartY} Z`;

    return (
        <svg width={radius * 2} height={radius * 2}>
            <path d={path} fill={fillColor} />
        </svg>
    );
};

export default CirclePortion;

import React from 'react';
import CirclePortion from "./CirclePortion";

const Circle = ({ radius, sliceCount, extendRatio, paddingAngle }) => {
    const sliceAngle = (360 - paddingAngle * sliceCount) / sliceCount;

    const renderSlices = () => {
        const slices = [];
        let currentAngle = 0;
        for (let i = 0; i < sliceCount; i++) {
            const angle = currentAngle;
            const fillColor = `hsl(${angle}, 50%, 50%)`;
            const rotation = `rotate(${angle} ${radius} ${radius})`;

            slices.push(
                <g key={i} transform={rotation}>
                    <CirclePortion
                        radius={radius}
                        angle={sliceAngle}
                        fillColor={fillColor}
                        extendRatio={extendRatio}
                    />
                </g>
            );

            currentAngle += sliceAngle + paddingAngle; // Increment current angle with slice angle and padding angle
        }
        return slices;
    };

    return (
        <svg width={radius * 2} height={radius * 2}>
            {renderSlices()}
            <text
                x={radius}
                y={radius}
                textAnchor="middle"
                dominantBaseline="middle"
                style={{ fontFamily: 'Arial', fontSize: '50px' }}
            >
                Pen
            </text>
        </svg>
    );
};

export default Circle;

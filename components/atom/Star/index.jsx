import React from 'react';

const Star = ({ value, index, color }) => {
    console.log(value, index);
    return (
        <span>
            <i
                style={{ color: color }}
                className={`  ${
                    value - index >= 0
                        ? 'fas fa-star'
                        : value - index == -0.5
                        ? 'fas fa-star-half-alt'
                        : 'far fa-star'
                }`}
            ></i>
        </span>
    );
};
export default Star;

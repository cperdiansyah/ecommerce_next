import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';
import Star from '../../atom/Star';

const Rating = ({ value, text, color, isLarge }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        stars.push(i);
    }

    return (
        <div className={isLarge ? `text-xl ${styles['rating']} ` : ''}>
            {stars.map((star, index) => (
                <Star key={index} value={value} index={star} color={color} />
            ))}
            <span className=" font-semibold"> {text && text} </span>
        </div>
    );
};

Rating.defaultProps = {
    color: '#F99746',
    value: 0,
};

Rating.propTypes = {
    value: PropTypes.number,
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
};

export default Rating;

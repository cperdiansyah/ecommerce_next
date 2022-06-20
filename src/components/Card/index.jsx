import React from 'react';
import styles from './card.module.css';

const Card = ({ children, className }) => {
  const newClassName = [className].join(' ');
  return (
    <div className={` ${newClassName}  ${styles['card-wrapper']}`}>
      {children}
    </div>
  );
};

export default Card;

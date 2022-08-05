import React from 'react';
import { Button as ButtonChakra } from '@chakra-ui/react';
import Link from 'next/link';

const Button = ({
  children,
  color,
  variant,
  isLink,
  disable,
  href,
  type,
  isOutsideLink,
  onClick,
  className,
}) => {
  if (isLink) {
    return (
      <Link href={href}>
        <a className={[className, disable ? 'disable' : ''].join(' ')}>
          <ButtonChakra
            colorScheme={color}
            variant={variant}
            className={[disable ? 'disable' : ''].join(' ')}
          >
            {children}
          </ButtonChakra>
        </a>
      </Link>
    );
  } else {
    return (
      <ButtonChakra
        colorScheme={color}
        variant={variant}
        className={[className, disable ? 'disable' : ''].join(' ')}
        onClick={onClick}
      >
        {children}
      </ButtonChakra>
    );
  }
};
Button.defaultProps = {
  variant: 'solid',
  isLink: false,
  disable: false,
  type: 'button',
};
export default Button;

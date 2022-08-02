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
  className,
}) => {
  if (isLink) {
    return (
      <Link href={href}>
        <a>
          <ButtonChakra
            colorScheme={color}
            variant={variant}
            className={[className, disable ? 'disable' : ''].join(' ')}
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
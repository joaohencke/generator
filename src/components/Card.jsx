import classNames from 'classnames'
import React from 'react';

import CardBody from './CardBody';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';

const Card = props => {
  const {
    className,
    cssModule,
    color,
    body,
    inverse,
    outline,
    innerRef,
    ...attributes
  } = props;
  const classes = classNames(
    className,
    'card',
    inverse ? 'text-white' : false,
    body ? 'card-body' : false,
    color ? `${outline ? 'border' : 'bg'}-${color}` : false
  );

  return (
    <div {...attributes} className={classes} ref={innerRef} />
  );
}

Card.Body = CardBody;
Card.Header = CardHeader;
Card.Footer = CardFooter;

export default Card;
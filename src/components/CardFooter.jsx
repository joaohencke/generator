import classNames from 'classnames'
import React from 'react';

const CardFooter = props => {
  const {
    className,
    cssModule,
    ...attributes
  } = props;
  const classes = classNames(
    className,
    'card-footer'
  );


  return (
    <div {...attributes} className={classes} ></div>
  );
}

export default CardFooter;
import classNames from 'classnames'
import React from 'react';

const CardHeader = props => {
  const {
    className,
    cssModule,
    ...attributes
  } = props;
  const classes = classNames(
    className,
    'card-header'
  );


  return (
    <div {...attributes} className={classes} ></div>
  );
}

export default CardHeader;
import classNames from 'classnames'
import React from 'react';

const CardBody = props => {
  const {
    className,
    cssModule,
    ...attributes
  } = props;
  const classes = classNames(
    className,
    'card-body'
  );


  return (
    <div {...attributes} className={classes} ></div>
  );
}

export default CardBody;
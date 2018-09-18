import React from 'react';
import { node } from 'prop-types';

const DisplayError = ({ message }) => (<p>{message}</p>);

DisplayError.propTypes = {
  message: node,
};

DisplayError.defaultProps = { message: 'An error has occured' };

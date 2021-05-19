import React from 'react';
import PropTypes from 'prop-types';

export default function Messages({ ...message }) {
  return (
    <div>
      <h1>{message.text}</h1>
    </div>
  );
}

Messages.propTypes = {
  message: PropTypes.any
};

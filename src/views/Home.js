import React from 'react';
import PropTypes from 'prop-types';

export default function Home({ user }) {
  return (
    <div>
      {
      user
        ? <h1 className='greeting'>Welcome, {user.fullName}!</h1>
        : <h1 className='greeting'>Please sign in to Slacker</h1>
      }
    </div>
  );
}

Home.propTypes = {
  user: PropTypes.any
};

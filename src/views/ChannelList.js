// ChannelList.js
// Displays within sidebar nav

import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const ChannelList = ({ channelArr }) => {
  const history = useHistory();

  // const handleClick = (e) => {
  //   history.push(`channel/${channel.firebaseKey}`)
  // };

  return (
    channelArr.map((channel, key) => <li
      className='channel-list'
      key={key}
      value={channel.name}
      onClick={() => history.push(`${channel.firebaseKey}`)}>#{channel.name}</li>)
  );
};

ChannelList.propTypes = {
  channelArr: PropTypes.array
};

export default ChannelList;

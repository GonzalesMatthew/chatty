// ChannelList.js
// Displays within sidebar nav

import React from 'react';

const ChannelList = ({ channelArr }) => {
  const handleClick = (e) => {
    console.warn(e.target.textContent);
  };

  return (
    channelArr.map((channel, key) => <li
      className='channel-list' key={key}
      value={channel.name} onClick={handleClick}>#{channel.name}</li>)
  );
};

export default ChannelList;

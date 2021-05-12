// ChannelList.js
// Displays within sidebar nav

import React from 'react';

const ChannelList = ({ channelArr }) => (
  channelArr.map((channel, key) => <li
    className='channel-list' key={key}> {channel.name}</li>)
);

export default ChannelList;

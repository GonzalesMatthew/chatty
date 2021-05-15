// ChannelList.js
// Displays within sidebar nav

import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import { deleteChannel } from '../helpers/data/channelData';

const ChannelList = ({
  channelArr,
  setChannelArr
}) => {
  const history = useHistory();
  const deleteClick = (e) => {
    deleteChannel(e.target.id).then((newChannelArr) => {
      setChannelArr(newChannelArr);
    });
  };

  return (
    channelArr.map((channel, key) => <li
      className='channel-list' key={key}
      value={channel.name} onClick={() => (history.push(`${channel.firebaseKey}`))}>
        #{channel.name}
        <span>
          <Popup trigger={<i className='fa fa-ellipsis-v' aria-hidden='true'
          id={channel.firebaseKey}></i> } position="right center">
          </Popup>
        </span>
 
  );
};

ChannelList.propTypes = {
  channelArr: PropTypes.array,
  setChannelArr: PropTypes.func
};

export default ChannelList;

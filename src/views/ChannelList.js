// ChannelList.js
// Displays within sidebar nav

import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import { deleteChannel } from '../helpers/data/channelData';
import { deleteMessage, getChannelMessages } from '../helpers/data/messageData';
// import userEvent from '@testing-library/user-event';

const ChannelList = ({
  user,
  channelArr,
  setChannelArr,
  setModal
}) => {
  const history = useHistory();
  const deleteClick = (e) => {
    if (e.target.id) {
      getChannelMessages(e.target.id).then((messageArr) => {
        for (let i = 0; i < messageArr.length; i += 1) {
          deleteMessage(messageArr[i].firebaseKey);
        }
        deleteChannel(e.target.id).then((newChannelArr) => {
          setChannelArr(newChannelArr);
        });
      });
    }
  };

  return (
    channelArr.map((channel, key) => <li
      className='channel-list' key={key}
      value={channel.name} onClick={() => (history.push(`/messages/${channel.firebaseKey}`))}>
        #{channel.name}
        <span>
          { user.uid === channel.uid
            ? <Popup className='channel-pop-up' trigger={<i className='fa fa-ellipsis-v' aria-hidden='true'
              id={channel.firebaseKey}></i> } position='left center'>
              <ul>
                <li onClick={deleteClick} id={channel.firebaseKey}>Delete Channel</li>
                <li onClick={() => {
                  history.push(`/channel/${channel.firebaseKey}`);
                  setModal(true);
                }} id={channel.firebaseKey}>Update Channel</li>
              </ul>
          </Popup> : ''}
        </span>
        </li>)
  );
};

ChannelList.propTypes = {
  user: PropTypes.any,
  channelArr: PropTypes.array,
  setChannelArr: PropTypes.func,
  setModal: PropTypes.func
};

export default ChannelList;

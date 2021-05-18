import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Messages from '../components/Messages';
import { getChannelMessages } from '../helpers/data/messageData';
import MessageInput from '../components/MessageInput';

export default function MessageView({ user }) {
  const [channelMessages, setChannelMessages] = useState([]);
  const { firebaseKey } = useParams();
  const [userIds, setUserIds] = useState([]);
  useEffect(() => {
    getChannelMessages(firebaseKey).then(setChannelMessages);
    setUserIds(channelMessages.map((message) => message.uid));
    console.warn(userIds);
  }, [firebaseKey]);
  return (
    <div>
      {channelMessages.map((message) => (
        <Messages
        key={message.firebaseKey}
        userIds = {userIds}
        setChannelMessages={setChannelMessages}
        {...message}
        />
      ))}
      <MessageInput user={user} setChannelMessages={setChannelMessages} messageId={null} text={''}/>
    </div>
  );
}

MessageView.propTypes = {
  user: PropTypes.any
};

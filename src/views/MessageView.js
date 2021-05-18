import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Messages from '../components/Messages';
import { getChannelMessages } from '../helpers/data/messageData';
import MessageInput from '../components/MessageInput';

export default function MessageView({ user }) {
  const [channelMessages, setChannelMessages] = useState([]);
  const { firebaseKey } = useParams();

  useEffect(() => {
    getChannelMessages(firebaseKey).then(setChannelMessages);
  }, [firebaseKey]);

  useEffect(() => {
    getChannelMessages(firebaseKey).then(setChannelMessages);
  }, [channelMessages]);

  return (
    <div>
      {channelMessages.map((message) => (
        <Messages
        key={message.firebaseKey}
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

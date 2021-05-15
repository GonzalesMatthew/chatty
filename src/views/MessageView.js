import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Messages from '../components/Messages';
import { getChannelMessages } from '../helpers/data/messageData';

export default function MessageView() {
  const [channelMessages, setchannelMessages] = useState([]);
  const { firebaseKey } = useParams();
  useEffect(() => {
    getChannelMessages(firebaseKey).then(setchannelMessages);
  }, []);
  return (
    <div>
      {channelMessages.map((message) => (
        <Messages
        key={message.firebaseKey}
        {...message}
        />
      ))}
    </div>
  );
}

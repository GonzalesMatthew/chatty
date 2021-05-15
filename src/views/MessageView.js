import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Messages from '../components/Messages';
import { getChannelMessages } from '../helpers/data/messageData';

export default function MessageView() {
  const [channelMessages, setChannelMessages] = useState([]);
  const { firebaseKey } = useParams();
  const [userIds, setUserIds] = useState([]);
  useEffect(() => {
    getChannelMessages(firebaseKey).then(setChannelMessages);
    setUserIds(channelMessages.map((message) => message.uid));
  }, [firebaseKey]);
  return (
    <div>
      {channelMessages.map((message) => (
        <Messages
        key={message.firebaseKey}
        userIds = {userIds}
        {...message}
        />
      ))}
    </div>
  );
}

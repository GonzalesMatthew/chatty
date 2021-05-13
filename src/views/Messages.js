import React from 'react';
import PropTypes from 'prop-types';
import MessageCard from '../components/MessageCard';

function Messages({ messages, setMessages, user }) {
  return (
    <div className = "card-container">
      {messages.map((messageInfo) => (
        <MessageCard
          key={messageInfo.firebaseKey}
          firebaseKey={messageInfo.firebaseKey}
          fullName={messageInfo.fullName}
          channelId={messageInfo.channelId}
          text={messageInfo.text}
          date={messageInfo.date}
          uid={messageInfo.uid}
          setMessages={setMessages}
          user={user}
        />
      ))}
    </div>
  );
}

Messages.propTypes = {
  messages: PropTypes.array.isRequired,
  setMessages: PropTypes.func.isRequired,
  user: PropTypes.any
};

export default Messages;

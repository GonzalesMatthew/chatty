import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Messages from '../views/Messages';
// import { addMessage, updateMessage } from '../helpers....';

const MessageForm = (
  {
    formTitle,
    setMessages,
    fullName,
    uid,
    user,
    firebaseKey,
    channelId
  }
) => {
  const [message, setMessage] =useState({
    fullName: fullName || '',
    firebaseKey: firebaseKey || null,
    uid: user.uid,
    chennelId: channelId || ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.firebaseKey) {
      console.warn('You are editing a message');
      // updateMessage(message).then((messageArray) => set Messages(messageArray));
    } else {
      console.warn('You created a new message');
      // addMessage(message).then((response) => {
      //   setMessages(response);
      // });
    }
  };

  return (
    <>
      <div className='message-edit'>
        <form
          id='editMessageForm'
          autoComplete='off'
          onSubmit={handleSubmit}>
            <h2>{formTitle}</h2>
            <label></label>
        </form>
      </div>
    </>
  );
};

MessageForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setMessages: PropTypes.func,
  fullName: PropTypes.string,
  uid: PropTypes.string,
  user: PropTypes.any,
  firebaseKey: PropTypes.string,
  channelId: PropTypes.string.
};

export default MessageForm;

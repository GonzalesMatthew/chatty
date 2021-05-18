import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  Button,
  Card,
  CardText,
  CardTitle
} from 'reactstrap';
import { deleteMessage } from '../helpers/data/messageData';
import { getUser } from '../helpers/data/userData';
import MessageInput from './MessageInput';

export default function Messages({ userIds, setChannelMessages, ...message }) {
  const [editing, setEditing] = useState(false);

  // ------------------
  // get specific user:
  // create userObj hook:
  const [userObj, setUserObj] = useState({});
  // look for match to message's user:
  for (let i = 0; i < userIds.length; i += 1) {
    if (userIds[i] === message.uid) {
      const userId = userIds[i];
      console.warn(userId);
      // get userObj:
      getUser(userId).then(setUserObj);
    }
  }
  console.warn(userObj);
  // ------------------

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteMessage(message.firebaseKey, message.channelId).then(setChannelMessages);
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      default:
        console.warn('Nothing selected');
    }
  };

  return (
    <Card body>
      <CardTitle tag = "h5">{message.uid}</CardTitle>
      <CardText>{message.text}</CardText>
      <CardText>{message.date}</CardText>
      <Button onClick={() => handleClick('delete')}>Delete</Button>
      <Button onClick={() => handleClick('edit')}>
        {editing ? 'Cancel' : 'Edit'}
      </Button>
      {
        editing && <MessageInput
          text={message.text}
          messageId={message.firebaseKey}
          user={message.uid}
          setChannelMessages={setChannelMessages}
        />
      }
    </Card>
  );
}

Messages.propTypes = {
  message: PropTypes.any,
  userIds: PropTypes.array,
  setChannelMessages: PropTypes.any
};

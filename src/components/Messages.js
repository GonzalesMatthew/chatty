import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  Button,
  Card,
  CardText,
  CardTitle
} from 'reactstrap';
import { deleteMessage, updateMessage } from '../helpers/data/messageData';
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

  // ----------------------
  // OBJ TO UPDATE MESSAGE:
  const [messageObj] = useState({
    firebaseKey: message.firebaseKey || null,
    date: message.date || '',
    channelId: message.channelId || '',
    text: message.text || '',
    uid: message.uid
  });
  // ------------------

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteMessage(message.firebaseKey, message.channelId).then(setChannelMessages);
        break;
      case 'edit':
        console.warn('You would like to edit');
        // toggle edit true/false:
        setEditing((prevState) => !prevState);
        // ------------------
        // call MessageInput:
        // update message:
        updateMessage(messageObj, message.channelId).then(setChannelMessages);
        // API BELOW FOR REFERENCE:
        // const updateMessage = (messageObj, channelId) => new Promise((resolve, reject) => {
        //   axios
        //     .patch(`${dbUrl}/messages/${messageObj.firebaseKey}.json`, messageObj)
        //     .then(() => resolve(getChannelMessages(channelId)))
        //     .catch((error) => reject(error));
        // });
        // ------------------
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

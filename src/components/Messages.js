import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import {
  Button,
  Card,
  CardText,
  CardTitle
} from 'reactstrap';
import { deleteMessage } from '../helpers/data/messageData';
import { getUserbyUid } from '../helpers/data/userData';
import MessageInput from './MessageInput';

export default function Messages({ setChannelMessages, ...message }) {
  const [editing, setEditing] = useState(false);
  const [localUserObj, setLocalUserObj] = useState({});

  useEffect(() => {
    getUserbyUid(message.uid).then((resp) => setLocalUserObj(Object.values(resp.data)));
  }, []);

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
    <Card id="message-card" body>
      <div id="user-info">
      <img id="user-img" src={localUserObj[0]?.profileImage} />
      <CardTitle tag = "h5">{localUserObj[0]?.fullName}</CardTitle>
      </div>
      <CardText id="message-text">{message.text}</CardText>
      <CardText>{moment(message.date).fromNow()}</CardText>
      <div id="card-btn-div">
      <Button id="delete-btn" onClick={() => handleClick('delete')}>Delete</Button>
      <Button id="edit-btn" onClick={() => handleClick('edit')}>
        {editing ? 'Cancel' : 'Edit'}
      </Button>
      </div>
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
  message: PropTypes.object,
  setChannelMessages: PropTypes.any
};

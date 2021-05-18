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
    <Card body>
      <img src={localUserObj[0]?.profileImage} width='50px'/>
      <CardTitle tag = "h5">{localUserObj[0]?.fullName}</CardTitle>
      <CardText>{message.text}</CardText>
      <CardText>{moment(message.date).fromNow()}</CardText>
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
  message: PropTypes.object,
  setChannelMessages: PropTypes.any
};

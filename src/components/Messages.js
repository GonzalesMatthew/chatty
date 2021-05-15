import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardText,
  CardTitle
} from 'reactstrap';

export default function Messages({ userIds, ...message }) {
  const [editing, setEditing] = useState(false);
  console.warn(userIds);
  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        console.warn('You would like to delete');
        // Delete API function goes here:
        //  deleteMessage(firebaseKey)
        //  .then((messageArray) => setMessages(messageArray));
        break;
      case 'edit':
        console.warn('You would like to edit');
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
        {editing ? 'Close' : 'Edit'}
      </Button>
      {
        editing && console.warn('Edit mode on')
        // <MessageForm
        //   formTitle='Edit Message'
        //   setMessages={setMessages}
        //   firebaseKey={firebaseKey}
        //   text={text}
        //   uid={uid}
        //   channelId={channelId}
        //   date={date}
        //   fullName={fullName}
        //   user={user}
        // />
      }
    </Card>
  );
}

Messages.propTypes = {
  message: PropTypes.any,
  userIds: PropTypes.array
};

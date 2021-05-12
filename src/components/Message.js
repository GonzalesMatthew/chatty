import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardText,
  CardTitle
} from 'reactstrap';

const Message = (
  {
    firebaseKey,
    uid,
    channelId,
    text,
    date
  }
) => {
  const [editing, setEditing] = useState(false);

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
      <CardTitle tag = "h5"></CardTitle>
      <CardText></CardText>
      <Button onClick={() => handleClick('delete')}>Delete</Button>
      <Button onClick={() => handleClick('edit')}>Edit</Button>
    </Card>
  );
};

Message.propTypes = {

};

export default Message;

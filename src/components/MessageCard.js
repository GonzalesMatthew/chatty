import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardText,
  CardTitle
} from 'reactstrap';
// import MessageForm from '../components/MessageForm';
// import { deleteMessage } from '../helpers/data/';

const MessageCard = ({
  firebaseKey,
  fullName,
  uid,
  channelId,
  text,
  date,
  setMessages,
  user
}) => {
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
  // testing
  console.warn(firebaseKey);
  console.warn(channelId);
  console.warn(uid);
  console.warn(setMessages);
  // end testing
  return (
    <Card body>
      <CardTitle tag = "h5">{fullName}</CardTitle>
      <CardText>{text}</CardText>
      <CardText>{date}</CardText>
      <CardText>{user.uid}</CardText>
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
};

MessageCard.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
  channelId: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  setMessages: PropTypes.func,
  user: PropTypes.any
};

export default MessageCard;

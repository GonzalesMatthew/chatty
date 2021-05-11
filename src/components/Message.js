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
  const [postedMessage, setPostedMessage] = useState('');

  

  return (
    <Card body >
      <CardTitle tag = "h5"></CardTitle>
      <CardText></CardText>
      <Button>Delete</Button>
      <Button>Edit</Button>
    </Card>
  );
};

Message.propTypes = {

};

export default Message;

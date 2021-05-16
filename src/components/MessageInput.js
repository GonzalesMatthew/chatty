import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Form, InputGroup, Input, InputGroupAddon, Button
} from 'reactstrap';
import PropTypes from 'prop-types';
import { createMessage } from '../helpers/data/messageData';

export default function MessageInput({ user, setChannelMessages }) {
  const { firebaseKey } = useParams();
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const messageObj = {
      channelId: firebaseKey,
      date: Date.now(),
      text: message,
      uid: user.uid,
    };
    setMessage('');
    createMessage(messageObj).then(setChannelMessages);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup>
        <Input
          type='text'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <InputGroupAddon addonType='append'>
          <Button type='submit' color='primary'>
            Send
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </Form>
  );
}

MessageInput.propTypes = {
  user: PropTypes.any,
  setChannelMessages: PropTypes.any,
};

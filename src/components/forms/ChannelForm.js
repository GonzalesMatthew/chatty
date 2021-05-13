import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Form, FormGroup,
  Label, Input

} from 'reactstrap';
import { createChannel } from '../../helpers/data/channelData';

const ChannelForm = ({
  setSubmitFunc,
  modal,
  setModal,
  setChannelArr
}) => {
  const [formChannel, setFormChannel] = useState({
    name: ''
  });
  const [isValid, setIsValid] = useState('');
  const [formPlaceholder, setFormPlaceholder] = useState('Enter channel name');

  const submitRef = useRef(null);
  useEffect(() => {
    setSubmitFunc(submitRef);
  }, [submitRef.current]);

  const handleInputChange = (e) => {
    setFormChannel((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
    if (e.target.value) {
      setIsValid('');
    }
  };

  const handleSubmit = () => {
    console.warn('handleSubmit in ChannelForm');
    const channelObj = {
      name: formChannel.name
    };
    if (channelObj.name) {
      createChannel(channelObj).then((newChannelArr) => {
        setChannelArr(newChannelArr);
      });
      setModal(!modal);
    } else {
      setFormPlaceholder('Please enter a channel name');
      setIsValid('false');
    }
  };
  submitRef.current = handleSubmit;

  return (
  <>
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for='channelName'>Channel Name</Label>
        <Input type='text' name='name' placeholder={formPlaceholder}
          value={formChannel.name} onChange={handleInputChange}
          invalid={isValid} />
      </FormGroup>
    </Form>
  </>
  );
};

ChannelForm.propTypes = {
  setSubmitFunc: PropTypes.func,
  modal: PropTypes.bool,
  setModal: PropTypes.func,
  setChannelArr: PropTypes.func
};

export default ChannelForm;

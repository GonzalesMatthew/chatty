import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Form, FormGroup,
  Label, Input

} from 'reactstrap';

const ChannelForm = ({
  setSubmitFunc,
  modal,
  setModal
}) => {
  const [formChannel, setFormChannel] = useState({
    name: ''
  });

  const submitRef = useRef(null);
  useEffect(() => {
    setSubmitFunc(submitRef);
  }, [submitRef.current]);

  const handleInputChange = (e) => {
    setFormChannel((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = () => {
    console.warn('handleSubmit in ChannelForm');
    setModal(!modal);
    const channelObj = {
      name: formChannel.name
    };
    console.warn(channelObj);
  };
  submitRef.current = handleSubmit;

  return (
  <>
    <Form onSubmit= {handleSubmit}>
      <FormGroup>
        <Label for='channelName'>Channel Name</Label>
        <Input type='text' name='name' placeholder='Enter channel name'
          value={formChannel.name} onChange={handleInputChange}/>
      </FormGroup>
    </Form>
  </>
  );
};

ChannelForm.propTypes = {
  setSubmitFunc: PropTypes.func,
  modal: PropTypes.bool,
  setModal: PropTypes.func
};

export default ChannelForm;

import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Form, FormGroup,
  Label, Input

} from 'reactstrap';

const ChannelForm = ({
  currentChannel,
  setCurrentChannel,
  setSubmitFunc,
  modal,
  setModal
}) => {
  const submitRef = useRef(null);
  useEffect(() => {
    setSubmitFunc(submitRef);
  }, [submitRef.current]);

  const handleInputChange = (e) => {
    setCurrentChannel((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
    console.warn(e.target.name);
  };

  const handleSubmit = () => {
    console.warn('handleSubmit in ChannelForm');
    setModal(!modal);
    const channelObj = {
      name: currentChannel.name
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
          value={currentChannel.name} onChange={handleInputChange}/>
      </FormGroup>
    </Form>
  </>
  );
};

ChannelForm.propTypes = {
  currentChannel: PropTypes.object,
  setCurrentChannel: PropTypes.func,
  setSubmitFunc: PropTypes.func,
  modal: PropTypes.bool,
  setModal: PropTypes.func
};

export default ChannelForm;

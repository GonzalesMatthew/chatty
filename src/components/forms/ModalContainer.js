// React boilerplate modal

import React, { useState } from 'react';
import {
  Button, Modal, ModalHeader,
  ModalBody, ModalFooter
} from 'reactstrap';
import ChannelForm from './ChannelForm';

const ModalContainer = () => {
  const [submitFunc, setSubmitFunc] = useState();
  const submitForm = () => {
    if (submitFunc) {
      submitFunc.current();
    }
  };
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };

  return (
    <div className='modal-container'>
      <li className='nav-item channel-create' onClick={toggle}>Add Channel</li>
      <Modal isOpen={modal} toggle={toggle} className='channel-form-modal'>
        <ModalHeader toggle={toggle}>Add Channel</ModalHeader>
        <ModalBody>
          <ChannelForm
            setSubmitFunc={setSubmitFunc}
            modal={modal} setModal={setModal} />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={submitForm}>Submit</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalContainer;

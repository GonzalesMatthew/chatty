// React boilerplate modal

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Modal, ModalHeader,
  ModalBody, ModalFooter
} from 'reactstrap';
import ChannelForm from './ChannelForm';

const ModalContainer = ({ setChannelArr }) => {
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
      <div className='nav-item channel-create' onClick={toggle}>Add Channel</div>
      <Modal isOpen={modal} toggle={toggle} className='channel-form-modal'>
        <ModalHeader toggle={toggle}>Add Channel</ModalHeader>
        <ModalBody>
          <ChannelForm
            setSubmitFunc={setSubmitFunc}
            modal={modal} setModal={setModal}
            setChannelArr={setChannelArr} />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={submitForm}>Submit</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

ModalContainer.propTypes = {
  setChannelArr: PropTypes.func
};

export default ModalContainer;

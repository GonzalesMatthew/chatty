// React boilerplate modal

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Modal,
  ModalBody, ModalFooter
} from 'reactstrap';
import ChannelForm from './ChannelForm';

const ModalContainer = ({
  user,
  setChannelArr,
  modal,
  setModal
}) => {
  const [submitFunc, setSubmitFunc] = useState();
  const submitForm = () => {
    if (submitFunc) {
      submitFunc.current();
    }
  };
  const toggle = () => {
    setModal(!modal);
  };

  return (
    <div className='modal-container'>
      <div className='nav-item channel-create' onClick={toggle}>Add Channel</div>
      <Modal isOpen={modal} toggle={toggle} className='channel-form-modal'>
        <ModalBody>
          <ChannelForm
            user={user}
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
  user: PropTypes.any,
  setChannelArr: PropTypes.func,
  modal: PropTypes.bool,
  setModal: PropTypes.func
};

export default ModalContainer;

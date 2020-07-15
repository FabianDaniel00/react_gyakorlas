import React, { Component, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

class CustomModal extends Component {
    render () {
      const [show, setShow] = useState(true);
      const handleClose = () => setShow(false);
      const { count } = this.props;
      return (
        <>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Warning!!!</Modal.Title>
            </Modal.Header>
            <Modal.Body>The number is Superheroes is <div className="font-weight-bold">{ count }</div>.</Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                OK
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
  }

  export default CustomModal;
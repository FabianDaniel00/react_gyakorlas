import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class CustomModal extends Component {
  state = {
    show: true
  }

  render () {
    const { show } = this.state;
    const { count, popup } = this.props;
    return (
      <>
        <Modal show={ show } onHide={ show }>
          <Modal.Header closeButton>
            <Modal.Title>Warning!</Modal.Title>
          </Modal.Header>
          <Modal.Body>The number of Superheroes is { count }</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => this.setState({ show: false }), () => popup()}>
              OK
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default CustomModal;
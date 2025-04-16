import React, { useState } from 'react'
import Modal from "react-bootstrap/Modal";


const ModalLayout = (show) => {
  return (
    <div>
      <Modal show={show}>
        <Modal.Header  >
          <Modal.Title>{show.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{show.body}</Modal.Body>
      </Modal>
    </div>
  );
}

export default ModalLayout
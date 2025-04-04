import React from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalLayout = (header,title,body) => {
     const [show, setShow] = useState(false);
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
  return (
    <div>
      <Button className="nav-btn" onClick={handleShow}>
        {header}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
      </Modal>
    </div>
  );
}

export default ModalLayout
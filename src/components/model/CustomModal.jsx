import React from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

import { useBlog } from "../../context/BlogProvider";

const CustomModal = () => {
  const { showModal, handleCloseModal } = useBlog();

  return (
    <Modal
      show={showModal}
      onHide={handleCloseModal}
      backdrop="static"
      centered
      size="lg"
      padding="3"
    >
      <Modal.Header closeButton className=" mb-5 ">
        <Modal.Title>Login to continue</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <div className="d-flex justify-content-start "> */}
        <a style={{ marginLeft: "100px" }}>image</a>

        {/* Your login form components go here */}
        <p className="text-center fs-4 mt-5">
          I'll be pleased if you share your thoughts
        </p>
      </Modal.Body>
      <Modal.Footer className="justify-content-center flex-column border-0">
        <Link
          to="/login"
          style={{
            color: "#000",
            textAlign: "center",
            width: "80%",
            backgroundColor: "#ddd",
          }}
          onClick={() => handleCloseModal()}
          className="btn p-3"
        >
          {/* <Button
            // style={{ width: "80%" }}
            className="p-3"
          >
            
          </Button> */}
          login
        </Link>

        {/* close modal and go to create an accout page  */}
        <Link
          to="/singup"
          onClick={() => handleCloseModal()}
          className="mt-2 mb-5"
          style={{ cursor: "pointer" }}
        >
          singup
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;

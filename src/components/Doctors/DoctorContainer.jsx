import React, { useState } from "react";
import DoctorCards from "./DoctorCards";
import { doctorData } from "../../helpers/data";
import { Container, Row, Button, Modal, Form } from "react-bootstrap";
import ContainerStyle from "./DoctorContainer.module.scss";

function DoctorContainer() {
  const [select, setSelect] = useState(null);
  const handleSelect = (doctor) => {
    setSelect(doctor);
  };
  const closeModal = () => {
    setSelect(null);
  };
  return (
    <Container>
      <h3 className={ContainerStyle.title}>OUR DOCTORS</h3>
      <Row xs={2} md={4} lg={6}>
        {doctorData.map((doctor) => (
          <DoctorCards
            key={doctor.id}
            name={doctor.name}
            department={doctor.dep}
            image={doctor.img}
            onClick={() => handleSelect(doctor)}
          />
        ))}
      </Row>
      {select && (
        <Modal
          show={!!select}
          onHide={closeModal}
          className={ContainerStyle.modal}
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title className={ContainerStyle.modalTitle}>
              Appointment for {select.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Label className={ContainerStyle.modalText}>
              Patient Name
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Name"
              className={ContainerStyle.modalForm}
            />
            <br />
            <Form.Label className={ContainerStyle.modalText}>
              Day & Time
            </Form.Label>
            <Form.Control
              type="datetime-local"
              className={ContainerStyle.modalForm}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary">Submit</Button>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
}

export default DoctorContainer;

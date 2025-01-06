import React, { useState } from "react";
import DoctorCards from "./DoctorCards";
import { doctorData } from "../../helpers/data";
import { Container, Row, Button, Modal, Form } from "react-bootstrap";
import ContainerStyle from "./DoctorContainer.module.scss";

function DoctorContainer({ setAppointments }) {
  const [select, setSelect] = useState(null);
  const [patientName, setPatientName] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");

  const handleSelect = (doctor) => {
    setSelect(doctor);
  };

  const closeModal = () => {
    setSelect(null);
  };

  const handleSubmit = () => {
    const newAppointment = {
      id: Math.random(),
      patient: patientName,
      day: appointmentDate,
      doctor: select.name,
      consulted: false,
    };
    setAppointments((prevAppointments) => [
      ...prevAppointments,
      newAppointment,
    ]);
    closeModal();
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
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
            />
            <br />
            <Form.Label className={ContainerStyle.modalText}>
              Day & Time
            </Form.Label>
            <Form.Control
              type="datetime-local"
              className={ContainerStyle.modalForm}
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
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

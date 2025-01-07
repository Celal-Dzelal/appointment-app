import React, { useState } from "react";
import DoctorCards from "./DoctorCards";
import { doctorData } from "../../helpers/data";
import { Container, Row, Button, Modal, Form } from "react-bootstrap";
import ContainerStyle from "./DoctorContainer.module.scss";

function DoctorContainer({ setAppointments }) {
  const [select, setSelect] = useState(null); //! Modalın açılması için seçilen doktoru tutuyoruz. Başlangıçta null, çünkü seçim yapılmadı.

  const [patientName, setPatientName] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  //! Hasta adı ve tarih bilgilerini saklamak için state'ler tanımladık. Başlangıç değerleri boş.

  const handleSelect = (doctor) => {
    //! Seçilen doktorun bilgilerini modalda göstermek için state'i güncelliyoruz.
    setSelect(doctor);
  };

  const closeModal = () => {
    //! Modal kapandığında seçimi sıfırlıyoruz.
    setSelect(null);
  };

  const handleSubmit = () => {
    //! Yeni bir randevu oluşturup mevcut randevular listesine ekliyoruz.
    const newAppointment = {
      id: Math.random(),
      patient: patientName,
      day: appointmentDate,
      doctor: select.name,
      consulted: false,
    };
    setAppointments((prevAppointments) => [
      //! useState ile oluşturulan bir state güncelleme fonksiyonudur. Burada setAppointments, mevcut randevu listesini günceller. State güncellemesi sırasında önceki randevu listesini (prevAppointments) temsil eder. Bu, bir callback fonksiyonu olarak sağlanır ve önceki state'e erişimi garanti eder.
      ...prevAppointments,
      //! JavaScript'teki spread operatörü (...) ile mevcut randevu listesindeki tüm öğeler kopyalanır. Bu, eski listeyi koruyarak yeni bir dizi oluşturur.
      newAppointment,
      //! Yeni oluşturulan randevu objesi, mevcut listeye eklenir. Böylece eski randevular korunurken yeni randevu da listeye dahil edilir.
    ]);
    closeModal();
  };

  return (
    <Container className={ContainerStyle.container}>
      <h3 className={ContainerStyle.title}>OUR DOCTORS</h3>
      <Row xs={2} md={4} lg={6}>
        {doctorData.map((doctor) => (
          //! Doktor listesini map ile gezip her doktor için bir kart oluşturuyoruz. Tıklama ile ilgili modal açılıyor.
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
        //? Bu yapı, kısa devre değerlendirme (short-circuit evaluation) ilkesine dayanır. select bir değer içeriyorsa (örneğin bir doktor seçildiğinde), && operatörü ikinci ifadeyi çalıştırır ve <Modal> bileşenini döndürür.
        //! Seçim yapılmışsa modalı göstermek için `select &&` kullanıyoruz.
        <Modal //! Modal bileşeni seçim durumunda gösterilir. `show` ve `onHide` özellikleri ile kontrol ediliyor.
          show={!!select}
          //!!!select şu işlemi yapar: İlk !: select'in tersini alır (örneğin, null için true, bir değer varsa false). İkinci !: Tersini tekrar alarak select'in Boolean karşılığını üretir. Örneğin: select bir doktor objesi içeriyorsa, !!select true döner.select null ise, !!select false döner.
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
              //! Hasta adını almak için bir metin girişi. `value` ve `onChange` ile state'e bağlanıyor.
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
              //! Randevu tarihi için bir tarih/saat girişi. Hasta adı ile aynı şekilde state'e bağlanıyor.
              type="datetime-local"
              className={ContainerStyle.modalForm}
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleSubmit}>
              {/*//! Onay tıklandığında handleSubmit çalışır ve randevu kaydedilir. */}
              Submit
            </Button>
            <Button variant="secondary" onClick={closeModal}>
              {/*//! Modalı kapatmak için closeModal çalıştırılır. */}
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
}

export default DoctorContainer;

import "./App.scss";
import Appoinment from "./components/Appoinment/Appoinment";
import DoctorContainer from "./components/Doctors/DoctorContainer";
import Header from "./components/Header/Header";
import { appointmentData } from "./helpers/data";
import React, { useState } from "react";

function App() {
  const [appointments, setAppointments] = useState(appointmentData);
  return (
    <div>
      <Header />
      <DoctorContainer setAppointments={setAppointments} />
      <Appoinment
        appointments={appointments}
        setAppointments={setAppointments}
      />
    </div>
  );
}

export default App;

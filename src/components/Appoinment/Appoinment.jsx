import AppoinmentStyle from "./Appoinment.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

function Appoinment({ appointments, setAppointments }) {
  const handleDelete = (id) => {
    const updatedAppointments = appointments.filter(
      (appointment) => appointment.id !== id
    );
    setAppointments(updatedAppointments);
  };

  return (
    <>
      <h2 className={AppoinmentStyle.mainTitle}>Appoinment List</h2>
      <div>
        {appointments.map((appointment) => (
          <div key={appointment.id} className={AppoinmentStyle.container}>
            <div className={AppoinmentStyle.namesTitle}>
              <h3>{appointment.patient}</h3>
              <h4>{appointment.doctor}</h4>
            </div>

            <div className={AppoinmentStyle.dateTime}>
              <h4>{new Date(appointment.day).toLocaleDateString()}</h4>
              <h4>{new Date(appointment.day).toLocaleTimeString()}</h4>
            </div>

            <FontAwesomeIcon
              icon={faCircleXmark}
              className={AppoinmentStyle.icon}
              onClick={() => handleDelete(appointment.id)}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Appoinment;

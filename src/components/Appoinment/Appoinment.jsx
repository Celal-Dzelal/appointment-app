import React from "react";
import AppoinmentStyle from "./Appoinment.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

function Appoinment() {
  return (
    <>
      <h2 className={AppoinmentStyle.mainTitle}>Appoinment List</h2>
      <div className={AppoinmentStyle.container}>
        <div className={AppoinmentStyle.namesTitle}>
          <h3>Patient Name</h3>
          <h4>Doctor Name</h4>
        </div>
        <div className={AppoinmentStyle.dateTime}>
          <h4>Date</h4>
          <h4>Time</h4>
        </div>
        <FontAwesomeIcon
          icon={faCircleXmark}
          className={AppoinmentStyle.icon}
        />
      </div>
    </>
  );
}

export default Appoinment;

import "./App.scss";
import Appoinment from "./components/Appoinment/Appoinment";
import DoctorContainer from "./components/Doctors/DoctorContainer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <DoctorContainer />
      <Appoinment />
    </div>
  );
}

export default App;

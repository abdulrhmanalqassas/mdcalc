import "./App.css";
import { Routes, Route } from "react-router-dom";
import QuestionsForm from "./components/QuestionsForm";
import SIRSForm from "./components/SIRSForm";
import ISTHForm from "./components/ISTHForm";
import Khorana from "./components/khorana";
import HASForm from "./components/HASForm";
import Nav from "./nav";
function App() {
  return (
    <div className=" bg-gradient-to-r from-sky-500 to-indigo-500">
      <Nav></Nav>
      <Routes>
        <Route path="/*" element={<QuestionsForm></QuestionsForm>} />
        <Route path="/SIRS" element={<SIRSForm />} />
        <Route path="/ISTH" element={<ISTHForm />} />
        <Route path="/Khorana" element={<Khorana />} />
        <Route path="/HAS" element={<HASForm />} />
      </Routes>
    </div>
  );
}

export default App;

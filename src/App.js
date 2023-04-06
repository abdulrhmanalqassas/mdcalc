import "./App.css";
import { Routes, Route } from "react-router-dom";
import QuestionsForm from "./components/QuestionsForm";
import SIRSForm from "./components/SIRSForm";
import ISTHForm from "./components/ISTHForm";
import Khorana from "./components/khorana";
import HASForm from "./components/HASForm";
import Hex from "./components/Hex";
import Nav from "./nav";
import Hero from "./Home";
function App() {
  return (
    <div className=" bg-gradient-to-r from-[#c39bcf] to-[#eae5eb]">
      <Nav></Nav>
      <Routes>
        
        <Route path="/*" element={<Hero></Hero>} />
        <Route path="/hex" element={<Hex></Hex>} />
        <Route path="/question" element={<QuestionsForm></QuestionsForm>} />
        
        <Route path="/SIRS" element={<SIRSForm />} />
        <Route path="/ISTH" element={<ISTHForm />} />
        <Route path="/Khorana" element={<Khorana />} />
        <Route path="/HAS" element={<HASForm />} />
      </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
import Homepage from "./Pages/Homepage";
import Testlang from "./Pages/Testing/Testlang";
import FormTest from "./Pages/Testing/FormTest.tsx";
import Test1 from "./Pages/Test1";
import Test2 from "./Pages/Test2";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />{" "}
          <Route path="/test1" element={<Test1 />} />{" "}
          <Route path="/test2" element={<Test2 />} />{" "}
          <Route path="/testlang" element={<Testlang />} />{" "}
          <Route path="/formtest" element={<FormTest />} />{" "}
        </Routes>{" "}
      </div>{" "}
    </BrowserRouter>
  );
}

export default App;

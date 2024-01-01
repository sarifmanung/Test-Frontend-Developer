import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./Pages/Homepage";
import Testlang from "./Pages/Testlang";
import Test1 from "./Pages/Test1";
import Test2 from "./Pages/Test2";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />{" "}
          <Route path="/Testlang" element={<Testlang />} />{" "}
          <Route path="/test1" element={<Test1 />} />{" "}
          <Route path="/test2" element={<Test2 />} />{" "}
        </Routes>{" "}
      </div>{" "}
    </BrowserRouter>
  );
}

export default App;

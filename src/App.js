import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Quiz from "./Pages/Quiz";
import NavComp from "./Components/Layout/NavComp";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavComp />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/quiz" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

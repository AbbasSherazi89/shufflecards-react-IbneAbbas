import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

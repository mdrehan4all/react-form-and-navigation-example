//import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
//import Button from '@mui/material/Button';
import Login from './component/Login';
import Notfound from "./component/Notfound";
import Signup from "./component/Signup";

function App() {
  // path="/" element={<Notfound />}
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route >
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

import "./App.css";
import AddUserData from "./pages/user/AddUserData";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateUser from "./pages/user/UpdateUser";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddUserData />} />
          <Route path='/UpdateUser' element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

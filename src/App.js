
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './Components/Navbar';
import {Employees} from './Components/Employees'
import {Login} from './Components/Login'
import { Register } from './Components/Register'; 
function App() {
  return (
    <div className="App">
           <Navbar></Navbar>
     <Routes>
       <Route path='/'></Route>
       <Route path='/Login' element={<Login/>}></Route>
       <Route path='/Register' element={<Register/>}></Route>
       <Route path='/Employees' element={<Employees/>}></Route>
     </Routes>
    </div>
  );
}


export default App;

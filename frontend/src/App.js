import logo from './logo.svg';
import './App.css';
import Form from './component/Form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Baloon from './component/Baloon';

function App() {
  return (
 
 <BrowserRouter>
  
 <Routes>
 <Route path='/' element={<Form/>}/>
 <Route path='/baloon' element={<Baloon/>}/>
 </Routes>
 </BrowserRouter>
  );
}

export default App;

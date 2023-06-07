import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Medical from './pages/MedicalHistory'
import Edit from './components/EditMedical'
import Form from './components/Form'
import Login from './pages/LoginPage'
import View from './components/ViewMedical'
import Home from './pages/Home'
export default function App() {

  return (
  <div className='App'>
    <Router>
  <Routes>
    <Route path="/" element={<Medical/>}/>
    <Route path="/edit/:id" element={<Edit/>}/>
    <Route path="/add" element={<Form/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/view/:id" element={<View/>}/>
    <Route path="/home" element={<Home/>}/>
  </Routes>

    </Router>
  </div>
  )
};



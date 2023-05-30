import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Form from './components/Form'

function App() {


  return (
  <div className='App'>
    <Router>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/add" element={<Form/>}/>
  </Routes>

    </Router>
  </div>
  )
}

export default App

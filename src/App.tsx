import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  Navigation  from './shared/components/Navigation';
import { Home } from './pages/home/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
     <Navigation/>
      <Routes>
        <Route path="/home" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

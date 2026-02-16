import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import AIToolkit from './Pages/AIToolKit'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai-toolkit" element={<AIToolkit />} />
      </Routes>
    </Router>
  )
}

export default App

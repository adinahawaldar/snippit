import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AIToolkit from './pages/AIToolkit'

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

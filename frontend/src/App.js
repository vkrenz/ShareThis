import React from 'react'
import {
  Routes,
  Route,
  useNavigation
} from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  )
}

export default App

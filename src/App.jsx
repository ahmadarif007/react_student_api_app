import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Students from './components/Students';
import StudentAddForm from './components/StudentAddForm';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/addstudent" element={<StudentAddForm />} />
      </Routes>
    </>
  )
}

export default App

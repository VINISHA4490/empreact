import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import EmployeeForm from './Components/EmployeeForm'


function App() {
  const [count, setCount] = useState(0)

  return (

   
    <>
<NavBar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/emp' element={<EmployeeForm/>}/>
</Routes>

    </>
  )
}

export default App

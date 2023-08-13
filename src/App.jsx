import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Dashboard from './components/Dashboard'
import Welcome from './components/Welcome'
import Createaccount from './components/Createaccount'
import Signin from './components/Signin'

function App() {
  

  return (
    <>
	<BrowserRouter>
	<Routes>
	<Route path = '/' element = {<Welcome />} ></Route>
	<Route path = '/signin' element = {<Signin />} ></Route>
	<Route path = '/createaccount' element = {<Createaccount />} ></Route>
	<Route path = '/dashboard/' element = {<Dashboard />} ></Route>
	</Routes>
	</BrowserRouter>
         </>
  )
}

export default App


import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import About from './component/About'
import Contacts from './component/Contacts'
import Destination from './component/Destination'
import Header from './component/Header'
import Home from './component/Home'
import Packages from './component/Packages'
import Services from './component/Services'
import Testimonials from './component/Testimonials'
import Process from './component/Process'
import Guide from './component/Guide'

function App() {

  return (
    <>

 






  
       <Header/>
         <Home /> 
       <About />
        <Services/>
        <Destination/>
        <Packages/>
        <Process/>
        <Guide/>
        <Testimonials/>
        <Contacts/>
  



    </>
  )
}

export default App

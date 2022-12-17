import React from 'react'
import Header from './Header'
import List from './List'
import Footer from './Footer'
import Contact from './Contact'
import Discuss from './Discuss'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
   <>
    <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/' element={<List/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/discuss' element={<Discuss/>}/>
     </Routes>
     <Footer/>
    </BrowserRouter>
   </>
  )
}

export default App
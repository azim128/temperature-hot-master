import React from 'react'
import {Brand, Cta,Navbar} from './components'
import {Header,Footer,Features,What,Blog} from './Container'
import Possibility from './Container/possibility/Possibility'
import './App.css'
const App = () => {
  return (
    <div className='App'>
     <div className='gradient__bg'>
      <Navbar/>
      <Header/>
     </div>
     <Brand/>
     <What/>
     <Features/>
     <Possibility/>
     <Cta/>
     <Blog/>
     <Blog/>
     <Footer/>
    </div>
  )
}

export default App


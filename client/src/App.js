import React from 'react'
import { Header } from './Header/Header'
import { HeaderMain } from './Header/MainHeader';
import {MainBody} from "./MainBody/MainBody.js";


const App = () => {
  let width = window.innerWidth;
  return (
    <div className="App">
      <Header/>
      <HeaderMain width = {width}/>
      <MainBody />
    </div>
  )
}

export default App

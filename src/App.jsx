import { useState, useEffect } from 'react'
import Badge from './badges/Badge'
import Banner from './banners/Banner'
import { TbXboxXFilled } from "react-icons/tb";
import { HiInformationCircle } from "react-icons/hi";

import { FaCheckCircle } from "react-icons/fa";
import { GoAlertFill } from "react-icons/go";
import './App.css'

/* 

<Banner title='Congratulations' variant='success' text='You have done well!' ><FaCheckCircle /></Banner>
      <Banner title='Attention' variant='warning' text='Watch Out!' ><GoAlertFill /></Banner>
      <Banner title='A Problem With Your Application' 
        variant='error' 
        text='Please complete all required fields!' ><TbXboxXFilled /></Banner>
      <Banner title='Update available' 
        variant='neutral' 
        text='Consider the reading here!' ><HiInformationCircle /></Banner>
*/

function App() {
  
  const [color, setColor] = useState(['gray','red','yellow','green','blue','indigo','purple','pink'])
  const [shape ,setShape] = useState(['square','pill'])

  const [colr, setColr] = useState('')
  const [shp, setShp] = useState('')
  

  function handleClick(){
    setColr(color[Math.floor(Math.random()*color.length)])
    setShp(shape[Math.floor(Math.random()*shape.length)])
  }

  

  return (
    <>
      <Badge shape={shp} color={colr} onClick={handleClick} >Click</Badge>
    </>
  )
}

export default App

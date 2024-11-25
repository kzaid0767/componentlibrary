import { useState, useEffect } from 'react'
import Badge from './badges/Badge'
import Banner from './banners/Banner'
import { TbXboxXFilled } from "react-icons/tb";
import { HiInformationCircle } from "react-icons/hi";
import metie from './assets/metie.jpg'
import { FaCheckCircle } from "react-icons/fa";
import { GoAlertFill } from "react-icons/go";
import Testimonial from './testimonials/Testimonial';
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
      <Testimonial src="" author="Kassim Zaid" title="Freelance Web Dev">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. 
        Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
      </Testimonial>
    </>
  )
}

export default App

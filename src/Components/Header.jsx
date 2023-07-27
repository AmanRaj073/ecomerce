import React, { useContext } from 'react'
import {SidebarContext} from '../Contexts/SidebarContext'
import { BsBAg, BsBag } from "react-icons/bs";


const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext)
  console.log(isOpen);
  return (
    <>
    <div>Header</div>
    <div onClick={()=>setIsOpen(!isOpen)} className='cursor-pointer flex realtive'><BsBag className='text-2xl'/></div>
    </>
  )
}

export default Header

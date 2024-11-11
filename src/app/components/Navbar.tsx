import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { AiOutlineCloudDownload } from 'react-icons/ai';
const Navbar = () => {
  return (
    <div className='bg-white z-50 sticky top-0'>
        <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Image 
      src={require("../../../public/logop.jpg")} 
      alt="Hiba Khaliq"
      width={100} 
      height={100} 
      className="w-[50px]"/>
      <span className="ml-3 text-xl">Hiba Khaliq</span>
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5 hover:text-indigo-600">Home</Link>
      <Link href={"#About"} className="mr-5 hover:text-indigo-600">About</Link>
      <Link href={"#Skill"} className="mr-5 hover:text-indigo-600">Skills</Link>
      <Link href={"#Project"} className="mr-5 hover:text-indigo-600">Projects</Link>
      <Link href={"#Contact"} className="mr-5 hover:text-indigo-600">Contact</Link>
    </nav>
    
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
       
        Download CV
    <AiOutlineCloudDownload className='text-xl ml-2'/>
    
    </button>
    
  </div>
</header>
    </div>
  )
}

export default Navbar


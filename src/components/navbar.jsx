'use client';

import  Link  from 'next/link'
import { IMGPages, PDFpages } from '@/constants/pages'
import { useState } from 'react'
import Image from 'next/image'

const Navbar = () => {
  const [isToolsHover,setIsToolsHover ] = useState(false);
  return (
    <>
    <div className='navabarParent'>
        <div className='navbarMenu'>
            <ul className='menuList'>
                <li className={isToolsHover? 'menuOption MOhover':'menuOption'} onClick={()=>{setIsToolsHover(!isToolsHover)}}>Tools</li>
                <li className='menuOption'><Link href={'/blog/'}>Blogs</Link></li>
                <li className='menuOption'><Link href={'/about/'}>about</Link></li>
            </ul>
        </div>
        <div className='navbarIcons'>
          <h1><Link  className='siteAddressName' href={'/'}>no-login-tools.com</Link></h1>
        </div>
    </div>
    {isToolsHover &&
      <ul className='tools-dropDown-menu' onMouseLeave={()=>{setIsToolsHover(false)}}>
        <div className='menuTitle'>
          <Image className='icon' src="/image.png" width={20} height={20} alt="icon" />
          <p>image</p>
        </div>
        <div className='menuTitle'>
          <Image className='icon' src="/document.png" alt="icon" width={20} height={20} />
          <p>PDF & Documents</p>
        </div>
        <div className='imageTabs'>
        {
          IMGPages.map((page, index)=>(
            <li className='tools-dropDown-option' key={index}><Link href={page.path}>{page.name}</Link></li>
          ))
          
        }  
        </div>
        <div className='PDFtabs'>
        {
          PDFpages.map((page, index)=>(
            <li className='tools-dropDown-option' key={index}><Link href={page.path}>{page.name}</Link></li>
          ))
          
        }
        </div>
      </ul>
    }  
    </>
  )
}
 
export default Navbar
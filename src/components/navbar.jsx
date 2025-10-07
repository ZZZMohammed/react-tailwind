

import { useState } from 'react';

const links = [
{ name: "Home", href: "#home" },
{ name: "AI Types", href: "#types" },
{ name: "Benefits", href: "#benefits" },
{ name: "Contact", href: "#contact" },
]; 
export default function Navbar() {

  const [mobileMenu , setMobilemenu] = useState(false)

  return (
     <nav className='bg-white/80 backdrop-blur-md shadow-sm fixed w-full z-50'>
        <div className='app-container flex justify-between items-center h-16 '>
            <span className='gradient-text text-2xl font-bold '>Ai Revolution</span>
             <div className='hidden md:flex items-center space-x-8'>
            {links.map((link) =>(
              <a key={link.name} href={link.href} className='nav-item'>{link.name}</a>
            )
            )}
            <a href="" className='nav-btn'>Get Started</a>
        </div>
        
        {/*    Mobile Menu bUTTON   */}
        <button 
          onClick={ ()=> setMobilemenu((prev) => !prev) }
          className='md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
          </svg>
        </button>
        </div>

      {/*   mobile menu   */}
       { mobileMenu && (
        <div className='md:hidden bg-white shadow-lg rounded-b-lg px-2 space-y-1 pb-3'>
             {links.map((link) =>(
              <a key={link.name} href={link.href} className='mobile-nav-item'>{link.name}</a>
            )
            )}
            <a href="" className='mobile-nav-btn'>Get Started</a>
        </div>
       )}
     </nav>
  )
}

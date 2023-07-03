import React from 'react'
import { Link } from 'react-router-dom'

export const Pageheader = () => {
  return (
    <section className='bg-blue-600 h-[10vh] sticky z-50 top-0 text-sm left-0 text-white font-bold flex items-center'>
        <Link className='container' to={'/'}>
          <div className='flex flex-row gap-2'>
            <img className="h-5 w-5"src="/src/assets/white-hard-shell-floppy-disk.svg" alt="Floppy"></img>
            <p className=''> CSAW Blog</p>
          </div>  
        </Link>
     </section>
  )
}

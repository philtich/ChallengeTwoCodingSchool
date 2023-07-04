import React from 'react'

export const Pagefooter = () => {
  return (
    <section className='h-60 bg-blue-600 flex flex-col items-center gap-12 justify-center text-white'>
      <div className='flex flex-col md:flex-row gap-6 pt-8'>
        <div>
          <h4 className='text-xl font-bold'>Coding School</h4>
          <p>Siemensstraße 20 <br></br> 9020 Klagenfurt am Wörthersee</p>
        </div>
        <div className="flex-col gap-2 flex">
          <h4 className='text-2xl'>Lass uns Freunde bleiben</h4>
          <div className='flex flex-row gap-4'>
            <a href="https:/www.facebook.com" target="_blank"><img className="w-8 h-8"src="/src/assets/socials/facebook-icon.svg" alt="Facebook-Logo"></img></a>
            <a href="https:/www.instagram.com" target="_blank"><img className="w-8 h-8" src="/src/assets/socials/instagram-icon.svg" alt="Instagram-Logo"></img></a>
          </div>
        </div>
      </div>
      <p> © Philipp Tichy</p>
      
    </section>
  )
}

import React from 'react'
import { Outlet } from 'react-router-dom'

const Applayout = () => {
  return (
    <>
    <main className='min-h-screen cantainer' >
        {/* head  */}
      <Outlet/>
    </main>
    <footer className="p-3 text-white text-center bg-gray-800 mt-10" >
      Made with 💖 by <a href='https://khadim-portfolio.vercel.app/' target='_blank' className='no-underline' >Khadim Ali</a>
    </footer>
    </>
  )
}

export default Applayout

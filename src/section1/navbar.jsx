import React from 'react'
import {Zap} from 'lucide-react'
const Navbar = () => {
  return (
    <div className='w-full py-10 px-4 md:px-15 flex justify-between items-center'>
       <h3 className='bg-black rounded-full text-white px-2 py-1 uppercase'>Target Audience</h3>
       <button className='flex uppercase bg-gray-300 rounded-full px-2 py-1'><Zap />Digital Banking platform</button>
    </div>
  )
}

export default Navbar
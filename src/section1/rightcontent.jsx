import React from 'react'

const Rightcontent = (props) => {
    console.log(props)
  return (
    <div className='w-full h-full absolute inset-0 flex flex-col p-6 justify-between'>
      <div className='h-10 w-10 rounded-full bg-white flex items-center justify-center'>
        <h3 className='font-bold text-xl'>{props.index+1}</h3>
      </div>
      <div>
        <p className='text-white font-medium tracking-wider'>{props.intro}</p>
        <div className='flex my-10 justify-between'>
        <button style={{ backgroundColor: props.color}} className='bg-blue-400 py-2 px-3 rounded-full text-white font-semibold'>{props.btn1}</button>
        <button>
            <img style={{ backgroundColor: props.color}} className='h-8 w-10 bg-blue-400 py-1 px-2 rounded-full' src="https://cdn-icons-png.flaticon.com/128/14736/14736845.png" alt="" />
        </button>
        </div>
      </div>
    </div>
  )
}

export default Rightcontent

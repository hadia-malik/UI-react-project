import React from 'react'
import Rightcard from './rightcard'

const Rightsection = (props) => {
    console.log(props)
  return (
    <div className='h-140 w-3/5 my-3 flex flex-nowrap gap-4 overflow-x-auto scrollbar-hide'>
      {props.users.map((val,idx)=>{
        return (
        <Rightcard data={val} idx={idx}/>
        )
      })}
    
    </div>
  )
}

export default Rightsection

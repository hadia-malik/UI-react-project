import React from 'react'
import Rightcontent from './rightcontent'

const Rightcard = (props) => {
    console.log(props)
  return (
    <div className='h-full w-62.5 rounded-2xl overflow-hidden relative shrink-0'>
        <img src={props.data.image} alt="" className='h-full w-full object-cover' />
        <Rightcontent intro={props.data.intro} btn1={props.data.btn1} color={props.data.color} index={props.idx} />
    </div>
  )
}

export default Rightcard

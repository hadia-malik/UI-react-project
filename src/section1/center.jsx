import React from 'react'
import Leftsection from './leftsection'
import Rightsection from './rightsection'

const Center = (props) => {
  return (
    <div className='flex gap-4'>
      <Leftsection />
      <Rightsection users={props.users}/>
    </div>
  )
}

export default Center

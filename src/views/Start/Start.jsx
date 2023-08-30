import React from 'react'
import { Link } from 'react-router-dom'

export const Start = () => {
  return (
    <div className='Start'>
    <Link to='/home'>
      <button className='buttonStart'>START</button>
    </Link>
    </div>
  )
}

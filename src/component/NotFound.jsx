import React from 'react'
import '../style/NotFound.css'
import error from '../asset/404-error.png'

const NotFound = () => {
  return (
    <div className='not-found'>
      <img src={error} alt="" />
    </div>
  )
}

export default NotFound

import React from 'react'
import {MdOutlineArrowBackIos} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const BackButton = () => {
    const navigate = useNavigate()
  return (
    <button onClick={()=> navigate(-1)} className='bg-[#f6b100] p-3 text-xl font-bold rounded-full cursor-pointer'>
      <MdOutlineArrowBackIos className='text-xl'/>
    </button>
  )
}

export default BackButton

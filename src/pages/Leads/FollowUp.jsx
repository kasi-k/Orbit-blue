import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";

const FollowUp = () => {
    const [popup,setPopup]=useState(false)
  return (
    <div className='  mx-52 font-Source_Sans_Pro w-[500px] h-3/4  bg-white shadow-sm rounded-lg '>
        <h1 className=' flex  py-10 text-[#383E49] font-bold text-xl justify-center'>Next Follow Up</h1>
        <button onClick={(e)=>setPopup(false)} className='absolute top-20 bg-white py-3 px-3 rounded-full left-[64%] ' ><IoClose className='size-[24px]' /></button>
        <form className='grid w-80 mx-24 py-10 gap-6'> 
            <label className="font-normal text-base text-black">Next Follow Up</label>
            <input type='date' className='border border-[#D0D5DD] rounded-lg py-2 px-2 text-[#D0D5DD] '/> 
            <label className="font-normal text-base text-black">Note</label>
            <textarea  rows={4} className='border border-[#D0D5DD] rounded-lg px-2 py-2 text-xs font-normal text-[#D0D5DD]'placeholder='Follow up note'/>
            <div className='flex justify-center gap-5 py-10'>
            <button className='text-red-600 border-red-600 border px-8 py-2 rounded'>Cancel</button>
            <button className='bg-orange px-10 py-2 rounded text-white'>Save</button>
            </div>
        </form>
    </div>
  )
}

export default FollowUp
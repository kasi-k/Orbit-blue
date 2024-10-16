import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";

const AddFollowUp = () => {
    // const [close,setClose]=useState(false)
    // const handleCloseModal =()=>{
    //   setClose(true)
    // }
  return (
    <div className="font-Source_Sans_Pro fixed inset-0 flex justify-center  items-center bg-opacity-25 backdrop-blur-sm">
    <div className='  mx-52  w-[500px]  bg-white  rounded-lg '>
       <div  className='grid -my-6 -mx-5 '>
        <button className='place-self-end shadow-md  bg-white py-3 px-3 rounded-full'><IoClose className='size-[24px]' /></button>
        <form className='grid w-80 mx-28 gap-8'>  
          <h1 className=' grid py-6 text-[#383E49] font-bold text-xl justify-center'>Next Follow Up</h1>
            <label className="font-normal text-base text-black ">Next Follow Up</label>
            <input type='date' className='border border-[#D0D5DD] rounded-lg py-2 px-2 text-[#D0D5DD]'/> 
            <label className="font-normal text-base text-black">Note</label>
            <textarea  rows={4} className='border border-[#D0D5DD] rounded-lg px-2 py-2 h-28 text-xs font-normal text-[#D0D5DD]'placeholder='Follow up note'/>
            <div className='flex justify-center gap-5 py-20'>
            <button className='text-red-600 border-red-600 border px-8 py-2 rounded'>Cancel</button>
            <button className='bg-orange px-10 py-2 rounded text-white'>Save</button>
            </div>
        </form>
    </div>
    </div>
    </div>
  )
}

export default AddFollowUp
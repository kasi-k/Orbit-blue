import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import Select from "react-select";
const AddUser = ({onClose}) => {
    const[add,setAdd]=useState(false)
    const handleUser=()=>{
       setAdd(true)
    }
    const skills=[
        {label:"Interaction Design" , value: 'InteractionDesign'},
        {label:" Visual Design", value:'VisualDesign'},
        {label:"User Testing", value:'UserTesting'}
    ];
  return (
    <> 
    <div className=" font-Source_Sans_Pro fixed inset-0 flex justify-center  items-center bg-opacity-25 backdrop-blur-sm">
    <div className=" mx-2 shadow-lg bg-white rounded-lg">
      <div className="grid ">
        <button onClick={onClose} className=" place-self-end bg-white  rounded-full lg:-mx-4 lg:-my-5 md:-my-5 md:-mx-4 my-1 mx-1 lg:shadow-md md:shadow-md shadow-none lg:py-3 md:py-3 py-0 lg:px-3 md:px-3 px-0 ">
          <IoClose className="size-[24px]" />
        </button>
        <h1 className="grid justify-center py-4  text-[#383E49] font-bold text-xl">
            Add Users </h1>
            <form className='grid grid-cols-12 my-6 p-6 gap-10'>
                <div className=' grid grid-cols-2 col-span-6 items-center gap-6  '>
                <label className=''>Name</label>
                <input type="text" placeholder='Enter user name' className='h-11 w-[273px]' />
                <label>Credits</label>
                <input type="text" placeholder='Add Credits' />
                <label>Gender</label>
                <select defaultValue="Gender">
                   <option value="Gender">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                </select>
                <label >Date Of Birth</label>
                <input type="date" />
                <label>Age</label>
                <input type="text" placeholder='Enter your Age' />
                <label>Department</label>
                <select defaultValue="depart">
                    <option value="depart">Select Department</option>
                    <option value="computer">Computer Science</option>
                    <option value="mech">Mechanical</option>
                    <option value="IT">Information Technology</option>
                </select>
                <label>Email ID</label>
                <input type="email" placeholder='Enter your mail id' />
                <label>Phone Number</label>
                <input type="tel" placeholder='Enter your mobile no' />
                </div>
                <div className=' grid grid-cols-2 col-span-6'>
                <label className=''>Address</label>
                <input type="text" placeholder='Enter your address' className='' />
                <label>City</label>
                <input type="text" placeholder='Enter your city' />
                <label>State</label>
                <input type="text" placeholder='Enter your state' />
                <label>Pincode</label>
                <input type="tel" placeholder='Enter your mobile no'/>
                <label>Skills</label>
                <Select options={skills} isMulti/>
                <label>Stronger Areas</label>
                <Select options={skills} isMulti/>
                <label>Need to Improve</label>
                <Select options={skills} isMulti/>
                <label>Emotional Status</label>
                <Select options={skills} isMulti/>
                </div>
                <label className=' col-span-3'>Description</label>
                <textarea placeholder='Type a messages' className='col-span-9'></textarea>
            </form>
    </div>
    </div>
    </div>
    </>
  )
}

export default AddUser
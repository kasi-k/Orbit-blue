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
    <div className=" font-Source_Sans_Pro fixed inset-0 flex justify-center  items-center bg-opacity-25 backdrop-blur-sm ">
      <div className=" mx-2 shadow-lg bg-white rounded-lg">
        <div className="grid  ">
          <button onClick={onClose} className=" place-self-end bg-white  rounded-full lg:-mx-4 lg:-my-5 md:-my-5 md:-mx-4 my-1 mx-1 lg:shadow-md md:shadow-md shadow-none lg:py-3 md:py-3 py-0 lg:px-3 md:px-3 px-0 ">
            <IoClose className="size-[24px]" />
          </button>
          <h1 className="text-center py-2 text-[#383E49] font-bold text-xl">
              Add Users </h1>
              <form className='mx-4 my-2 lg:h-2/3 md:h-[480px] h-[500px] lg:overflow-y-visible md:overflow-y-auto overflow-y-auto lg:no-scrollbar md:no-scrollbar no-scrollbar '>
                <div className=' lg:flex md:flex grid   '>
  
              < span className='lg:grid md:grid grid lg:grid-cols-12 md:grid-cols-10  items-center gap-2 my-2 mx-4  '>
              <label className="col-span-5 text-[#48505E] text-base font-normal  ">
                Name
            </label>
              <input type='text'placeholder='Enter user name' className="col-span-7 border border-grey text-grey rounded-md w-60 h-11 px-2 "/>
              <label className="col-span-5 text-[#48505E] text-base font-normal  ">
               Credits
            </label>
              <input type='text' placeholder='Add Credits' className="col-span-7 border  border-grey text-grey rounded-md w-60 h-11 px-2 "/>
              <label className="col-span-5 text-[#48505E] text-base font-normal  ">
               Gender
            </label>
            <select defaultValue="Gender" className="col-span-7 border border-grey text-grey rounded-md w-60 h-11 px-2 ">
                   <option value="Gender" disabled>Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                </select>
                <label className="col-span-5 text-[#48505E] text-base font-normal  ">
               Date Of Birth
            </label>
              <input type='date'  className="col-span-7 border  border-grey text-grey rounded-md w-60 h-11 px-2 "/> 
              <label className="col-span-5 text-[#48505E] text-base font-normal  ">
               Department
            </label>
            <select defaultValue="Gender" className="col-span-7 border  border-grey text-grey rounded-md w-60 h-11 px-2 ">
                   <option value="Depart" disabled>Select Department</option>
                    <option value="Cs">Computer Science</option>
                    <option value="IT">Information Technology</option>
                    <option value="others">Others</option>
                </select>
                <label className="col-span-5 text-[#48505E] text-base font-normal  ">
              Age
            </label>
              <input type='text' placeholder='Type age'  className="col-span-7 border  border-grey text-grey rounded-md w-60 h-11 px-2 "/> 
             
             
            
             <label className="col-span-5  text-[#48505E] text-base font-normal">
                Email Id{" "}
              </label>
              <input
                type="email"
                placeholder=" Enter your Email"
                className="col-span-7 text-grey border  border-grey w-60 rounded-md  h-11 px-2 "
              />
            
            <label className="col-span-5 text-[#48505E] text-base font-normal ">
               Phone number
                </label>
              <input
                type="text"
                placeholder="Enter your mobile number"
                className="col-span-7  text-grey border  border-grey rounded-md w-60 h-11  px-2 "
              />
           
          
           
           </span>
           <span className='lg:grid md:grid grid lg:grid-cols-12 md:grid-cols-10   items-center gap-2 mx-4 my-2' >
           <label className="col-span-5 text-[#48505E] text-base font-normal  ">
                Apartment
            </label>
              <input type='text'placeholder='Enter your Apartment' className="col-span-7 border  border-grey text-grey rounded-md w-60 h-11 px-2 "/>
              <label className="col-span-5 text-[#48505E] text-base font-normal  ">
               City
            </label>
              <input type='text' placeholder='Enter your City' className="col-span-7 border  border-grey text-grey rounded-md w-60 h-11 px-2 "/>
              <label className="col-span-5 text-[#48505E] text-base font-normal  ">
               State
            </label>
              <input type='text' placeholder='Enter your State' className="col-span-7 border  border-grey text-grey rounded-md w-60 h-11 px-2 "/>
              <label className="col-span-5 text-[#48505E] text-base font-normal  ">
               Pincode
            </label>
              <input type='text' placeholder='Enter your Pincode' className="col-span-7 border  border-grey text-grey rounded-md w-60 h-11 px-2 "/>
              <label className="col-span-5 text-[#48505E] text-base font-normal  ">
              Skills
            </label>
            <Select options={skills} isMulti className="col-span-7 text-grey rounded-md  "/>
          
                <label className="col-span-5 text-[#48505E] text-base font-normal  ">
              Stronger Areas
            </label>
            <Select options={skills} isMulti className="col-span-7  text-grey rounded-md  "/>
                   
                <label className="col-span-5 text-[#48505E] text-base font-normal   ">
              Need to improve
            </label>
            <Select options={skills} isMulti   className="col-span-7 text-grey rounded-md overflow-y-auto  "/>
                <label className="col-span-5 text-[#48505E] text-base font-normal  ">
             Emotional Status
            </label>
            <Select  options={skills} isMulti className="col-span-7  text-grey rounded-md  "/>
              
           </span></div>
           <span className='lg:grid md:grid grid lg:grid-cols-12 md:grid-cols-10  items-center mx-4 my-2'>
           <label className='col-span-2'>Description</label>
           <textarea rows={5} placeholder='Type a messages' className='px-2 py-2 col-span-10 ml-8 border  border-grey rounded-md text-grey '/>
           </span>

              <div className=" flex justify-center gap-2 py-2">
           
              <button className="  text-red-600 border-red-600 border px-8 py-2 rounded">
                Cancel
              </button>
              <button className="bg-orange px-10 py-2 rounded text-white">
                Save
              </button>
            </div> 
          </form>
        </div>
    </div>
</div>
    </>

  )
}

export default AddUser
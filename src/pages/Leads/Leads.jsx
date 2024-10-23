import React, { useState } from "react";
import { HiArrowLeft, HiArrowRight, HiArrowsUpDown } from "react-icons/hi2";
import { RiDeleteBinLine } from "react-icons/ri";
import AddLeads from "./AddLeads";
import LeadsDetails from "./LeadsDetails";
import { useNavigate } from "react-router-dom";

const Leads = () => {
  const [popup,setPopup]=useState(false) 
  const handleOpenModal=()=>{
    setPopup(true)
  }
 const navigate = useNavigate();

const handleDetails =()=>{
 navigate("/LeadDetails");
}
  return (
    <>
      <div className="flex  my-4 justify-between">
        <h1 className="font-Exo text-xl font-bold py-2 px-1 text-slate-950">Leads</h1>
        <button onClick={handleOpenModal} className="bg-orange text-white rounded-md py-2 px-10  font-Source_Sans_Pro">
          Add Leads
        </button>
      </div>
      <table className=" font-Source_Sans_Pro w-full bg-slate-200 rounded-md">
        <thead>
          <tr>
            <th className="py-4 px-2 font-semibold">
              <p className="flex items-center justify-center gap-1 ">
                S.no
                <HiArrowsUpDown className="text-[#95A5A6]" />
              </p>
            </th>
            <th className="font-semibold">
              <p className="flex items-center justify-center gap-1">
                Date & Time
                <HiArrowsUpDown className="text-[#95A5A6]" />
              </p>
            </th>
            <th className="font-semibold ">
              <h1 className="flex items-center justify-center gap-1">
                Name
                <HiArrowsUpDown className="text-[#95A5A6]" />
              </h1>
            </th>
            <th className="font-semibold ">
              <p className="flex items-center justify-center gap-1">
                Phone number
                <HiArrowsUpDown className="text-[#95A5A6]" />
              </p>
            </th>
            <th className="font-semibold ">
              <h1 className="flex items-center justify-center gap-1">
                Follow-up
                <HiArrowsUpDown className="text-[#95A5A6]" />
              </h1>
            </th>
            <th>
              <h1 className="flex items-center  gap-1">
                Status
                <HiArrowsUpDown className="text-[#95A5A6]" />
              </h1>
            </th>
            <th>
              <h1>Action</h1>
            </th>
          </tr>
        </thead>
        <tbody  className=" text-grey bg-white cursor-default ">
          <tr className="border-b-2 text-center  ">
            <td  className="px-8 py-2  ">
              <p onClick={handleDetails} className="cursor-pointer">1</p></td>
            <td >
              <p onClick={handleDetails} className="cursor-pointer">18 June 24, 02.23 PM</p></td>
            <td >
              <p onClick={handleDetails} className="cursor-pointer">Name</p></td>
            <td>
              <p  onClick={handleDetails} className="cursor-pointer">18 June 24, 02.23 PM</p></td>
            <td >
              <p onClick={handleDetails}className="cursor-pointer" >18 June 24, 02.23 PM</p></td>
            <td >
              <p className="text-green-600 bg-[#CBFFD8] w-20 py-1 rounded-md text-center ">
               Active
              </p>
            </td>
            <td className="  inline-block text-red-500 p-2 my-4 ml-4 bg-pink-200">
              <RiDeleteBinLine />
            </td>
          </tr>
          <tr className="border-b-2 text-center">
            <td onClick={handleDetails} className="px-8 py-2 cursor-pointer">2</td>
            <td onClick={handleDetails} className=" cursor-pointer">18 June 24, 02.23 PM</td>
            <td onClick={handleDetails} className=" cursor-pointer">Name</td>
            <td onClick={handleDetails} className=" cursor-pointer">18 June 24, 02.23 PM</td>
            <td onClick={handleDetails} className=" cursor-pointer">18 June 24, 02.23 PM</td>
            <td  >
               <p className="  w-20 py-1 text-red-500 bg-[#F8D7DA] rounded-lg ">In Active</p> 
             
            </td >
            <td className="inline-block ml-4 p-2 my-4 bg-pink-200 text-red-500">
              <RiDeleteBinLine className="" />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-between my-5 font-Source_Sans_Pro">
        <div className="text-[#8A8A8A]">
          <p>Showing results for 1 out of 5</p>
        </div>
        <div className="flex gap-5">
          <p className="flex items-center gap-4 text-[orange] font-normal">
            <HiArrowLeft />
            Previous
          </p>
          <span className="bg-orange px-2 rounded-lg text-white ">1</span>
          <span className="text-[#8A8A8A] font-normal">2</span>
          <span className="text-[#8A8A8A] font-normal">3 ...</span>
          <p className="flex items-center gap-4 text-orange font-normal"> 
            Next
            <HiArrowRight />{" "}
          </p>
        </div>
      </div>
      {popup &&<AddLeads onClose={()=>setPopup(false)}/>}
    </>
    
  );
};

export default Leads;

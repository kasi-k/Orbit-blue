import { useState } from "react";
import React  from 'react'
import { HiArrowLeft, HiArrowRight, HiArrowsUpDown } from "react-icons/hi2";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEye } from "react-icons/fi";
import {  Navigate, useNavigate } from "react-router-dom";
import UsersView from "./UsersView";
const User = () => {
  const Navigate = useNavigate();

  const handleView=()=>{
    Navigate("/UsersView");
  }
  return (
    <div>
      <div className="flex  my-4 justify-between">
        <h1 className="font-Exo text-xl font-bold py-2 px-1 text-slate-950">Users</h1>
        <button className="bg-orange text-white rounded-md py-2 px-10  font-Source_Sans_Pro">
          Add User
        </button>
      </div>
      <table className="  font-Source_Sans_Pro w-full bg-slate-200 rounded-md">
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
                Admin ID
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
                Email ID
                <HiArrowsUpDown className="text-[#95A5A6]" />
              </h1>
            </th>
            <th>
              <h1 className="flex items-center justify-center gap-1">
                Institution
                <HiArrowsUpDown className="text-[#95A5A6]" />
              </h1>
            </th>
            <th>
              <h1 className="flex items-center justify-center gap-1">
                Credits
                <HiArrowsUpDown className="text-[#95A5A6]" />
              </h1>
            </th>
            <th>
              <h1  className="flex items-center justify-center gap-1">
                Status
              </h1>
            </th>
            <th>
              <h1  className="flex items-center justify-center gap-1">
                Interview Attempt
              </h1>
            </th>
            <th>
              <h1>Action</h1>
            </th>
          </tr>
        </thead>
        <tbody  className="text-grey bg-white ">
          <tr className="border-b-2 text-center ">
          <td >1</td>
          <td className="text-blue-800 underline ">123456</td>
            <td >Name</td>
            <td>0000000000</td>
            <td >123@gmail.com</td>
            <td >Name</td>
            <td >100</td>
            <td className="grid justify-center my-4">
              <p className="text-green-600 bg-[#CBFFD8] w-20  py-1 rounded-md  ">
               Active
              </p>
            </td>
            <td>02</td>
            <td>
            <p onClick={handleView} className=" cursor-pointer inline-block p-2 my-4  bg-green-200 text-green-600 rounded-sm"><FiEye/> </p>
            <p className="inline-block p-2 my-4 ml-4 bg-pink-200 text-red-500 rounded-sm"> <RiDeleteBinLine /></p>
            </td> 
          </tr>
           <tr className="border-b-2 text-center">
          <td>2</td>
          <td className="text-blue-800 underline ">123456</td>
            <td >Name</td>
            <td>0000000000</td>
            <td >123@gmail.com</td>
            <td >Name</td>
            <td >100</td>
            <td className="grid justify-center py-4">
              <p className=" w-20 py-1 text-red-500 bg-[#F8D7DA] rounded-lg">
                In Active
              </p>
            </td>
            <td >03</td>
            <td>
            <p onClick={handleView} className=" cursor-pointer inline-block p-2 my-4  bg-green-200 text-green-600 rounded-sm"><FiEye/></p>
           <p className="inline-block p-2 my-4 ml-4 bg-pink-200 text-red-500 rounded-sm"><RiDeleteBinLine/></p>
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
    </div>
  )
}

export default User
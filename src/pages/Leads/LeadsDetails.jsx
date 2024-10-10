import React from "react";
import Leads from "../../assets/leadswelcome.png";

const LeadsDetails = () => {
  return (
    <div className="overflow-auto mb-3 no-scrollbar">
      <div className="flex justify-between my-3 ">
        <h1 className="font-Exo text-[#2C3E50] font-semibold text-xl px-1 py-2">
          Lead Details
        </h1>
        <button className="font-Source_Sans_Pro font-normal text-xs bg-orange rounded-md text-white px-8 py-2">
          Add FollowUp
        </button>
      </div>
      <div className="grid grid-cols-2 gap-6 my-5 sm:grid-cols-1 lg:grid-cols-2 ">
        <div className="bg-[#7ABDFF33] rounded-xl shadow-lg ">
          <div className=" flex justify-between">
            <p className="text-[#1366D9] px-5 py-5 font-semibold text-lg font-Source_Sans_Pro">
              Welcome Back!!!
            </p>
            <div className="relative">
              <img src={Leads} alt="Image" className=" mr-8" />
            </div>
          </div>
          <div className=" bg-white flex justify-between items-center pb-16 rounded-b-lg">
            <div>
              <span className=" ml-6  absolute top-[315px] text-white font-semibold text-4xl bg-[#1366D9] rounded-full px-6 py-4">
                K
              </span>
              <p className=" relative top-12 ml-6 text-[#7D7D7D] font-semibold text-base">
                Profile name
              </p>
              <p className="relative top-12 ml-6 text-[#D1D1D1] text-base font-normal">
                00000 00000
              </p>
            </div>

            <button className=" text-white relative top-12 mr-8 bg-orange rounded-md px-5 py-2">
              Edit Leads
            </button>
          </div>
        </div>
        <div className="text-[#2C3E50] font-Source_Sans_Pro flex  flex-col gap-3 bg-white pt-8  pl-5 rounded-xl shadow-xl ">
          <h1 className="font-semibold text-base">Lead Follow Ups</h1>
          <p className="font-normal text-sm">
            {" "}
            Next Follow up on 30/09/2024
            <br />
            <span className="text-[#D1D1D1] text-xs">Zoom meeting link:</span>
          </p>
          <p className="font-normal text-sm ">
            Ravikumar | 27/09/2024 | 10:00am
          </p>
        </div>
        <div className="font-Source_Sans_Pro text-sm font-semibold text-[#2C3E50] bg-white rounded-xl shadow-lg px-8 py-8 ">
          <h1 className="mb-8 text-base text-[#2C3E50]">Basic Information</h1>
          <h1 className="flex gap-4 mb-2">
            Complaint Raised from:
            <span className="pl-16 text-[#7D7D7D] font-normal">Call</span>
          </h1>
          <h1 className="flex gap-7  mb-2">
            Created At:
            <span className="pl-32 text-[#7D7D7D] font-normal"> 27/09/2024 10:00 am</span>
          </h1>
          <h1 className="flex gap-2 mb-2">
            Email:
            <span className="pl-44 text-[#7D7D7D] font-normal"> ravikumar@gmail.com </span>
          </h1>
          <h1 className="flex gap-2 mb-2">
            Address :<span className="pl-40 text-[#7D7D7D] font-normal"> Chennai </span>
          </h1>
          <h1 className="flex  mb-2">
            City :<span className="pl-48 text-[#7D7D7D] font-normal"> Chennai </span>
          </h1>
          <h1 className="flex gap-3 mb-2">
            State :<span className="pl-44 text-[#7D7D7D] font-normal">Tamilnadu</span>
          </h1>
          <h1 className="flex   mb-2">
            Note :<span className="pl-48 text-[#7D7D7D] font-normal"> Test </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LeadsDetails;

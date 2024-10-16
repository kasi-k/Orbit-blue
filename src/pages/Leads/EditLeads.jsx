import React from "react";
import { IoClose } from "react-icons/io5";

const EditLeads = () => {
  return (
    <div className=" font-Source_Sans_Pro fixed inset-0 flex justify-center  items-center bg-opacity-25 backdrop-blur-sm">
      <div className=" py-2  w-[500px] h-fit shadow-md   bg-white rounded-lg">
        <div className="flex flex-col -my-6 -mx-5">
          <button className="place-self-end shadow-md  bg-white py-3 px-3 rounded-full">
            <IoClose className="size-[24px]" />
          </button>
          <form className="grid mx-14 gap-6">
            <h1 className="flex justify-center  py-2 text-[#383E49] font-bold text-xl">
              Edit Leads
            </h1>
            <label className="flex gap-4 text-[#7D7D7D]">
              <span className="flex  items-center text-[#48505E] text-base font-normal">
                Complaint Raised from
              </span>
              <select className=" border border-[#D0D5DD] rounded-md w-[273px] h-11 px-2 ">
                <option selected>From</option>
                <option>Call</option>
                <option>Email</option>
                <option>SMS</option>
              </select>
            </label>
            <label className="flex gap-28 text-[#7D7D7D]">
              <span className="flex items-center text-[#48505E] text-base font-normal">
                Email Id{" "}
              </span>
              <input
                type="email"
                placeholder=" Enter your Email"
                className=" border border-[#D0D5DD] rounded-md w-[273px] h-11 px-2"
              />
            </label>
            <label className="flex gap-28 text-[#7D7D7D] ">
              <span className="flex  items-center text-[#48505E] text-base font-normal">
                Address
              </span>
              <input
                type="text"
                placeholder="Enter your Address"
                className=" border border-[#D0D5DD] rounded-md w-[273px] h-11 mx-1 px-2"
              />
            </label>
            <label className="flex gap-32 text-[#7D7D7D]">
              <span className="flex  items-center text-[#48505E] text-base font-normal">
                City
              </span>
              <input
                type="text"
                placeholder="Enter your City"
                className=" border border-[#D0D5DD] rounded-md mx-3 w-[273px] h-11 px-2 "
              />
            </label>
            <label className="flex gap-32 text-[#7D7D7D]">
              <span className="flex  items-center text-[#48505E] text-base font-normal">
                State
              </span>
              <input
                type="text"
                placeholder="Enter your State"
                className=" border border-[#D0D5DD] rounded-md mx-2  w-[273px] h-11 px-2"
              />
            </label>
            <label className="flex gap-32 text-[#7D7D7D]">
              <span className="flex  items-center text-[#48505E] text-base font-normal">
                Note
              </span>
              <textarea
                rows={4}
                className=" border border-[#D0D5DD] rounded-md mx-3 w-[273px] h-32 px-3 py-3"
                placeholder="Type a messages"
              />
            </label>

            <div className="flex justify-center gap-5 my-9 ">
              <button className="text-red-600 border-red-600 border px-8 py-2 rounded">
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
  );
};

export default EditLeads;

import React from 'react'
import { HiArrowsUpDown } from 'react-icons/hi2'

const Leads = () => {
  return (
    <div>
    <div className='flex  my-4 justify-between'>
        <h1 className='font-Exo text-xl font-bold text-slate-950'>Leads</h1>
        <button className='bg-orange text-white rounded-md py-2 px-10  font-Source_Sans_Pro'>Add Leads</button>
    </div>
    <table className=' font-Source_Sans_Pro w-full  bg-slate-200 rounded-md'>
            <tr>
                <th className='p-4 font-semibold'>
                    <p className='flex items-center gap-1'>S.no<HiArrowsUpDown/></p>
                </th>
                <th className='font-semibold'>
                    <p className='flex items-center gap-1'>Date & Time<HiArrowsUpDown/></p>
                </th>
                <th className='font-semibold '>
                    <h1 className='flex items-center gap-1'>Name<HiArrowsUpDown/></h1>
                </th>
                <th className='font-semibold '>
                    <p className='flex items-center gap-1'>Phone number<HiArrowsUpDown/></p>
                </th>
                <th className='font-semibold '>
                    <h1 className='flex items-center gap-1'>Follow-up<HiArrowsUpDown/></h1>
                </th>
                <th>
                    <h1 className='flex items-center gap-1'>Status<HiArrowsUpDown/></h1>
                </th>
                <th>
                    <h1>Action</h1>
                </th>
            </tr>

    </table>
    </div>
  )
}

export default Leads
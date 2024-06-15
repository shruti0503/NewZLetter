import React from 'react'
import { ICONS } from "@/shared/utils/icons";
import { Slider } from "@nextui-org/slider";

const UserPlan = () => {
  return (
    <div className='w-full my-3 p-3 bg-[#FDF1F8] rounded hover:shadow-xl cursor-pointer '>
      <div className='w-full flex items-start'>
        <h5 className='text-lg font-medium'>
          Membership Plan
        {/* {membershipLoading ? "..." : "GROW"} Plan */}
        </h5>
      </div>

      <div>
        <span className=''>{ICONS.electric}</span>
        <span>Upgrade</span>
      </div>
      
      <h5>Total subscribers</h5>
      <Slider
        aria-label="Player progress"
        hideThumb={true}
        defaultValue={1}
        className="max-w-md"
      />
      <h6>
        added
      </h6>
    </div>
  )
}

export default UserPlan

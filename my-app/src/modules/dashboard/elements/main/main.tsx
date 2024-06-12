'use client'
import { useUser } from "@clerk/nextjs"


const Main=()=>{
    const {user}=useUser();

    return (
        <div className="p-5 w-full h-screen bg-[#f9fafb]">
            <h1 className="text-2xl text-surface-900 text-black font-medium">
                Hi
            </h1>

            <p className="opacity-[.7] text-sm pt-2  text-black">
                Here&apos;s how your publication is doing

            </p>

            <div className="w-full flex">

                <div className="w-[65%] min-h-[88vh] pr-5">
                    <br />

                    

                    <br />

                </div>

                <div>

                </div>

            </div>


        </div>

    )

}

export default Main 
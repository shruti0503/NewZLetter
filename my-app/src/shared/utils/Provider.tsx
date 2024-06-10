'use client'
import { NextUIProvider } from "@nextui-org/react"
import { usePathname } from "next/navigation"
import { useUser } from "@clerk/nextjs"
import DashboardSidebar from "../widgets/dashboard/sidebar/dashboard.sidebar"

interface ProviderProps{
    children:React.ReactNode
}

export default function Providers({children}:ProviderProps){
    const pathname=usePathname()
    const { user, isLoaded } = useUser();
     

    return (
        <NextUIProvider>
           {
             pathname !== "/dashboard/new-email" && 
             pathname !=="/" && pathname !=="/sign-up" &&
             pathname !=="/subscribe" && pathname!=="/sign-in" ?(
                <div className="w-full flex">
                    <div className="w-[290px] h-screen overflow-y-scroll">
                        <DashboardSidebar />

                    </div>

                </div>

             ):(
                <> {children}</>
             )

            
 
           }
        </NextUIProvider>
    )

}
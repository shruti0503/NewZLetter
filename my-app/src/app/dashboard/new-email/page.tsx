'use client'

import Link from "next/link"
import { ICONS } from "@/shared/utils/icons";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
const Emaileditor = dynamic(
    () => import("@/shared/components/editor/email.editor"),
    {
      ssr: false,
    }
  );
const Page=()=>{

    const searchParams=useSearchParams()
    const subject:string=searchParams.get("subject")!;
    const subjectTitle=subject.replace(/-/g,"");

    return(
        <div className="w-full flex bg-[#F7F7F7] text-black">
            <div className="w-full p-5 bg-white rounded-r-xl">
                <Link 
                  href={"/dashboard/write"}
                  className="opacity-[.7] w-min flex text-xl items-center"
                >
                <span>{ICONS.backArrow}</span>
                <span>Exit</span>
                </Link>

                {/* email editor */}
                <div className="my-5">
                    <Emaileditor  subjectTitle={subjectTitle}/>


                </div>


            </div>
        </div>
    )

}
export default Page
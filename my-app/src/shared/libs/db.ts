import mongoose from "mongoose"
import {driver, createAstraUri} from "stargate-mongoose"

export const connectDb=async()=>{
    try{
        const uri=createAstraUri(process.env.ASTRA_DB_API_ENDPOINT!,
            process.env.ASTRA_DB_APPLICATION_TOKEN!
        )
        //check exiting connectng
        

    }
    catch(error){
        console.log(error)
    }
}
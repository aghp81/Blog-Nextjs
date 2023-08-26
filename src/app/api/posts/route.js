import { NextResponse } from "next/server"
import connect from "@/utils/db"

export const GET = async (request) => {
    //fetch data from mogoDB

    return new NextResponse("It Wotks!", {status: 200})
}
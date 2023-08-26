import { NextResponse } from "next/server"

export const GET = async (request) => {
    //fetch data from mogoDB

    return new NextResponse("It Wotks!", {status: 200})
}
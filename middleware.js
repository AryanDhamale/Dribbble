import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";


export async function middleware(request)
{ 
  const session=await getToken({req:request,secret : process.env.NEXTAUTH_SECRET});
  if(session)
  { 
    return NextResponse.next();
  }else{
    return NextResponse.rewrite(new URL('/404',request.url));
  }
}


export const config={
    matcher :  ['/dashbord']
}
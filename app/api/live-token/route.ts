import { NextResponse } from "next/server";
export async function POST(){if(!process.env.GEMINI_API_KEY)return NextResponse.json({error:"Gemini is not configured"},{status:503});return NextResponse.json({token:null,message:"Implement provider-supported ephemeral token exchange before enabling browser Live sessions."},{status:501});}

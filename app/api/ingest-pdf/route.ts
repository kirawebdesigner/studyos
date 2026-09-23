import { NextResponse } from "next/server";
export const maxDuration = 60;

export async function POST(req:Request){const form=await req.formData();const file=form.get("file");if(!(file instanceof File)||file.type!=="application/pdf")return NextResponse.json({error:"A PDF file is required"},{status:400});return NextResponse.json({status:"accepted",filename:file.name,message:"Connect Supabase Storage and background ingestion worker for production processing."},{status:202});}

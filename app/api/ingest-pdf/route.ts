import { NextResponse } from "next/server";
export const maxDuration = 60;

export async function POST(req:Request){try{const form=await req.formData();const file=form.get("file");if(!(file instanceof File)||file.type!=="application/pdf")return NextResponse.json({error:"A PDF file is required"},{status:400});return NextResponse.json({status:"accepted",filename:file.name,message:"Connect Supabase Storage and background ingestion worker for production processing."},{status:202});}catch{ return NextResponse.json({error:"Use multipart/form-data with a PDF file field named file"},{status:400});}}

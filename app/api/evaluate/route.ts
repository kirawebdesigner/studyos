import { NextResponse } from "next/server"; import { evaluateStudentAnswer } from "@/lib/ai/jev";
export const maxDuration = 60;

export async function POST(req:Request){try{const body=await req.json();for(const k of ["question","idealAnswer","rubricCriteria","studentAnswer"]){if(!(k in body))return NextResponse.json({error:`Missing ${k}`},{status:400});}return NextResponse.json(await evaluateStudentAnswer(body));}catch(e){console.error(e);return NextResponse.json({error:"Evaluation unavailable"},{status:500});}}

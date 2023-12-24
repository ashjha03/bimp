import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";

export async function POST(req) {
  console.log("recieved");
  return NextResponse.json({ message: "Got it" });
  //   const data = await req.formData();
  //   const file = data.get("profileImg");
  //   if (!file)
  //     return NextResponse.json({ message: "No Image Found", success: false });

  //   const byteData = await file.arrayBuffer();
  //   const buffer = Buffer.from(byteData);
  //   const path = `./public/${data.username}`;
  //   await writeFile(path, buffer);
  //   return NextResponse.json({
  //     message: "File uploaded successfully",
  //     success: true,
  //   });
}

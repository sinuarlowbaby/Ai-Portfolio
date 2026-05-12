import { NextResponse } from "next/server";
import { readFileSync } from "fs";
import path from "path";

export async function GET() {
    try {
        const filePath = path.join(process.cwd(), "public", "Sinu_Arlow_Baby_Resume.pdf");
        const fileBuffer = readFileSync(filePath);

        return new NextResponse(fileBuffer, {
            status: 200,
            headers: {
                "Content-Type": "application/pdf",
                "Content-Disposition": 'attachment; filename="Sinu_Arlow_Baby_Resume.pdf"',
                "Content-Length": fileBuffer.length.toString(),
            },
        });
    } catch {
        return new NextResponse("Resume not found", { status: 404 });
    }
}

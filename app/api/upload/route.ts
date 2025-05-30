export const runtime = 'nodejs';
import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';
import { randomUUID } from 'crypto';

export const POST = async (req: NextRequest) => {
    try {
        const formData = await req.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
        }

        const allowedTypes = [
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ];

        if (!allowedTypes.includes(file.type)) {
            return NextResponse.json({ error: 'Invalid file type' }, { status: 400 });
        }

        const arrayBuffer = await file.arrayBuffer();
        const bytes = new Uint8Array(arrayBuffer);

        const originalName = file.name;
        const fileExt = originalName.split('.').pop();
        const baseName = originalName.split('.').slice(0, -1).join('.');
        const uniqueFilename = `${baseName}-${randomUUID()}.${fileExt}`;

        // ✅ Use /tmp on Vercel
        const filePath = path.join('/tmp', uniqueFilename);
        await writeFile(filePath, bytes);

        return NextResponse.json({
            message: 'File uploaded successfully',
            filePath: filePath // Local path, not web-accessible
        });

    } catch (err: any) {
        console.error('UPLOAD FAILED:', err);
        return NextResponse.json({ error: 'Upload failed', details: err.message }, { status: 500 });
    }
};

export const runtime = 'nodejs';
import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
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

        const tmpDir = path.join('/tmp', 'uploads');
        if (!existsSync(tmpDir)) {
            await mkdir(tmpDir, { recursive: true });
        }

        const filePath = path.join(tmpDir, uniqueFilename);
        await writeFile(filePath, bytes);

        return NextResponse.json({
            message: 'File uploaded successfully',
            filePath: filePath // Note: This path is not publicly accessible
        });

    } catch (err: any) {
        console.error('UPLOAD FAILED:', err);
        return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
    }
};

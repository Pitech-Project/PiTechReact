export const runtime = 'nodejs';

import { NextRequest, NextResponse } from 'next/server';
import { put } from '@vercel/blob';
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

    const originalName = file.name;
    const fileExt = originalName.split('.').pop();
    const baseName = originalName.split('.').slice(0, -1).join('.');
    const uniqueFilename = `${baseName}-${randomUUID()}.${fileExt}`;

    // Upload to Vercel Blob (private or public access)
    const blob = await put(`uploads/${uniqueFilename}`, file, {
      access: 'public', // or 'public' if you want it downloadable
    });

    return NextResponse.json({
      message: 'File uploaded to Vercel Blob successfully',
      url: blob.url, // Permanent file URL
    });

  } catch (err: any) {
    console.error('UPLOAD FAILED:', err);
    return NextResponse.json({ error: 'Upload failed', details: err.message }, { status: 500 });
  }
};

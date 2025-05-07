import { NextResponse } from 'next/server';
 
export async function POST() {

  const response = NextResponse.json({ message: 'Logged out' });
 
  // Clear the session cookie

  response.cookies.set('session', '', {

    path: '/',

    expires: new Date(0), // Expire immediately

  });
 
  return response;

}

 
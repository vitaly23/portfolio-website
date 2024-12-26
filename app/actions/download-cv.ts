import { NextResponse } from 'next/server';

export async function downloadCV() {
  try {
    const headers = new Headers({
      'Content-Disposition': 'attachment; filename="Vitaly Gorelik - CV.pdf"',
      'Content-Type': 'application/pdf',
    });

    // Redirect the response to the file in the public folder
    const url = '/Vitaly Gorelik - CV.pdf'; // Ensure the file exists in the `public` directory

    return NextResponse.rewrite(new URL(url, process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'), {
      headers,
    });
  } catch (error) {
    console.error('Error in download-cv action:', error);
    return new Response('Error downloading CV', { status: 500 });
  }
}
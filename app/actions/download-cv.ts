import { NextResponse } from 'next/server'

export async function downloadCV() {
  try {
    // Use NextResponse to serve the file from the public directory
    return NextResponse.next({
      headers: {
        'Content-Disposition': 'attachment; filename="Vitaly Gorelik - CV.pdf"',
        'Content-Type': 'application/pdf',
      },
      url: '/Vitaly Gorelik - CV.pdf',
    })
  } catch (error) {
    console.error('Error in download-cv action:', error)
    return new Response('Error downloading CV', { status: 500 })
  }
}


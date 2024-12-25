import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'
import ProgressBar from './components/ProgressBar'
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vitaly Gorelik - Full Stack Engineer',
  description: 'Portfolio of Vitaly Gorelik, a Full Stack Engineer specializing in Python and React development.',
  icons: {
    icon: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LogoFast%20Icon-DxrHwwCwzFofqqmzRMEHAM16BfIPwf.svg',
        href: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LogoFast%20Icon-DxrHwwCwzFofqqmzRMEHAM16BfIPwf.svg',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col md:flex-row">
            <ProgressBar />
            <main className="flex-1 md:ml-16 flex justify-center">
              <div className="max-w-4xl w-full px-4 sm:px-6 lg:px-8">
                {children}
              </div>
            </main>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}


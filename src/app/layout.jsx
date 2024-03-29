import Navbar from '../components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

import './globals.css'
import { Inter, Roboto, Poppins, } from 'next/font/google'
import { ThemeProvider } from '@/context/ThemeContext'


import AuthProvider from "@/components/AuthProvider/AuthProvider"




const inter = Inter({ subsets: ['latin'] })



export const metadata = {
  title: 'پروژه نکست جی اس',
  description: 'اولین سایت من با نکست جی اس',
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="fa">
      <body className={inter.className}>
        <ThemeProvider>

          <AuthProvider>

          <div className="container">

            <Navbar />

            {children}
            
            <Footer />
          
          </div>
          
          </AuthProvider>

        </ThemeProvider>
        
        

      </body>

        
        
    </html>
  )
}

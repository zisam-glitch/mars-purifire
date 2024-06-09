import { Roboto,Poppins,Ubuntu,Teko,Lora } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import '../app/assets/scss/style.scss'
import '../app/assets/css/materialdesignicons.min.css'

const roboto = Roboto({ 
  subsets: ['latin'],
  weight:['100','300','400','500','700','900'],
  variable: '--font-roboto',
})
const poppins = Poppins({ 
  subsets: ['latin'],
  weight:['100','200','300','400','500','600','700','800','900'],
  variable: '--font-poppins',
})
const ubuntu = Ubuntu({ 
  subsets: ['latin'],
  weight:['300','400','500','700'],
  variable: '--font-ubuntu',
})
const teko = Teko({ 
  subsets: ['latin'],
  weight:['300','400','500','700'],
  variable: '--font-teko',
})
const lora = Lora({ 
  subsets: ['latin'],
  weight:['400','500','600','700'],
  variable: '--font-lora',
})

export const metadata = {
  title: 'Fronter - Next Js One Page & Multipurpose Parallax Template',
  description: 'Fronter - Next Js One Page & Multipurpose Parallax Template',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${poppins.variable} ${ubuntu.variable} ${teko.variable} ${lora.variable}`}>{children}</body>
    </html>
  )
}

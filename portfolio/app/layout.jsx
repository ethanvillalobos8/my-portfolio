import './globals.css'

export const metadata = {
  title: 'Portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html className="bg-[#030204]" lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}

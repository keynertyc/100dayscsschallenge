import './globals.css'


export const metadata = {
  title: '100 Days Css Challenge',
  description: '100 Days Css Challenge',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased ">{children}</body>
    </html>
  )
}

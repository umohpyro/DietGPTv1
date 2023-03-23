import './globals.css'

export const metadata = {
  title: 'DietGPT',
  description: 'Your Diet Buddy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

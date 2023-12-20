export const metadata = {
  title: 'Dashboard',
  description: 'Logged in user dashboard.',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

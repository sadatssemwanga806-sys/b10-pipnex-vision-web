export const metadata = { title: 'Pipnex - B10 Vision', description: 'Pipnex Trending Website' }
export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body style={{margin:0}}>{children}</body>
    </html>
  )
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div>
            <h1>این بلاگ من است</h1>
            {children}
        </div>
        
    )
  }
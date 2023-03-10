import '../styles/globals.css';
import Header from '../components/Header';
import { Footer } from '../components/footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
      <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
      </head>
      <body>
        
        <Header />
        <main className="bg-page-gradient pt-[var(--navlink-total-height)]">
          {children}
        </main>
        <Footer />
       
      </body>
    </html>
  )
}

import { Suspense } from 'react'

import { Footer } from './Footer'
import { Navbar } from './Navbar'

export const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Suspense>
      <Navbar />
    </Suspense>
    {children}
    <Suspense>
      <Footer />
    </Suspense>
  </>
)

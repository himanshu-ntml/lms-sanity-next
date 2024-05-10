import '@/styles/index.css'

import type { Metadata, Viewport } from 'next'
import { toPlainText } from 'next-sanity'

import { MainLayout } from '@/components/global/MainLayout'
import { urlForOpenGraphImage } from '@/sanity/lib/utils'
import { loadHomePage, loadSettings } from '@/sanity/loader/loadQuery'

export async function generateMetadata(): Promise<Metadata> {
  const [{ data: settings }, { data: homePage }] = await Promise.all([
    loadSettings(),
    loadHomePage(),
  ])

  const ogImage = urlForOpenGraphImage(settings?.ogImage)
  return {
    title: homePage?.title
      ? {
          template: `%s | ${homePage.title}`,
          default: homePage.title || 'Personal website',
        }
      : undefined,
    description: homePage?.overview
      ? toPlainText(homePage.overview)
      : undefined,
    openGraph: {
      images: ogImage ? [ogImage] : [],
    },
  }
}

export const viewport: Viewport = {
  themeColor: '#000',
}

export default async function IndexRoute({
  children,
}: {
  children: React.ReactNode
}) {
  return <MainLayout>{children}</MainLayout>
}

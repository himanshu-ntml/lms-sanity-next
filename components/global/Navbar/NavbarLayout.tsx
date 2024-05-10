import Image from 'next/image'
import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import iconImage from '@/public/mahir-logo.png'
import type { MenuItem } from '@/types'

export interface NavbarProps {
  data: {
    menuItems: { title: string; path: string }[]
  }
}
export default function Navbar(props: NavbarProps) {
  const { data } = props
  const menuItems = data?.menuItems || ([] as MenuItem[])
  return (
    <header className="sticky top-0 z-10 flex flex-wrap items-center justify-between gap-x-5 bg-white/50 border-b-2 px-4 py-4 backdrop-blur md:px-16 md:py-5 lg:px-32">
      <Link href="/">
        <Image
          height={44}
          width={130}
          src={iconImage}
          quality={100}
          alt="logo"
          priority
        />
      </Link>
      <nav className="flex gap-x-6 items-center md:text-xl">
        {menuItems &&
          menuItems.map(({ title, path }) => (
            <Link
              key={title}
              className={`group text-lg hover:text-black text-gray-600 capitalize`}
              href={path}
            >
              {title}
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary" />
            </Link>
          ))}
        <Link
          href="/login"
          className={cn('ml-4', buttonVariants({ variant: 'default' }))}
        >
          Login
        </Link>
      </nav>
    </header>
  )
}

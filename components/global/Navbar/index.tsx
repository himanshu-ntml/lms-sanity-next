import NavbarLayout, { NavbarProps } from './NavbarLayout'

export async function Navbar() {
  const navbarProps: NavbarProps = {
    data: {
      menuItems: [
        { title: 'about us', path: 'about-us' },
        { title: 'FAQs', path: 'faqs' },
        { title: 'contact us', path: 'contact' },
        { title: 'trainings', path: 'trainings' },
      ],
    },
  }
  return <NavbarLayout data={navbarProps.data} />
}

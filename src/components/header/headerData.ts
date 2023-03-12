import logoIcon from 'assets/starter-code/assets/shared/desktop/logo.svg'
import menuIcon from 'assets/starter-code/assets/shared/tablet/icon-hamburger.svg'
import cartIcon from 'assets/starter-code/assets/shared/desktop/icon-cart.svg'

export const headerData = {
  logo: {
    img: logoIcon,
    link: '/',
  },
  menu: menuIcon,
  cartIcon,
  navLinks: [
    {
      text: 'HOME',
      navLink: '/',
    },
    {
      text: 'HEADPHONES',
      navLink: '/headpones',
    },
    {
      text: 'SPEAKERS',
      navLink: '/speakers',
    },
    {
      text: 'EARPHONES',
      navLink: '/earphones',
    },
  ],
}

//////IMAGE ASSETS
//zx9-Speaker
import zx9Mobile from 'assets/starter-code/assets/product-zx9-speaker/mobile/image-category-page-preview.jpg'
import zx9Tablet from 'assets/starter-code/assets/product-zx9-speaker/tablet/image-category-page-preview.jpg'
import zx9Desktop from 'assets/starter-code/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg'

//zx7-Speaker
import zx7Mobile from 'assets/starter-code/assets/product-zx7-speaker/mobile/image-category-page-preview.jpg'
import zx7Tablet from 'assets/starter-code/assets/product-zx7-speaker/tablet/image-category-page-preview.jpg'
import zx7Desktop from 'assets/starter-code/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg'

export const speakersData = [
  {
    productImg: {
      mobile: zx9Mobile,
      tablet: zx9Tablet,
      desktop: zx9Desktop,
      alt: 'image of zx9',
    },
    title: 'New product',
    heading: 'ZX9 speaker',
    description: `Upgrade your sound system with the all new ZX9 active speaker. It's a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.`,
    btn: {
      btnText: 'See product',
      btnPath: '/product/zx9-speaker',
    },
  },
  {
    productImg: {
      mobile: zx7Mobile,
      tablet: zx7Tablet,
      desktop: zx7Desktop,
      alt: 'image of zx7',
    },

    heading: 'ZX7 speaker',
    description:
      'Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
    btn: {
      btnText: 'See product',
      btnPath: '/product/zx7-speaker',
    },
  },
]

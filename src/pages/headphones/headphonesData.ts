//////IMAGE ASSETS
//xx99-Mark-2 Headphones
import xx99mark2Mobile from 'assets/starter-code/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg'
import xx99mark2Tablet from 'assets/starter-code/assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg'
import xx99mark2Desktop from 'assets/starter-code/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg'

//xx99 Mark-1 Headphones
import xx99mark1Mobile from 'assets/starter-code/assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg'
import xx99mark1Tablet from 'assets/starter-code/assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg'
import xx99mark1Desktop from 'assets/starter-code/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg'

//xx59 Headphones
import xx59Mobile from 'assets/starter-code/assets/product-xx59-headphones/mobile/image-category-page-preview.jpg'
import xx59Tablet from 'assets/starter-code/assets/product-xx59-headphones/tablet/image-category-page-preview.jpg'
import xx59Desktop from 'assets/starter-code/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg'

export const headphonesData = [
  {
    productImg: {
      mobile: xx99mark2Mobile,
      tablet: xx99mark2Tablet,
      desktop: xx99mark2Desktop,
    },
    title: 'New product',
    heading: 'XX99 Mark II Headphones',
    description:
      'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound',
    btn: {
      btnText: 'See product',
      btnPath: '/product/xx99-mark-two-headphones',
    },
  },
  {
    productImg: {
      mobile: xx99mark1Mobile,
      tablet: xx99mark1Tablet,
      desktop: xx99mark1Desktop,
    },

    heading: 'XX99 Mark I Headphones',
    description:
      'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
    btn: {
      btnText: 'See product',
      btnPath: '/product/xx99-mark-one-headphones',
    },
  },
  {
    productImg: {
      mobile: xx59Mobile,
      tablet: xx59Tablet,
      desktop: xx59Desktop,
    },

    heading: 'XX59 Headphones',
    description:
      'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
    btn: {
      btnText: 'See product',
      btnPath: '/product/xx59-headphones',
    },
  },
]

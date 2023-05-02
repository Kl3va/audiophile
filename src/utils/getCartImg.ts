//Images
import yx1CartImg from 'assets/starter-code/assets/cart/image-yx1-earphones.jpg'
import xx59CartImg from 'assets/starter-code/assets/cart/image-xx59-headphones.jpg'
import xx99m1CartImg from 'assets/starter-code/assets/cart/image-xx99-mark-one-headphones.jpg'
import xx99m2CartImg from 'assets/starter-code/assets/cart/image-xx99-mark-two-headphones.jpg'
import zx7CartImg from 'assets/starter-code/assets/cart/image-zx7-speaker.jpg'
import zx9CartImg from 'assets/starter-code/assets/cart/image-zx9-speaker.jpg'

const cartImgArray = [
  {
    id: 1,
    img: yx1CartImg,
  },
  {
    id: 2,
    img: xx59CartImg,
  },

  {
    id: 3,
    img: xx99m1CartImg,
  },
  {
    id: 4,
    img: xx99m2CartImg,
  },
  {
    id: 5,
    img: zx7CartImg,
  },
  {
    id: 6,
    img: zx9CartImg,
  },
]

export const getCartImg = (id: number) => {
  const imgObj = cartImgArray.find((cartImg) => cartImg.id === id)

  return imgObj?.img
}

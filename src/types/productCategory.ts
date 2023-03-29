export interface productCategory {
  productImg: {
    mobile: string
    tablet: string
    desktop: string
  }
  title?: string | null
  heading: string
  description: string
  btn: {
    btnText: string
    btnPath: string
  }
}

export interface formDataProps {
  heading: string
  tertiaryHeading: string
  totalText: string
  shippingText: string
  vatText: string
  grandTotalText: string
  btnPaymentText: string
  billingInfo: {
    heading: string
    nameInfo: inputProp
    emailInfo: inputProp
    numberInfo: inputProp
  }
  shippingInfo: {
    heading: string
    addressInfo: inputProp
    zipInfo: inputProp
    cityInfo: inputProp
    countryInfo: inputProp
  }
  paymentInfo: {
    heading: string
    icon: string
    cashText: string
    paymentRadioBtns: {
      label: string
      eMoneyInfo: eMoneyProp
      cashInfo: eMoneyProp
    }
    eNumberInfo: inputProp
    ePinInfo: inputProp
  }
}

interface inputProp {
  label: string
  placeholder: string
  inputName: string
}

interface eMoneyProp {
  label: string
  inputName: string
}

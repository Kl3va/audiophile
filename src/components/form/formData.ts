import iconCashOnDelivery from 'assets/starter-code/assets/checkout/icon-cash-on-delivery.svg'

export const formData = {
  heading: 'checkout',
  tertiaryHeading: 'Summary',
  totalText: 'Total',
  shippingText: 'Shipping',
  vatText: 'vat (included)',
  grandTotalText: 'grand total',
  btnPaymentText: 'continue & pay',
  billingInfo: {
    heading: 'Billing details',
    nameInfo: {
      label: 'Name',
      placeholder: 'Alexei Ward',
      inputName: 'name',
    },
    emailInfo: {
      label: 'Email Address',
      placeholder: 'alexei@mail.com',
      inputName: 'email',
    },
    numberInfo: {
      label: 'Phone Number',
      placeholder: '+1 202-555-0136',
      inputName: 'phone',
    },
  },
  shippingInfo: {
    heading: 'Shipping info',
    addressInfo: {
      label: 'Address',
      placeholder: '1137 Williams Avenue',
      inputName: 'address',
    },
    zipInfo: {
      label: 'ZIP code',
      placeholder: '10001',
      inputName: 'zip',
    },
    cityInfo: {
      label: 'City',
      placeholder: 'New York',
      inputName: 'city',
    },
    countryInfo: {
      label: 'Country',
      placeholder: 'United States',
      inputName: 'country',
    },
  },
  paymentInfo: {
    heading: 'Payment details',
    icon: iconCashOnDelivery,
    cashText: `The 'Cash on Delivery' option enables you to pay in cash when our delivery courier arrives 
  at your residence. Just make sure your address is correct so that your order will not be cancelled.`,
    paymentRadioBtns: {
      label: 'Payment Method',
      eMoneyInfo: {
        label: 'e-Money',
        inputName: 'view',
      },
      cashInfo: {
        label: 'Cash on Delivery',
        inputName: 'view',
      },
    },
    eNumberInfo: {
      label: 'e-Money Number',
      placeholder: '238521993',
      inputName: 'eNumber',
    },
    ePinInfo: {
      label: 'e-money PIN',
      placeholder: '6891',
      inputName: 'ePin',
    },
  },
}

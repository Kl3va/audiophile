import React from 'react'

//Go back button component
import GoBack from 'components/go-back/GoBack'

//FormSubmit component and data
import FormSubmit from 'components/form/FormSubmit'
import { formData } from 'components/form/formData'

//Summary component and data
import Summary from 'components/summary/Summary'

type Props = {}

const Checkout = (props: Props) => {
  return (
    <main>
      <GoBack />
      <section>
        <FormSubmit {...formData} />
        <Summary />
      </section>
    </main>
  )
}

export default Checkout

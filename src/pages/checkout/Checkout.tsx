import React from 'react'

//Go back button component
import GoBack from 'components/go-back/GoBack'

//FormSubmit component
import FormSubmit from 'components/form/FormSubmit'

//Summary component
import Summary from 'components/summary/Summary'

type Props = {}

const Checkout = (props: Props) => {
  return (
    <main>
      <GoBack />
      <section>
        <FormSubmit />
        <Summary />
      </section>
    </main>
  )
}

export default Checkout

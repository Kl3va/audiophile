import React from 'react'

//Go back button component
import GoBack from 'components/go-back/GoBack'

//FormSubmit component and data
import FormSubmit from 'components/form/FormSubmit'
import { formData } from 'components/form/formData'

//Summary component and data
//import Summary from 'components/summary/Summary'
//import { summaryData } from 'components/summary/summaryData'

//Styles
import styles from 'pages/checkout/checkout.module.scss'

const Checkout = () => {
  return (
    <main className={styles.main}>
      <GoBack />
      <section>
        <FormSubmit {...formData} />
        {/*<Summary {...summaryData} />*/}
      </section>
    </main>
  )
}

export default Checkout

import { useState } from 'react'
import { useFormik, FormikHelpers } from 'formik'
import { useAppDispatch } from 'store/hooks'
import { controlCheckoutPopUp } from 'store/features/modal/modalSlice'
import * as Yup from 'yup'
import { toast } from 'react-toastify'

interface FormValues {
  name: string
  email: string
  phone: string
  address: string
  zip: string
  city: string
  country: string
  showForm: boolean
  eNumber?: string
  ePin?: string
}

// interface UseFormReturnType {
//   values: FormValues
//   handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
//   handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void
//   handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
//   errors: { [key: string]: string }
//   touched: { [key: string]: boolean }
// }

export const useForm = () => {
  // const [values, setValues] = useState<FormValues>({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   address: '',
  //   zip: '',
  //   city: '',
  //   country: '',
  //   showForm: true,
  //   eNumber: '',
  //   ePin: '',
  // })

  const initialValues: FormValues = {
    name: '',
    email: '',
    phone: '',
    address: '',
    zip: '',
    city: '',
    country: '',
    showForm: true,
    eNumber: '',
    ePin: '',
  }

  //Dispatch and state
  const dispatch = useAppDispatch()

  const handleSubmit = async (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    //
    //resetForm()
    try {
      // Validate the form
      await validationSchema.validate(values)

      // If there are no errors, show the modal and reset the form
      //resetForm()
      dispatch(controlCheckoutPopUp(true))
      setTimeout(() => {
        resetForm()
      }, 100)
    } catch (error) {
      // If there are errors, do nothing and let the form display the error messages
      // toast.error(`${error.message}`)
      console.log(error)
    }
  }

  const validationSchema = Yup.object({
    name: Yup.string().required("Can't be empty!"),
    email: Yup.string().email('Wrong format').required("Can't be empty!"),
    phone: Yup.number().required('Wrong format'),
    address: Yup.string().required("Can't be empty!"),
    zip: Yup.number().required('Wrong zip format!'),
    showForm: Yup.boolean().required(),
    city: Yup.string().required("Can't be empty!"),
    country: Yup.string().required("Can't be empty!"),
    // eNumber: Yup.number(),
    // ePin: Yup.number().max(9999, 'Pin must be 4 digits'),
  })

  const formik = useFormik<FormValues>({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  })

  //console.log(formik.errors, initialValues)

  return {
    values: formik.values,
    setFieldValue: formik.setFieldValue,
    handleChange: formik.handleChange,
    handleBlur: formik.handleBlur,
    handleSubmit: formik.handleSubmit,
    errors: formik.errors,
    touched: formik.touched,
  }
}

import { useState } from 'react'
import { useFormik, FormikHelpers } from 'formik'
import * as Yup from 'yup'

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

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target
  //   setValues((prevValues) => ({
  //     ...prevValues,
  //     [name]: value,
  //   }))
  // }

  const handleSubmit = (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    //console.log(values)
    resetForm()
  }

  const validationSchema = Yup.object({
    name: Yup.string().required("Can't be empty!"),
    email: Yup.string().email('Wrong format').required("Can't be empty!"),
    phone: Yup.number().required('Wrong format'),
    address: Yup.string().required("Can't be empty!"),
    zip: Yup.number().required('Wrong zip format!'),
    city: Yup.string().required("Can't be empty!"),
    country: Yup.string().required("Can't be empty!"),
    eNumber: Yup.number().required('Wrong format'),
    ePin: Yup.number()
      .max(9999, 'Pin must be 4 digits')
      .required('Wrong format!'),
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

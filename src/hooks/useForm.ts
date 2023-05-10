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

export const useForm = () => {
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
      //console.log(error)
      //toast.error(`${error}`)
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

// referenced point: https://www.telerik.com/blogs/how-to-build-custom-forms-react-hooks
import { useState, useEffect, useRef } from 'react'

const useForm = ({ initialValues, onSubmit }) => {
  // in other cases that are not custom hooks 3 useState calls would be a time I would switch over to useReducer because I prepfer the testability of that system to useState. 3 useState calls often signals a certain level of complexity that will go up rather than down over time.
  const [values, setValues] = useState(initialValues || {})
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [onBlur, setOnBlur] = useState(false)

  const formRendered = useRef(true)

  useEffect(() => {
    if (!formRendered.current) {
      setValues(initialValues)
      setIsSubmitting(false)
      setOnBlur(false)
    }
    formRendered.current = false
  }, [initialValues])

  const handleChange = (event) => {
    const { target } = event
    const { name, value } = target
    event.persist()
    setValues({ ...values, [name]: value })
  }

  const handleBlur = (event) => {
    const { target } = event
    const { name } = target
    setTouched({ ...touched, [name]: true })
    setErrors({ ...errors })
  }

  const handleSubmit = (event) => {
    if (event) event.preventDefault()
    setIsSubmitting(true)
    setErrors({ ...errors })
    onSubmit({ values, errors })
  }

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  }
}

export default useForm

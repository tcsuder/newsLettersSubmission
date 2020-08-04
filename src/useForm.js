import { useState, useEffect, useRef } from 'react'

const useForm = ({ initialValues, onSubmit }) => {
  const [values, setValues] = useState(initialValues || {})
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const formRendered = useRef(true)

  useEffect(() => {
    if (!formRendered.current) {
      setValues(initialValues)
      setIsSubmitting(false)
    }
    formRendered.current = false
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = (event) => {
    const { target } = event
    const { name, type } = target
    const value = type === 'checkbox' ? target.checked : target.value
    setValues({ ...values, [name]: value })
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
    isSubmitting,
    handleChange,
    handleSubmit,
  }
}

export default useForm

import { useState, useEffect } from 'react';


const useForm = (callback, validate, formSchemia = {}, initialValues) => {

  const [formData, setFormData] = useState([]);

  // const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    
    let formSchemias = []
    formSchemias = formSchemia.reduce((obj, item) => {
      return {
        ...obj,
        [item.name]: {...item, value: initialValues && initialValues[item.name] ? initialValues[item.name] : ''},
      };
    }, {});
    setFormData(formSchemias)
    // eslint-disable-next-line
  },[])

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      const cleanData = Object.entries(formData).reduce((arr, [key, {value}] ) => ({
        ...arr,
        [key]:value,
      }),{})      
      callback({...initialValues, ...cleanData})
    }
    // eslint-disable-next-line
  }, [errors]) 


  const handleSubmit = (event) => {
    if (event) event.preventDefault()
    setIsSubmitting(true)
    setErrors(validate(formData));
  }

  const handleOnFocus = (event) => {
    setErrors({ ...errors, [event.target.name]: '' })

  }
 
  const updateValues = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: {...formData[name], value }})
  }

  const handlers = {
    onChange:updateValues,
    onFocus:handleOnFocus
  }

  return {
    handleSubmit,
    errors,
    formData,
    handlers
  }
};

export default useForm;
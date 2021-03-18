import { useState, useEffect } from "react";

const useForm = (validate: any, callback: any) => {

  const [values, setValues]: Array<any>= useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  });

  const [errors, setErrors]: Array<any> = useState({})

  const [isSubmitting, setIsSubmitting]: Array<any>= useState(false);


  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };
  
  const handleSubmit = (e: { preventDefault: () => void; }) => {

    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect( () => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback()
    }
  }, [callback, errors, isSubmitting]);
  return { handleChange, handleSubmit, values, errors };

}

export default useForm;
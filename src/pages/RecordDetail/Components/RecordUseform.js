import { useState, useEffect } from 'react';

const RecordUseform= (callback,validate) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
        callback()
    }
  }, [errors]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  

  const handleChange = (event) => {
    event.persist();
    if(event.target.name=="attachment"){
      
      let file = event.target.files[0];
        let reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = function() {
          const base64String=reader.result ;
          setValues(values => ({ ...values, [event.target.name]: base64String }));
          
        };

        reader.onerror = function() {
          console.log(reader.error);
        }
    }else{
      setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    }
    
  };

  return {
    handleChange,
    handleSubmit,
    values,
    setValues,
    errors,
  }
};
export default RecordUseform;

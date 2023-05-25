import { useState, useEffect } from 'react';
const EstimatedTime=100;

const BudgetUseForm = (callback,validate) => {

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
    if(event.target.name=="EstimatedHourlyRate"){
      setValues(values => ({ ...values, "cost": event.target.value*values.estimatetime,"price": event.target.value*values.estimatetime+values.profit||0 }));
      setValues(values => ({ ...values, "price":values.cost+values.profit }));
    }else if(event.target.name=="profit"){
      setValues(values =>({ ...values, "price": parseInt(values.cost)+ parseInt( event.target.value)}));
    }
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));

  };

  return {
    handleChange,
    handleSubmit,
    values,
    setValues,
    errors,
  }
};
export default BudgetUseForm;
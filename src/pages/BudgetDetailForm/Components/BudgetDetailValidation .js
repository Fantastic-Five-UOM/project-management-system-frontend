export default function validate(values) {
    let errors = {};
    if (!values.projectName   ) {
        errors.projectName = 'project Name is required';
    }
    if (!values.projectId  ) {
        errors.projectId = 'project ID is required';
    }
    if(!values.EstimatedHourlyRate){
        errors.EstimatedHourlyRate= 'Estimated Hourly Rate  is required';
    }
    if(!values.cost){
        errors.cost= 'cost by is required'

    }

    if(!values.record){
        errors.record= 'recorded by is required'

    }
    if(!values.cost){
        errors.cost= 'cost by is required'

    }
    if(!values.price){
        errors.price= 'cost by is required'

    }
    if(!values.profit){
        errors.profit= 'profit by is required'

    }
    return errors;
  };
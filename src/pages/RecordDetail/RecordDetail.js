import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Button from 'react-bootstrap/Button';
import RecordUseform from "./Components/RecordUseform";
import validate from "./Components/RecordDetailValidationRules";
import axios from 'axios';
import { useState } from "react";
import { useEffect } from "react";
import "./RecordDetail.css";


function RecordDetail() {
  const [projects, setProjects]=useState([])
  const [clients, setClients]=useState([])
  useEffect(()=>{
    axios
    .get('http://localhost:5148/api/Poject')
    .then (
      Response=>{ 
        setProjects(Response.data.result)
        setClients(Response.data.result)
        console.log(Response.data.result)
    })
    .catch(
      Error=> {
        console.log(Error)
    })
  },[])

  const submit = () => {
    axios
    .post('http://localhost:5148/api/Payment',
    {
      Paidby:values.clientId,
      amount:values.Amount,
      attachment:"pdf",
      PaymentType:"cash"
    }
    ).then (
      Response=>{   
        console.log(Response)
    })
    .catch(
      Error=> {
        console.log(Error)
    })
  };
 
  const  { values, handleChange, handleSubmit, errors } = RecordUseform(
    submit,
    validate ,
    projects 
  );


  return (
    <div className="App">
      <Form onSubmit={handleSubmit}>
      <Form.Group
          className="project-input"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>project Name</Form.Label>
          <Form.Control
            type="text"
            name="projectName"
            onChange={handleChange}
            value={values.projectName || ""}
            readOnly={true}
          />
          {errors.projectName && (
            <p className="help danger" style={{ color: "red" }}>
              {errors.projectName}
            </p>
          )}
        </Form.Group>
        <Form.Group className="projectid-input">
        <Form.Label>Project ID </Form.Label>
        <Form.Select name="projectId" onChange={handleChange}aria-label="Default select example">
            {projects.map((project)=>
            <option value={project.id}>{project.id} </option>
            )}
        </Form.Select> 
            {errors.projectId && (
              <p className="help danger" style={{ color: "red" }}>
                {errors.projectId}
              </p>
            )}
        </Form.Group>
      <Form.Group className="clientId-input">
        <Form.Label>Client ID  </Form.Label>
          <Form.Control 
           type="text"
           name="clientId"
           onChange={handleChange}
           value={values.clientId|| ""}
           aria-label="Amount (to the nearest Rupeels)" />  
        {errors.clientId && (
              <p className="help danger" style={{ color: "red" }}>
                {errors.clientId}
              </p>
            )}
        </Form.Group>       
        <Form.Group className="amount-input">
        <Form.Label>Amount </Form.Label>
        <InputGroup controlId="exampleForm.ControlInput1">
          <Form.Control 
           type="text"
           name="Amount"
           onChange={handleChange}
           value={values.Amount|| ""}
           aria-label="Amount (to the nearest Rupeels)" />
          <InputGroup.Text>LKR</InputGroup.Text>     
        </InputGroup>
        {errors.Amount && (
              <p className="help danger" style={{ color: "red" }}>
                {errors.Amount}
              </p>
            )}
    </Form.Group>
      <Form.Group className="date-input">
        <Form.Label>Date</Form.Label>
         <Form.Group controlId="dob">
          <Form.Control  
           type="date"
           name="date"
           onChange={handleChange}
          value={values.date || ""}
                  />
           {errors.date && (
              <p className="help danger" style={{ color: "red" }}>
                {errors.date}
              </p>
            )}
         </Form.Group>
     </Form.Group>
        <Form.Group className="record-input">
          <Form.Label>Recorded By</Form.Label>
          <Form.Control 
            type="text"
            name="record"
            onChange={handleChange}
            value={values.record || ""}/>
        </Form.Group>
        {errors.record && (
              <p className="help danger" style={{ color: "red" }}>
                {errors.record}
              </p>
            )}
        <Form.Group  style={{width:"20%",padding: "10px" }}  controlId="formFile" className="mb-3">
         <Form.Label style={{ width:"20%",padding: "10px" }}>attachment</Form.Label>
          <Form.Control 
              type="file"
              name="attachment"
              onChange={handleChange}
              value={values.attachment || ""}
             /> 
                {errors.attachment && (
              <p className="help danger" style={{ color: "red" }}>
                {errors.attachment}
              </p>
            )}
      </Form.Group>
      <Button  className="me-3 float-end" style={{ width: "190px", height: "50px", margin: "10px" }} type="submit">Add</Button>
      <Button  className="me-3 float-end" style={{ width: "100px", height: "50px", margin: "10px" }} type="reset">Cancel</Button>               
      </Form>
       </div>
  );
}
export default RecordDetail;

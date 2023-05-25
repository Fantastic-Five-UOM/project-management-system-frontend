import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import validate from "./Components/BudgetDetailValidation ";
import BudgetUseForm from "./Components/BudgetUseForm";
import axios from 'axios';
import "./BudgetDetailForm.css";
import { useParams } from "react-router-dom";


const now = 60;
const now2 = 1;
function BudgetDetailForm() {
  const {projectId}=useParams();

  const submit = () => {

    console.log(values)
    axios
    .post('http://localhost:5148/api/Budget',
    {
     // Id:values.projectId,
      Received:0, 
      yetToReceive:values.price,
      actualcost: values.actualtime*values.EstimatedHourlyRate,
      hourlyCost:values.EstimatedHourlyRate,
      plannedcost: values.cost,
      totalBudget:values.price,
     
    })
    .then (
      Response=>{ 
        console.log(Response)
    })
    .catch(
      Error=> {
        console.log(Error)
    })
  };
  const { values,setValues, handleChange, handleSubmit, errors } = BudgetUseForm(
    submit,
    validate
  );

  
  useEffect(()=>{
    axios
    .get(`http://localhost:5148/api/Project/${projectId}`)
    .then (
      Response=>{
        console.log(Response.data.result)
        setValues(values =>({ ...values, "projectName":Response.data.result.name,"estimatetime":Response.data.result.estimatetime,"actualtime":Response.data.result.actualtime,"projectId":Response.data.result.id}));
    })
    .catch(
      Error=> {
        console.log(Error)
    })
  },[])

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
            value={values.projectName || ""}
            readOnly={true}
          />
         {errors.project && (
            <p className="help danger" style={{ color: "red" }}>
              {errors.project}
            </p>
          )}
        </Form.Group>
        <Form.Group
          className="projectid-input"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>project ID</Form.Label>
          <Form.Control
            type="text"
            name="projectId"
            value={values.projectId || ""}
            readOnly={true}
          />
          {errors.projectid && (
            <p className="help danger" style={{ color: "red" }}>
              {errors.projectid}
            </p>
          )}
        </Form.Group>
        <InputGroup
          className="input-group-1"
          controlId="exampleForm.ControlInput1"
        >
          <Col className="rate-input">
            <Form.Label>Estimated Hourly Rate</Form.Label>
            <InputGroup className="price" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="number"
                name="EstimatedHourlyRate"
                onChange={handleChange}
                value={values.EstimatedHourlyRate|| 0}
                aria-label="Amount (to the nearest Rupeels)"
              />
              <InputGroup.Text>LKR</InputGroup.Text>
            </InputGroup>
            {errors.EstimatedHourlyRate && (
              <p className="help danger" style={{ color: "red" }}>
                {errors.EstimatedHourlyRate}
              </p>
            )}
          </Col>
          <Col className="cost-input">
            <Form.Label>Estimated Total Cost </Form.Label>
            <InputGroup controlId="exampleForm.ControlInput1">
              <Form.Control
                type="number"
                name="cost"
                onChange={handleChange}
                value={values.cost||0}
                readOnly={true}
                aria-label="Amount (to the nearest Rupeels)"
              />
              <InputGroup.Text>LKR</InputGroup.Text>
            </InputGroup>
            {errors.cost && (
              <p className="help danger" style={{ color: "red" }}>
                {errors.cost}
              </p>
            )}
          </Col>
        </InputGroup>
        <InputGroup
          className="input-group-1"
          controlId="exampleForm.ControlInput1"
        >
          <Col className="price-input">
            <Form.Label>Price </Form.Label>
            <InputGroup className="price" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="number"
                name="price"
                onChange={handleChange}
                value={values.price || 0}
                readOnly={true}
                aria-label="Amount (to the nearest Rupeels)"
              />
              <InputGroup.Text>LKR</InputGroup.Text>
            </InputGroup>
            {errors.price && (
              <p className="help danger" style={{ color: "red" }}>
                {errors.price}
              </p>
            )}
          </Col>
          <Col className="profit-input">
            <Form.Label>Profit </Form.Label>
            <InputGroup controlId="exampleForm.ControlInput1">
              <Form.Control
                type="number"
                name="profit"
                onChange={handleChange}
                value={values.profit || 0}
                aria-label="Amount (to the nearest Rupeels)"
              />
              <InputGroup.Text>LKR</InputGroup.Text>
            </InputGroup>
            {errors.profit && (
              <p className="help danger" style={{ color: "red" }}>
                {errors.profit}
              </p>
            )}
          </Col>
        </InputGroup>
        <Form.Group
          className="record-input"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Recorded By</Form.Label>
          <Form.Control
            type="text"
            name="record"
            onChange={handleChange}
            value={values.record || ""}
          />
          {errors.record && (
            <p className="help danger" style={{ color: "red" }}>
              {errors.record}
            </p>
          )}
          <div>
            <Button
              style={{ width: "100px", height: "50px", margin: "10px",backgroundColor:"red" }}
              className="me-1 float-end"
              type="submit"
            >
              Add
            </Button>
            <Button 
              style={{ width: "100px", height: "50px", margin: "10px"  }}
              className="me-1 float-end"
              type="reset"
            >
              Cancel
            </Button>
            
          </div>
        </Form.Group>
      </Form>
    </div>
  );
}

export default BudgetDetailForm;

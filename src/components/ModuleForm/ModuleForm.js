import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ModuleListItem from "../Module/ModuleListItem";
import "./ModuleForm.css"


export default function ModuleForm() {
  return (
    
    
      <Form>
        <div style={{paddingTop:"20px"}}>
        <center><h3> Creat Module</h3></center>
        </div>
      <div className="container shadow p-10 t=5 b-5 w-50 mb-3 bg- rounded"  >
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>ModuleName</Form.Label>
          <Form.Control type="text" placeholder="Enter  Module Name" bg-color="gray" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        

        
        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="5">
          </textarea>
        </Form.Group>
      

        
        <Form.Group className="mb-3" controlId="formBasicTasks">
          <Form.Label>Tasks</Form.Label>
        <ModuleListItem/>
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Estimated time</Form.Label>
          <Form.Control type="Time"  />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        
      
        
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Start Date</Form.Label>
          <Form.Control type="Date"  />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
       

       
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>End Date</Form.Label>
          <Form.Control type="Date"  />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        

        
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Estimated End Date</Form.Label>
          <Form.Control type="Date"  />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
       
       

       

        <Button variant="primary" type="submit">
          Submit
        </Button>
        </div>
      </Form>
    
   
  

  );
}

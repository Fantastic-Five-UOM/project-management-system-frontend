import React from 'react'

import Form from "react-bootstrap/Form";



export default function ModuleDetailsForm() {
  return (
    

<Form> 
<div style={{paddingTop:"20px"}}>
 <center><h2 className="Header1">Edit Module</h2></center>
</div>
<div className="container shadow p-10 t=5 b-5 w-50 mb-3 bg-white rounded"  >
<Form.Group className="mb-3 w-25" controlId="formBasicName">
<Form.Label>ModuleName</Form.Label>
<Form.Control type="text" placeholder="Enter  Module Name" />
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
      

        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Task</Form.Label>
        <ol class="list-group list-group-numbered">
        <li class="list-group-item"></li>
        <li class="list-group-item"></li>
        <li class="list-group-item"></li>
        </ol>
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Estimated time</Form.Label>
          <Form.Control type="Time"  />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
       


        
        <Form.Group className="mb-3" controlId="formBasicName">
         
          <h5>Time Tracking</h5>
          <Form.Label>Time Spent</Form.Label>
          <Form.Control type="Time"  />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        

        
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Time Remaining </Form.Label>
          <Form.Control type="Time"  />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
      
      

        
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Start Date</Form.Label>
          <Form.Control type="date"  />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
      
        

        
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Estimate End Date</Form.Label>
          <Form.Control type="date"  />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        


        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>assigned Developers</Form.Label>
        <ol class="list-group list-group-numbered">
  <li class="list-group-item"></li>
  <li class="list-group-item"></li>
  <li class="list-group-item"></li>
</ol>
</Form.Group>
</div>

</Form>

  )
}

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import "./Add.css";
import {useNavigate , Link} from "react-router-dom"

function GridComplexExample() {
  return (
   
    <Form>
    <div class="card">
  <div class="card-body">
    
  

        <h2>Add Request</h2>
      <Row className="mb-3">

      <Form.Group className="Field N1" controlId="formGridAddress1">
        <Form.Label>Project</Form.Label>
        <Form.Control placeholder="Hospital Manegemnet Software" />
      </Form.Group>

        <Form.Group as={Col} className="Field N2" controlId="formGidID">
          <Form.Label>Requirment ID</Form.Label>
          <Form.Control type="text" placeholder="Enter ID" />
        </Form.Group>

        <Form.Group as={Col} className="Field N3" controlId="formGridType">
          <Form.Label>Types</Form.Label>
         
          <Form.Select className="Field N4" defaultValue="Choose...">
            <option>Improvement</option>
            <option>Changing Request</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Form.Group as={Col} className="Field N5" controlId="formGridState">
          <Form.Label>Priority</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

      <Form.Group className="Field N6" controlId="formGridAddress2">
        <Form.Label>Description</Form.Label>
        <Form.Control placeholder="" />
      </Form.Group>

     
        <Form.Group as={Col} className="Field N7" controlId="formGridCity">
          <Form.Label>Attachment</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} className="Field N8" controlId="formGridState">
          <Form.Label>Report By</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>



      <Form.Group className="Field N2" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <button variant="primary" type="submit">
        Cencel
      </button>
      <button variant="primary" type="submit">
        Create
      </button>
      <Button  variant="secondary" size="mideum" active as={Link} to={"/Asign Task"}> Asign Task</Button>
      </div>
</div>
    </Form>
   
  );
}

export default GridComplexExample;
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Dropdown from 'react-bootstrap/Dropdown';
import "./Req.css";
import {useNavigate , Link} from "react-router-dom"


export default function req() {
  return (
    
    
         <section>

<form
            id="form"
            className="flex flex-col">

           
          <div className='Requirment'>
        <h2>Requirment</h2>
         <>
         <div class='Button'>
      <button variant="primary" size="mideum" active>
        Primary button
      </button>{' '}
      </div>
      <Button  variant="secondary" size="mideum" active as={Link} to={"/Add Request"}> +Add Reqeust</Button>
    </>
    

     <card>
      <Card.Header>Requirment01</Card.Header>
      <b>As a manager, I want to be able to understand my colleagues progress, so I can better report our sucess and failures.</b>
      <Card.Body>
        <Card.Title>Sub Request</Card.Title>
        <Card.Text>
        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
   <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
   <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
        </Card.Text>
        <button variant="primary">Features</button>
      </Card.Body>
    </card>


    <card>
      <Card.Header>Requirment02</Card.Header>
      <b>As a manager, I want to be able to understand my colleagues progress, so I can better report our sucess and failures.</b>
      <Card.Body>
        <Card.Title>Sub Request</Card.Title>
        <Card.Text>
        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
   <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
   <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
        </Card.Text>
        <button variant="primary">Improvement</button>
      </Card.Body>
    </card>
    
    </div>
    </form>
    </section>
    

   );
}




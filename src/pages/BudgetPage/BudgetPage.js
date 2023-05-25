import ProgressBar from "react-bootstrap/ProgressBar";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useRef,useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route,useRouteMatch } from "react-router-dom";
import BudgetDetailForm from "../BudgetDetailForm/BudgetDetailForm";
import RecordDetail from "../RecordDetail/RecordDetail";
import "./BudgetPage.css";


function BudgetPage() {
  const { path } = useRouteMatch();
  const progress1 =useRef();
  const progress2=useRef();
  const {projectId,name }=useParams();

const [payments,setPayments]=useState([])
const[price,setprice]=useState(0)
const[Received,setReceived]=useState(0)
const[RealCost,setRealCost]=useState(0)
const[EstimatedCost,setEstimatedCost]=useState()
useEffect(()=>{
  axios
  .get(`http://localhost:5148/api/Budget/ProjectId/${projectId}`)
  .then ( 
    Response=>{
      setprice(Response.data.result.totalBudget)
      setReceived(Response.data.result.received )
      setRealCost(Response.data.result.actualcost)
      setEstimatedCost(Response.data.result.plannedcost)
  })
  .catch(
    Error=> {
      console.log(Error)
  })

  axios
  .get(`http://localhost:5148/api/Payment/ProjectId/${projectId}`)
  .then(
    Response=>{
        setPayments(Response.data.result);
    })
    .catch(
      Error=> {
        console.log(Error)
    })
},[])

useEffect(() => {
  if (progress1.current) {
    const inner = progress1.current.querySelector(".progress-bar");
    if ( inner ) {
     inner.style.backgroundColor = "#621212";
    }
  }
 if (progress2.current){
  const inner = progress2.current.querySelector(".progress-bar");
  if ( inner ) {
   inner.style.backgroundColor = "#15AD2D";
  }
 }
  

}, [progress1],[progress2]);


  return (
    <Switch>
       <Route exact path={path}>
       <div className="App">
    
    <Link to={"/project"}>Projects</Link><Link to={`/project/${name}/${projectId}`}>/{name}({projectId})</Link><Link to={`/project/${name}/${projectId}/budget`}>/Budget</Link>
    <div style={{display:"flex",justifyContent:"space-between" ,alignItems:"baseline"}} >
      <p style={{fontSize:"20px",font:"inter",fontWeight:600, margin:"1.2rem"}}>Budget</p>
      <Link to={`/project/${name}/${projectId}/budget/BudgetDetailForm`}>
      <Button variant="primary" style={{margin:"10px",backgroundColor:"#305995" ,width:"fit-content"}}>+Add Details</Button>
      </Link>
    </div>
    <InputGroup className="progress-group"style={{justifyContent:"space-between" }} >
      <Col className="projectId-input" sm={8} >
        <div class="p-2 ">
          <ProgressBar className="progress1" ref={progress1} style={{backgroundColor:"#848484",width: "80%"}} now={4} />
        </div>
        <div class="p-2 ">
        <ProgressBar className="progress2" ref={progress2} style={{backgroundColor:"#15AD2D",width: "80%" }} now={4} />  
        
        </div>
      </Col>
      <Col className="card-input" sm={4}>
        <Card style={{ width: "16rem",margin:"10px"}}>
          <Card.Body>
              <div>
                <ul>
                  <li><div className="rectrangel-1" ></div><p className="text-1">Price</p></li>
                  <li> <div className="rectrangel-2" > </div><p  className="text-2">Received Payments</p></li>
                  <li> <div className="rectrangel-3" > </div><p  className="text-3"></p>Actual Cost</li>
                </ul>
              </div>
            </Card.Body>
          </Card>
      </Col>
    </InputGroup>
    <InputGroup className="input-group" style={{width:"105%",padding:"0.2rem"}} >
      <Col className="d-flex justify-content-center">
        <Card style={{ width: "195px" ,height: "114px"}}>
         <Card.Body>
            <Card.Title>Price</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {price} LKR
            </Card.Subtitle>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col className="d-flex justify-content-center">
        <Card style={{ width: "195px" ,height: "114px" }}>
          <Card.Body>
            <Card.Title>Received Price</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {Received} LKR
            </Card.Subtitle>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col className="d-flex justify-content-center">
        <Card style={{ width: "195px" ,height: "114px" }}>
          <Card.Body>
            <Card.Title>Real Cost</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {RealCost} LKR 
            </Card.Subtitle>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col className="d-flex justify-content-center">
        <Card style={{ width: "195px" ,height: "114px"}}>
          <Card.Body>
            <Card.Title>Estimated Cost</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {EstimatedCost} LKR
            </Card.Subtitle>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col className="d-flex justify-content-center">
      <Link to={`/project/${name}/${projectId}/budget/RecordDetail`}> 
      <Button variant="primary" style={{margin:"10px",backgroundColor:"#305995" ,width:"fit-content"}}>+Add Record</Button>
      </Link>
      </Col>
       
    </InputGroup>
    
    <div class="p-2 ">
    <Table style={{borderRadius:'12px',overflow: 'hidden',margin:"1.2rem"}}striped bordered hover>
    <thead >
      <tr style={{backgroundColor:" #05214B" }}>
        <th style={{color:"white"}}>Date</th>
        <th style={{color:"white"}}>Paid Person</th>
        <th style={{color:"white"}}>Amount(LKR)</th>
      </tr>
    </thead>
    <tbody>
      {payments.map((payment,index)=>
      <tr key={index}>
        <td>{payment.created.split("T")[0]}</td>
        <td>{payment.paidby}</td>
        <td>{payment.amount}</td>
      </tr>
       )}
      </tbody>
  </Table>
  </div>
  </div>

    </Route>         
      <Route path={`${path}/RecordDetail`} component={RecordDetail}/>
      <Route path={`${path}/BudgetDetailForm`} component={BudgetDetailForm}/>
    </Switch>
    
  );
}

export default BudgetPage;

import BudgetPage from "./pages/BudgetPage/BudgetPage";
import "./App.css";
import React, { useState } from 'react';
import {Router, Route, Routes } from 'react-router-dom';
import Navbar from "./layouts/Navbar/NavbarComponent";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Customer from "./pages/customers/Customer";
import Ourteam from "./pages/ourteam/Ourteam";
import Companies from "./pages/companies/Companies";
import People from "./pages/people/People";
import Create from "./pages/create/Create";
import ProjectsHome from "./pages/project/ProjectsHomePage";
import ProjectRequirementPage from "./pages/project/ProjectRequirementPage";
import ProjectTaskPage from "./pages/project/ProjectTaskPage";

import Form from './components/Login/registration';
import Req from './components/Requirments/page';
import Reg from './components/Login/Sign';
import Add from './components/Requirments/Addrequirment';
import Asign from './components/Asign';
import { ToastContainer } from 'react-toastify';
import ProjectModulePage from "./pages/project/ProjectModulePage";
import ModuleForm from "./components/ModuleForm//ModuleForm"
import ModuleDetailsForm from "./components/ModuleForm/ModuleDetailsForm"

function App() {
  return (
    <div className="App" id="outer-container">
       <div>
        <ToastContainer position='bottom-center' />
   
    </div>

      <div id="NavBar">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/customer" component={Customer} />
            <Route path="/ourteam" component={Ourteam} />
            <Route path="/create" component={Create} />
            <Route path="/companies" component={Companies} />
            <Route path="/people" component={People} />
            <Route path="/Register" exact element={<Form/> } />
            <Route path="/Login" element={<Sign />} />
            <Route path="/Requirment" element={<Req />} />
            <Route path="/Add Request" element={<Add />} />
            <Route path="/Asign Task" element={<Asign />} />
          

            {/* Project moduel routes */}
            <Route path="/projects-home" component={ProjectsHome} />
            <Route path="/project-requirement" component={ProjectRequirementPage} />
            <Route path="/project-task" component={ProjectTaskPage} />


            <Route path="/project-module" component={ProjectModulePage} />
            <Route path="/moduleform" component={ModuleForm} />
            <Route path="/moduledetailsform" component={ModuleDetailsForm}/>
            <Route path="/project/:name/:projectId/budget" component={BudgetPage}/>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;

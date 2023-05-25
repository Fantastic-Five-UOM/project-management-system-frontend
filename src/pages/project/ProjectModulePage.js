import React,{useState,useEffect} from "react";
import "./ProjectModulePage.css";
import { Link } from "react-router-dom";
import ModuleProgressBar from "../../components/Module/ModuleProgressBar";
import ModuleRedioButton from "../../components/Module/ModuleRedioButton";
import {getModules} from "../../services/moduleService"

export default function ProjectModulePage() {

  const [moduleList, setmoduleList] = useState([]);

  useEffect(() => {
    getModules().then((res) => setmoduleList(res.data.result));
    console.log(moduleList);
  }, []);

  return (
    <div> 
      <div className="M1">
        <h1>Module</h1>
      </div>

      <div className="container shadow p-3 mb-5 bg-white rounded">
        <div className="b1">
          <Link to="moduleform">
            <button type="button" className="btn btn-warning">
              Creat Module
            </button>
          </Link>
        </div>
        <div class="w-50 p-3" >
        <div className="p-5">
          <form class="form-inline d-flex ">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <span>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
            </span>
            
          </form>
          </div>

        </div>
        <div className="row">
          <div className="col">
            <div>
              <h5>
                <b>Customer Module </b> - P1M1
              </h5>
            </div>
          </div>
          <div className="col">
            <div>
              <ModuleProgressBar />
            </div>
          </div>
          <div className="col">
            <div>
              stutus: <ModuleRedioButton />
            </div>
          </div>
          <div className="col">End date</div>
          <div className="col">Start Date</div>
          <div className="col">
            <Link to="/moduledetailsform">
              <button type="button" class="btn btn-link">
                Edit
              </button>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <hr />
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Task 01:</li>
              <li className="list-group-item">Task 02:</li>
            </ul>
          </div>
        </div>

        <div className="row" style={{paddingTop:"20px"}}>
          <div className="col">
            <div>
              <h5>
                <b>Manger Module </b> - P1M1
              </h5>
            </div>
          </div>
          <div className="col">
            <div>
              <ModuleProgressBar />
            </div>
          </div>
          <div className="col">
            <div>
              stutus: <ModuleRedioButton />
            </div>
          </div>
          <div className="col">End date</div>
          <div className="col">Start Date</div>
          <div className="col">
            <Link to="/moduledetailsform">
              <button type="button" class="btn btn-link">
                Edit
              </button>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <hr />
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Task 03:</li>
              <li className="list-group-item">Task 04:</li>
            </ul>
          </div>
        </div>



        <div className="row" style={{paddingTop:"20px"}}>
          <div className="col">
            <div>
              <h5>
                <b>Payment Module </b> - P1M1
              </h5>
            </div>
          </div>
          <div className="col">
            <div>
              <ModuleProgressBar />
            </div>
          </div>
          <div className="col">
            <div>
              stutus: <ModuleRedioButton />
            </div>
          </div>
          <div className="col">End date</div>
          <div className="col">Start Date</div>
          <div className="col">
            <Link to="/moduledetailsform">
              <button type="button" class="btn btn-link">
                Edit
              </button>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <hr />
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Task 05:</li>
              <li className="list-group-item">Task 06:</li>
            </ul>
          </div>
        </div>




      </div>
    </div>
  );
}

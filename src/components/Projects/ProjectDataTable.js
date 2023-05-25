import React, { useState, useEffect } from "react";
import { getProjects } from "../../services/projectService";

export default function ProjectDataTable() {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    // Update the document title using the browser API
    getProjects().then((res) => setProjectData(res.data.result));
    console.log(projectData);
  }, []);

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Estimatetime</th>
          <th scope="col">Actualtime</th>
          <th scope="col">Remainingtime</th>
          <th scope="col">Stratdate</th>
          <th scope="col">Enddate</th>
        </tr>
      </thead>
      <tbody>
        {projectData.map((data, index) => (
          <tr key={index}>
            <th scope="row">{data.id}</th>
            <td>{data.name}</td>
            <td>{data.estimatetime}</td>
            <td>{data.actualtime}</td>
            <td>{data.remainingtime}</td>
            <td>{data.startdate}</td>
            <td>{data.enddate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

import React from "react";
import "./companies.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import AddSearch from "./AddSearch";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AddCompany from "./AddCompany";
import CompanyTable from "./CompanyTable";

export default function Customer() {
  const [statusAll, setStatusAll] = React.useState("");

  const handleChange = (event) => {
    setStatusAll(event.target.value);
  };

  return (
    <div className="people">
      <div className="peopleglass">
        <div className="peopleContainer">
          <br />
          <Form>
            <Row
              className="align-items-center justify-content-between"
              Col
              xs={10}
            >
              <Col md={2}>
                <AddSearch /> {/*searchbar */}
              </Col>

              <Col md={2}>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-helper-label">
                    Status-All
                  </InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={statusAll}
                    label="status"
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Col>

              <Col md={3}>
                <div className="addmember">
                  <AddCompany />
                </div>
              </Col>
            </Row>
          </Form>

          <br />
          <CompanyTable />
          
        </div>
      </div>
    </div>
  );
}

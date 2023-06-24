import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import * as yup from "yup";
import * as formik from "formik";
import { getClient,saveClientData,updateClientData,getCompanyDataForDropdown,} from "../../services/G3APIService";

function AddPeople(props) {
  const [updatedData, setupdatedData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [companyData, setCompanyData] = useState(null);
  const { Formik } = formik;

  useEffect(() => {
    getCompanyDataForDropdown().then((response) => {
      setCompanyData(response.data);
    });


    props.personId &&
      getClient(props.personId).then((response) => {
        setupdatedData({
          ClientName: response.data.clientName,
          CompanyId: response.data.companyId,
          ClientType: response.data.clientType,
          ContactNumber: response.data.contactNumber,
          Email: response.data.email,
          Country: response.data.country
        });
      });
  }, [props.personId]);

  const savePeople = (data) => {
    if (!props.isEdit) {
      setIsPending(true);
      saveClientData(data).then((response) => {
        setIsPending(false);
        props.callbackModal(true);
      });
    } else {
      setIsPending(true);
      updateClientData(props.personId, data).then((response) => {
        setIsPending(false);
        props.callbackModal(true);
      });
    }
  };

  const schema = yup.object().shape({
    ClientName: yup.string().required(),
    CompanyId: yup.string().required(),
    ClientType: yup.number().required("Company type is required"),
    ContactNumber: yup.string().matches(/^[0-9]{10}$/, "Invalid phone number").required(),
    Email: yup.string().email().required(),
    Country: yup.string().required(),
  });

  var initialValues = {
    ClientName: "",
    CompanyId: "",
    ClientType:"" ,
    ContactNumber: "",
    Email: "",
    Country: "",
  };
  //new add
  const checkValid=(touched,error) =>{
    if(touched && !error){
      return"is-valid";
    }
  }

  return (
    <div>
      <Formik
        validationSchema={schema}
        onSubmit={savePeople}
        initialValues={updatedData ? updatedData : initialValues}
        enableReinitialize
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          errors,
          //resetForm,
          setFieldValue,
        }) => {
          return (
            <Form noValidate onSubmit={handleSubmit}>
              <Row>
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="formGroupName"
                  className="mb-4"
                >
                  <Form.Label className="required-field">
                    Client Name<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="ClientName"
                    value={values.ClientName}
                    isValid={touched.ClientName && !errors.ClientName}
                    isInvalid={errors.ClientName && touched.ClientName}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.ClientName}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row>

              <Form.Group
                  as={Col}
                  md="6"
                  controlId="formGroupEmployeeId"
                  className="mb-4"
                >
                  <Form.Label className="required-field">Company Name<span className="text-danger">*</span></Form.Label>
                  <Form.Select
                    name="CompanyId"
                    value={values.CompanyId}
                    className={checkValid(touched.CompanyId,errors.CompanyId)}
                    isInvalid={touched.CompanyId && errors.CompanyId}
                    onBlur={handleBlur}
                    onChange={(e) => {
                      handleChange(e);
                    }}             
                  >
                    <option>-Select Company-</option>
                    {companyData && companyData.map((company) => (
                        <option value={company.value} key={company.value}>{company.name}</option>
                      ))}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    client is required
                  </Form.Control.Feedback>
                  
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="formGroupType">
                  <Form.Label className="required-field">
                    Client Type<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Select
                    Name="ClientType"
                    value={values.ClientType}
                    className={checkValid(touched.ClientType,errors.ClientType)}
                    isInvalid={touched.ClientType && errors.ClientType}
                    onBlur={handleBlur}
                    onChange={(e) => {
                      handleChange(e);
                    }}

                  >
                    <option>-Select ClientType-</option>
                    <option value={1}>CEO</option>
                    <option value={2}>Company Owner</option>
                    <option value={3}>Manager</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {/* {errors.ClientType} */}
                    client type is required
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row>
                <Form.Group
                  as={Col}
                  md="6"
                  controlId="contactNumber"
                  className="mb-4"
                >
                  <Form.Label className="required-field">
                    Contact Number<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="ContactNumber"
                    value={values.ContactNumber}
                    isValid={touched.ContactNumber && !errors.ContactNumber}
                    isInvalid={errors.ContactNumber && touched.ContactNumber}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.ContactNumber}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="formBasicEmail">
                  <Form.Label className="required-field">
                    Email Address<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="Email"
                    value={values.Email}
                    isValid={touched.Email && !errors.Email}
                    isInvalid={errors.Email && touched.Email}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.Email}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row>
              <Form.Group as={Col} md="6" controlId="formBasicEmail">
                  <Form.Label className="required-field">
                  Country<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="Country"
                    value={values.Country}
                    isValid={touched.Country && !errors.Country}
                    isInvalid={errors.Country && touched.Country}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.Country}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <br />
              <Form.Group className="mb-2">
                <Button
                  type="submit"
                  className="btn btn-primary float-end"
                  disabled={isPending}
                >
                  {isPending ? "Saving..." : "Submit"}
                </Button>
                <Button
                  as="input"
                  type="reset"
                  value="Cancel"
                  className="btn btn-light me-2 mb-4 float-end"
                />
              </Form.Group>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default AddPeople;


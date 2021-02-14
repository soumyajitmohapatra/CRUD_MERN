import React, { useEffect, useState } from "react";
import axios from "../axios";
import { Form, Button, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Fedit = (props) => {
 
  const [{name, age, gender}, setValue] = useState([])

  // const id = this.params.id

     useEffect(()=> {
    async function fetchData(){
     const req = axios.get(`http://localhost:3001/edit/ `)
       setValue(req.data)
       console.log(setValue)
    }
     // .then((response) => {
      //  setValue(response.data
      // //  firstName: response.data.firstName,
      // //  lastName: response.data.lastName,
      // //  email: response.data.email,
      // //  phone: response.data.phone
      //  );
      //  })
      //  .catch((error) => {
      //  console.log(error);
      //  })
        fetchData()
     },)

  const history = useHistory();
  const handleCLick = () => history.push("/users");

  return (
    <div className="main">
      <Container>
        <Form>
            
          <Form.Group>
            <Form.Control
              required
              // value={name}
              autoComplete="off"
              type="text"
              placeholder="Enter Your Name"
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
            <Form.Control
              required
              autoComplete="off"
              type="number"
              placeholder="Enter Your Age"
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
            <Form.Control
              required
              autoComplete="off"
              type="text"
              placeholder="Gender"
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
          </Form.Group>

          <Button
            className="btn-info"
            // onClick={submit}
            variant="primary"
            type="submit"
          >
            Update
          </Button>
        </Form>
      </Container>
      <Button
        className="btn-danger"
        style={{
          boxShadow:
            "0 2px 4px rgba(0, 0, 0, 0.349), 0 8px 16px rgba(0, 0, 0, 0.507)",
        }}
        onClick={handleCLick}
      >
        Show Users
        <i
          style={{
            marginLeft: "1rem",
          }}
          className="fa fa-users"
          aria-hidden="true"
        ></i>
      </Button>
    </div>
  );
}

export default Fedit;


















  // To Update The Employee Details
  // employeeRoute.route('/updateEmployee/:id').post(function (req, res) {
  // employeeModel.findById(req.params.id, function (err, employee) {
  // if (!employee)
  // return next(new Error('Unable To Find Employee With This Id'));
  // else {
  // employee.firstName = req.body.firstName;
  // employee.lastName = req.body.lastName;
  // employee.email = req.body.email;
  // employee.phone = req.body.phone;
  
  // employee.save().then(emp => {
  // res.json('Employee Updated Successfully');
  // })
  // .catch(err => {
  // res.status(400).send("Unable To Update Employee");
  // });
  // }
  // });
  // });
  
  // To Delete The Employee
  // employeeRoute.route('/deleteEmployee/:id').get(function (req, res) {
  // employeeModel.findByIdAndRemove({ _id: req.params.id }, function (err, employee) {
  // if (err) res.json(err);
  // else res.json('Employee Deleted Successfully');
  // });
  // });
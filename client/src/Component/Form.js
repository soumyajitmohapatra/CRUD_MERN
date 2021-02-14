import React, { useState } from "react";
import axios from "../axios";
import { Form, Button, Container } from "react-bootstrap";
import {useHistory} from 'react-router-dom';


export default function Fuser() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");

  const submit = () => {
    axios.post("/add", {
      name: name,
      age: age,
      gender: gender,
    })
      .then(() => {
        alert("Successful");
      })
      .catch(() => {
        alert("not working");
      });
  };

  const history = useHistory()
  const handleCLick = ()=> history.push('/users')


  return (
    <div className="main">
      <Container>
        <Form>
          <Form.Group>
            <Form.Control
              required
              autoComplete="off"
              type="text"
              placeholder="Enter Your Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Form.Control
              required
              autoComplete="off"
              type="number"
              placeholder="Enter Your Age"
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
            <Form.Control
              required
              autoComplete="off"
              type="text"
              placeholder="Gender"
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
          </Form.Group>

          <Button className="btn-info"  onClick={submit} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
      <Button className="btn-danger"
      style={{
      boxShadow: "0 2px 3px rgba(0, 0, 0, 0.349), 0 5px 10px rgba(0, 0, 0, 0.507)"

      }}
      onClick={handleCLick}>
        Show Users 
      <i  style={{
        marginLeft:"1rem"
      }} 
      
      className="fa fa-users" aria-hidden="true"></i>

      </Button>

    </div>
  );
}

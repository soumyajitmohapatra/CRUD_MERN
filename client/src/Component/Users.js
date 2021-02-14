import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import axios from "../axios";

const Users = () => {
  const [userData, setuserData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/read");

      setuserData(req.data);
    }
    fetchData();
  }, []);

  const history = useHistory();
  const handleClick = () => history.push("/");

  return (
    <div>
      <div
        style={{
          width: "60%",
          display: "flex",
          alignItems: "baseline",
          margin: "1rem auto 0 auto",
        }}
      >
        <div
          style={{
            cursor: "pointer",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <i
            onClick={handleClick}
            className="fa fa-arrow-circle-o-left fa-2x"
            aria-hidden="true"
          ></i>
        </div>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th colSpan="2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {userData.map((user) => (
              <tr key={user._id}>
                <td className="count"></td>
                <td> {user.name} </td>
                <td> {user.age} </td>
                <td> {user.gender} </td>
                <td>
                  <Link to={"/edit/" + user._id }>
                    <i className="fa fa-pencil-square" aria-hidden></i>
                  </Link>
                </td>
                <td>
                  <Link >
                    <i className="fa fa-trash" aria-hidden="true"></i>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Users;





// class EditEmployee extends Component {
//   constructor(props) {
//   super(props);
//   this.state = {
//   firstName: '',
//   lastName: '',
//   email: '',
//   phone: ''
//   }
//   }
  
//   componentDidMount = () => {
//   this.getEmployeeById();
//   }
  
//   // To get employee based on ID
//   getEmployeeById() {
//   axios.get('http://localhost:4000/employees/editEmployee/' + this.props.match.params.id)
//   .then((response) => {
//   this.setState({
//   firstName: response.data.firstName,
//   lastName: response.data.lastName,
//   email: response.data.email,
//   phone: response.data.phone
//   });
//   })
//   .catch((error) => {
//   console.log(error);
//   })
//   }
  
//   handleChange = (event) => {
//   this.setState({ [event.target.name]: event.target.value });
//   }
  
//   // To update the record on submit
//   handleSubmit = (event) => {
//   event.preventDefault();
//   const { firstName, lastName, email, phone } = this.state;
//   axios.post('http://localhost:4000/employees/updateEmployee/' + this.props.match.params.id, {
//   firstName: firstName,
//   lastName: lastName,
//   email: email,
//   phone: phone,
//   })
//   .then((response) => {
//   console.log(response);
//   this.props.history.push('/');
//   })
//   .catch((error) => {
//   console.log(error);
//   });
  
//   }
  
//   render() {
//   return (
//   <div className="container">
//   <form style={customStyle} onSubmit={this.handleSubmit}>
//   <label>
//   First Name
//   <input
//   name="firstName"
//   type="text"
//   value={this.state.firstName}
//   onChange={this.handleChange}
//   className="form-control"
//   />
//   </label>
//   <br />
//   <label>
//   Last Name
//   <input
//   name="lastName"
//   type="text"
//   value={this.state.lastName}
//   onChange={this.handleChange}
//   className="form-control"
//   />
//   </label>
//   <br />
//   <label>
//   Email
//   <input
//   name="email"
//   type="text"
//   value={this.state.email}
//   onChange={this.handleChange}
//   className="form-control"
//   />
//   </label>
//   <br />
//   <label>
//   Phone No
//   <input
//   name="phone"
//   type="text"
//   value={this.state.phone}
//   onChange={this.handleChange}
//   className="form-control"
//   />
//   </label>
//   <br />
//   <input
//   type="submit"
//   value="submit"
//   className="btn btn-primary"
//   />
//   </form>
//   </div>
//   );
//   }
//   }
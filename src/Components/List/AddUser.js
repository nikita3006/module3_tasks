import React, { useState, Fragment, useRef } from "react";
import Button from "../UI/Button";
import "./AddUser.css";
import Card from "../UI/Card";
// import { Fragment } from "react";

const AddUser = () => {
  const [User, setUser] = useState([]);
  const [Username, setUsername] = useState("");
  const [Age, setAge] = useState("");
  const [Error, setError] = useState("");
  const [isValid, setIsValid] = useState(true);
  const clgNameInputRef = useRef();
  

  const submitHandler = (event) => {
    event.preventDefault();
    // console.log(clgNameInputRef.current.value);
    const value  = clgNameInputRef.current.value;
    const newUser = { Username, Age , value };
    

    if (Username.trim().length === 0 && Age.trim().length === 0) {
      setError("Please fill the form.");
      setIsValid(false);
      return;
    } else if (Username.trim().length === 0) {
      setError("Please enter an Username.");
      setIsValid(false);
      return;
    } else if (Age && Age < 1) {
      setError("Invalid Age.");
      setIsValid(false);
      return;
    } else if (Age.trim().length === 0) {
      setError("Please enter Age.");
      setIsValid(false);
      return;
    } else {
      setUser([...User, newUser]);
    }
    setUsername("");
    setAge("");
    clgNameInputRef.current.value ="";
  };

  const errorOkay = (e) => {
    e.preventDefault();
    setIsValid(true);
    setAge("");
    setUsername("");    
  };

  const usernameChange = (event) => {
    event.preventDefault();
    setUsername(event.target.value);
    setIsValid(true);
  };
  const ageChange = (event) => {
    setAge(event.target.value);
    setIsValid(true);
  }; 

  return (
    <Fragment> 
      <form onSubmit={submitHandler} className="formControl">
        <p>New User form</p>
        <hr />
        <label htmlFor="Username">Username :</label>
        <input type="text" value={Username} onChange={usernameChange} />
        <br />
       
        <label htmlFor="age">Age :</label>
        <input type="number" value={Age} onChange={ageChange} /> <br />
        <label htmlFor="Collegename">Collegename :</label>
        <input type="text"  ref={clgNameInputRef}  />
        <br />

        <Button type="submit">Add User</Button>
      </form>

      <div className={`error ${!isValid ? "invalid" : "valid"}`}>
        {!isValid && (
          <Card>
            <h2 style={{ textAlign: "left", margin: "5px 10px 5px 10px" }}>
              Error !
            </h2>
            <hr style={{ width: "100%" }} />
            <h1>{Error}</h1>
            <button className="btn" onClick={errorOkay}>
              Okay
            </button>
          </Card>
        )}
      </div>

      <div style={{ backgroundColor: "#1f1f1f" }}>
        {" "}
        <hr />
        <h2
          style={{
            Weight: 760,
            textAlign: "center",
            color: "white",
            fontSize: "25px",
          }}
        >
          User List{" "}
        </h2>
        <ul className="listBox">
          {User.map((user, index) => (
            <li className="list" key={index}>
              {user.Username}({user.Age} years old, in {user.value} clg)
            </li>
          ))}
        </ul>
        <hr />
      </div>
     </Fragment>
  );
};

export default AddUser;

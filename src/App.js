import React, {useState} from "react";
import "./App.css";


export default function App() {

  const [values, setValues] = useState({
    firstName: "", 
    lastName: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstNameChange = (event) => {
    setValues({...values, firstName: event.target.value})
  };

  const handleLasttNameChange = (event) => {
    setValues({...values, lastName: event.target.value})
  };

  const handleEmailNameChange = (event) => {
    setValues({...values, email: event.target.value})
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true)
    }
    setSubmitted(true);
  };

  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit} >
        {submitted && valid? <div class="success-message">Success! Thank you for registering</div> : null}
        <input
          value={values.firstName}
          onChange={handleFirstNameChange}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {submitted && !values.firstName ? <span id="first-name-error">Please enter a first name</span> : null}
        <input
          value={values.lastName}
          onChange={handleLasttNameChange}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {submitted && !values.lastName ? <span id="last-name-error">Please enter a last name</span> : null}
        <input
          value={values.email}
          onChange={handleEmailNameChange}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {submitted && !values.email ? <span id="email-error">Please enter an email address</span> : null}
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

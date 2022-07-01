import React, { useState } from 'react'
import './Form.css'

export default function Form() {
  
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    birthday: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://example.com/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    console.log(values)
  }

  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
    console.log(values)
  }

  const inputs = [{
    key: 1,
    placeholder: 'First Name',
    name: 'firstName',
    type: 'text',
    //brackets for boolean too
    errorMessage: 'Hi this is an error message',
    required: true
  },
  {
    key: 2,
    placeholder: 'Last Name',
    name: 'lasttName',
    type: 'text',
    //brackets for boolean too
    required: true
  },
  {
    key: 3,
    placeholder: 'Email',
    name: 'email',
    type: 'email',
    //brackets for boolean too
    required: true
  },
  {
    key: 4,
    placeholder: 'Birthday',
    name: 'birthday',
    type: 'date',
    //brackets for boolean too
  },
  {
    key: 5,
    placeholder: 'Password',
    name: 'password',
    type: 'password',
    //brackets for boolean too
    required: true
  },]

  return (
    <div className='formContainer'>
      <form onSubmit={handleSubmit}>
        
        {inputs.map((input) => (
          <div className='inputs'>
            <label for={input.name}>{input.placeholder}:</label>
            <input 
              key={input.id}
              onChange={handleChange}
              placeholder={input.placeholder}
              name={input.name}
              type={input.type}
              required={input.required}
            />
          </div>
        ))}
        <button>Submit</button>
      </form>
    </div>
  )
}

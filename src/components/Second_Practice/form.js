import React, { useState } from 'react'
import './form.css'

export default function Form() {
  //uses React hook to set intial state to a blank form 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [message, setMessage] = useState("");
  
  //sends data to backend
  let handleSubmit = async (e) => {
    //prevents refreash of page
    e.preventDefalut()
    
    try {
      let res = fetch("https://httpbin.org/post", {
        method: "POST",
        //stringifys data to send to backend
        body: JSON.stringify({
          //sends data in an object 
          name: name,
          email: email,
          mobileNumber: mobileNumber,
        }),
      });
      let resJson = await res.json();
      //if a success status was sent, update form to inital blank state and send success message
      if (res.status === 200) {
        setName("");
        setEmail("");
        setMobileNumber("");
        setMessage("User created successfully");
      } else {
      // if error, form does not change state, and error message sent 
        setMessage("Some error occured");
      }
    } catch (err) {
    //logs error if occured
      console.log(err);
    }
  }

  return (
    //form that renders on page
    <div className="form">
      {/* on submit the handleSubmit method is called */}
      <form onSubmit={handleSubmit}> 
      {/* this form handles the onChange functions in the input instead of as a seperate method that is called */}
        <input 
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
         <input 
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="text"
          value={mobileNumber}
          placeholder="Mobile Number"
          onChange={(e) => setMobileNumber(e.target.value)}
        />
        <button type='submit'>Create</button>
        {/* turinary operator used for message, if true show div, if false (does not show) */}
        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  )
}

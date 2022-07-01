import React, {useState} from 'react'
import './FormInput.css'

const  FormInput = (props) => {
  
  const [focused, setFocused] = useState(false);
  const {label, errorMessage, onChange, id, ...inputProps} = props
  
  const handleFocus = (e) => {
    setFocused(true);
  }

  //creates an individual form div, will be itterated to make complete form 
  return (
    <div className='formInput'>
      <label>{label}</label>
      <input 
        {...inputProps}
        onChange={onChange}
        //onBlur occurs when an object loses Focus (i.e. the user clicks out of the box)
        onBlur={handleFocus}
        //if confirm password and user is in box, then 
        /*onFocus={() => 
          inputProps.name === "confirmedPassword" && setFocused(true)
        }*/
        focused={focused.toString()}
      />
      {/* span is inline */}
      <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput;

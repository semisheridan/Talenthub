import React, {useState} from 'react'
import LoginForm from './LoginForm';
import SignupForm  from './SignupForm';
import SignupFormSucces from './SignupFormSucces';
const Form=()=> {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);
  const submitForm =()=>{
    setFormIsSubmitted(true);
  };
  return (
    <div> 
{ !formIsSubmitted ? <SignupForm submitForm={submitForm}/> : <LoginForm/>}

    </div>
  )
}

export default Form
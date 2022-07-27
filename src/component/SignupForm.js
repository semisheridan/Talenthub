 
import React , { useEffect, useState } from "react";
import Validation from "./Validation";
 import './Signup.css';

const SignupForm =({submitForm})=> {
    const [values, setValues] = useState({
        fullname:"",
        email:"",
        password:"",
        confirm:"",
    
    });
    const [dataIsCorrect ,setDataIsCorrect] = useState(false);
    const [errors , setErrors] = useState({});
    const HandleFormSubmit = (event)=>{
        event.preventDefault();
        setErrors(Validation(values));
        setDataIsCorrect(true);
    };
   
    const handleChange =(event)=>{
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };
    useEffect(()=>{
    if(Object.keys(errors).length === 0 && dataIsCorrect){
        submitForm(true);
    }
    }, [errors]);
  return (
    <div className='container'> 
    <div className='app-wrapper'>
        <div>
            <h2 className='title'>Sign Up</h2>
            
        </div>
        <div className='wrapper'>
        <form className='form-wrapper'>
            <div className='name'>
                <label className='label'>UserName</label>
                <input className='input' type="text" name='fullname'  onChange={handleChange}    value={values.fullname} />
                {errors.fullname && <p className="error">{errors.fullname}</p>}
            </div>
            <div className='email'>
                <label className='label'>Email</label>
                <input className='input' type="email"  name='email' onChange={handleChange} value={values.email}/>
                {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className='password'>
                <label className='label'>Password</label>
                <input className='input' type="password"  name='password'  onChange={handleChange} value={values.password}/>  
                {errors.password && <p className="error">{errors.password}</p>}                                                                                                                                                                                 
            </div>
            <div className='confirm-password'>
                <label className='label'>Confirm Password</label>
                <input className='input' type="password"  name='confirm'  onChange={handleChange}   value={values.confirm} />  
                {errors.confirm && <p className="error">{errors.confirm}</p>}                                                                                                                                                                               
            </div>
            <div>
                <button className='submit' onClick={HandleFormSubmit}>Sign Up</button>
                <h3 className="submit1">Already Have Account?<a href="">Sign In</a> </h3>
            </div>
        </form>
    </div>
    </div>
    </div>
  )
}

export default SignupForm
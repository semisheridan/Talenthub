import React , { useEffect, useState } from "react";
import Validation from "./Validation";
import './login.css';
function LoginForm({submitForm}) {
    const [values, setValues] = useState({
        fullname:"",
        email:"",
        password:"",
         
    
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
                <h2 className='title'>Sign In</h2>
                
            </div>
            <div className='wrapper'>
            <form className='form-wrapper'>
               
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
             
                <div>
                    <button className='submit' onClick={HandleFormSubmit}>Sign Up</button>
                </div>
            </form>
        </div>
        </div>
        </div>
      )
}

export default LoginForm
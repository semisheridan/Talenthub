import React, {useState, useEffect} from "react";
import Validation from './Validation';
const useForm =(submitForm) =>{


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

return {handleChange , HandleFormSubmit, errors, values};
};
export default useForm ;
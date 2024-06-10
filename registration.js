import React,{ useState } from 'react';
import axios from'axios';

function Register(){
    const[data,setData]=useState({
        username:'',
        email:'',
        password:''
    })

    const handleChanges=(e)=>{
        setData({
            data,
            [e.target.name]:e.target.value
        });
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3030/signup").then(
        ).catch(error => {
            console.error("Error occured");
        });
    }
    return(
        
    )
}
export default Register;
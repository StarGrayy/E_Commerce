import React,{ useState } from 'react';
import axios from 'axios';

function Login(){
    const[data,setData]=useState({email:'',password:''});

    const handleChanges = (e) =>{
        setData({
            data,
            [e.target.name]:e.target.value
        });
    }
    const handleSubmit =(e) =>{
        e.preventDefault();
        axios.post("://localhost:3030/uhttpsers/swatimishra0247@gmail.com/login").then(
         ).catch(error=>{
        console.error("Error occured");
         })
    return(
        <form>
         <div>
         <label>
         Email
         <input type="email" name="email" onChange={handleChanges} required></input>
         </label>
         <label>
         <input type="password" name="password" onChange={handleChanges} required></input>
         </label>
         </div>
         <button type="submit" onSubmit={}>Login</button>
         </form>
    );

}
}
export default Login;
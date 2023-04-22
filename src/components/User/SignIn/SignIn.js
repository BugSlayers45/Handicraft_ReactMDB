import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import '../SignUp/signup.css'

export default function SignIn() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()
    const handleSubmit=async (event)=>{
        try{
       event.preventDefault()
       const response=await axios.post("http://localhost:3000/customer/signIn",{email,password})
       

        }catch(err){

        }
    }
  return (
    <>
      <div className="container col-12 sign">
        <div className="jumbotron col-lg-6  ">
          <h2 className="display-3">LoginForm</h2>
          <div className="form-group">
            <label htmlFor="inputemail" className="col-sm-2 control-label">
              Email:
            </label>
            <div className="col-sm-10">
              <input type="text" name="email" className="form-control" />
            </div>
            <label htmlFor="inputpassword" className="col-sm-2 control-label">
              Password
            </label>
            <div className="col-sm-10">
              <input type="text" name="email" className="form-control" />
            </div>

            {/* <button type="submit" onSubmit={handleSubmit} className="btn btn-danger mt-3">
              Login
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
}

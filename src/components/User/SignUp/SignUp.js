import React, { useState } from 'react'
import '../SignUp/signup.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
export default function SignUp() {
    const [customerName,setName]=useState("")
    const [customerEmail,setEmail]=useState("")
    const [customerPassword,setPassword]=useState("")
    const[customerContact,setCOntact]=useState("")
    const navigate=useNavigate()
    const handleSubmit =async(event)=>{
        try{
          event.preventDefault()
          var response=await axios.post("http://localhost:3001/customer/signup",{customerName,customerEmail,customerPassword,customerContact})
          if(response.data.status)
          toast.success("your are sucessfully sigin up")
          navigate("/signin")
        }
        catch(err){
            if(response.status.err==400)
            toast.error("Bad Request!")
            else if(response.status.err==500)
            toast.error("Server Error !")
        }
    }

  return <>
        <div className="container col-12 signup">
        <div className="jumbotron col-lg-6  ">
          <h2 className="display-3">Register</h2>
          <form onSubmit={handleSubmit}> 
          <div className="form-group">
          <label htmlFor="inputemail" className="col-sm-2 control-label">
              Name
            </label>
            <div className="col-sm-10">
              <input type="text" onChange={(event)=>setName(event.target.value)}  className="form-control" />
            </div>
            <label htmlFor="inputemail" className="col-sm-2 control-label">
              Contact
            </label>
            <div className="col-sm-10">
              <input type="text"  onChange={(event)=>setCOntact(event.target.value)} className="form-control" />
            </div>
            <label htmlFor="inputemail" className="col-sm-2 control-label">
              Email:
            </label>
            <div className="col-sm-10">
              <input type="text"  onChange={(event)=>setEmail(event.target.value)} className="form-control" />
            </div>
            <label htmlFor="inputpassword" className="col-sm-2 control-label">
              Password
            </label>
            <div className="col-sm-10">
              <input type="password"onChange={(event)=>setPassword(event.target.value)} className="form-control" />
            </div>

            <button type="submit" className="form-control btn btn-danger mt-3">
              Login
            </button>
           
          </div>
          </form>
        </div>
      </div>
  </>
}

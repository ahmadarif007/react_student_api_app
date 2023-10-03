import React, { useState } from 'react'
import axios from "axios";
import MySidebar from './MySidebar';

export default function StudentAddForm() {
    const [roll, setRoll] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [s_class, setClass] = useState("");
    const [section, setSection] = useState("");
    const [address, setAddress] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [message, setMessage] = useState("");

    const data = {
      roll: roll,
      name: name,
      email: email,
      class: s_class,
      section: section,
      address: address,
      mobile_no: mobileNumber,
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        axios
          .post("http://127.0.0.1:8000/api/student/create/", data)
          .then(res => {
            console.log(res)
            if (res.status === 201) {
              setRoll("");
              setName("");
              setEmail("");
              setClass("");
              setSection("");
              setAddress("");
              setMobileNumber("");
              setMessage("User created successfully");
            } else {
              setMessage("Some error occured");
            }
          })
      } catch (err) {
        console.log(err);
      }
    };

    return (
        <>
          <div className="p-2" style={{ backgroundColor:"green"}}>
            <h1 style={{ color:"#fff", textAlign:"center"}}>Add student information</h1>
          </div>
          <div className="row p-5">
            <MySidebar />
            <div className="col-9 p-5" style={{ border:"2px solid green", borderRadius:"5px"}}>
              <form onSubmit={handleSubmit}>
                <div className="row mb-2" >
                  <div className="col-6">
                    <input 
                      type="integer" 
                      className="form-control" 
                      placeholder="Roll" 
                      value={roll}
                      onChange={(e) => setRoll(e.target.value)}
                    />
                  </div>
                  <div className="col-6">
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Name" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="row mb-2" >
                  <div className="col-6">
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="col-6">
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Class" 
                      value={s_class}
                      onChange={(e) => setClass(e.target.value)}
                    />
                  </div>
                </div>
                  
                <div className="row mb-2" >
                  <div className="col-6">
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Address" 
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div className="col-6">
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Section" 
                      value={section}
                      onChange={(e) => setSection(e.target.value)}
                    />
                  </div>
                </div>

                <div className="row mb-2" >
                  <div className="col-6">
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Phone" 
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="col-2">
                    <button type="submit" className="form-control btn-success">Create</button>
                </div>
              </form>
              <div className="message mt-5" style={{ fontSize:"20px", color:"green" }}>{message ? <p>{message}</p> : null}</div>
            </div>
          </div>
        </>
    )
}

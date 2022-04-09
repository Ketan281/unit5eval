import React from 'react'
import {useState} from 'react'
 const Register = () => {
     const [name,setName] = useState("");
     const [email,setEmail] = useState("");
     const [password,setPassword] = useState("");
     const [username,setUsername] = useState("");
     const [mobile,setMobile] = useState("");
     const [desc, setDesc] = useState("");
     function saveUser(){
         let data = {name,email,password,username,mobile,desc}
         fetch('https://masai-api-mocker.herokuapp.com/',{
             method: 'POST',
             headers:{
                 'Accept':'application/json',
                 'content-type':'application/json'
             },
             body:JSON.stringify(data)
            }).then((res)=>{
                res.json().then((resp)=>{
                console.warn("resp",resp)
                })
            })
         }
     
  
  return (
      <>
    <div>Register</div>
    <label>Name:</label><br/><input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} name="name"/><br/><br/>
    <label>Email:</label><br/><input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email"/><br/><br/>
    <label>Password:</label><br/><input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}} name="password"/><br/><br/>
    <label>Username:</label><br/><input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} name="username"/><br/><br/>
    <label>Mobile:</label><br/><input type="text" value={mobile} onChange={(e)=>{setMobile(e.target.value)}} name="mobile"/><br/><br/>
    <label>Description:</label><br/><input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} name="desc"/><br/><br/>
    <button type='button' onClick={saveUser}>Register</button>
    </>
    
  );
  }
export {Register}
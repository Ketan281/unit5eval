import React, { useState } from "react";


const  Login = ()=> {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  function validateForm() {

    return email.length > 0 && password.length > 0;

  }

  function handleSubmit(event) {

    event.preventDefault();

  }

  return (

    <div>

      <form onSubmit={handleSubmit}>

       

          <label>Email</label>

          <input
            autoFocus

            type="email"

            value={email}

            onChange={(e) => setEmail(e.target.value)}

          />

        <label>Password</label>

          <input

            type="password"

            value={password}

            onChange={(e) => setPassword(e.target.value)}

          />

       

        <button onClick={!validateForm()}>

          validate

        </button>
      <input type='submit'>Login</input>
      </form>

    </div>

  );

}
export {Login}
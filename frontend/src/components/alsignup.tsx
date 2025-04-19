import { useState } from "react";
import "./signup.css";




function ALSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");

console.log(name , email , password , location);

  const handlesgnup = async () => {

   

    const res = await fetch("http://localhost:3500/clreg", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, location }),
    });

    let result = await res.json();
    alert("signed Up sucessfully");
    console.log("login details : ", result);
  
  };

  return (
    <div className="sgnup">

      <form className="frm" action="" onSubmit={handlesgnup}>
        <h1 style={{ textAlign: "center", color: "black" }}>
          New Student Registration
        </h1>
        <input
          className="ip"
          value={name}
          type="text"
          placeholder="Enter your full name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <input
          className="ip"
          value={email}
          type="text"
          placeholder="Enter your email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <input
          className="ip"
          value={password}
          type="text"
          placeholder="create a strong password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <input
          className="ip"
          value={location}
          type="text"
          placeholder="Enter your location"
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />

       

        <button className=" sgnupbtn" type="submit"> Sign Up</button>

        <br />
        OR
        <br />

      
      </form>
    </div>
  );
}

export default ALSignup;
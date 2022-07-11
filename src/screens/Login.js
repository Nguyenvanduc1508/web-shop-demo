import React, { useEffect, useState } from "react";
import { useHistory, useNavigate } from "react-router-dom";
import "../Style/login.css";

const Login = () => {
  const [toggleState, setToggleState] = useState(1);
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
    }
  }, []);

  async function handleLogin() {
    let item = {email, password};
    let result = await fetch('http://localhost:3001/user',{
      method: 'POST',
      headers: {
        "ConContent-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(item)
    });
    result = await result.json();
    localStorage.setItem("user-info",JSON.stringify(result))
    history.push('/add')
  }

  const toggleTab = (index) => {
    setToggleState(index);
  };


  return (
    <div className="bgrlog">
      <div className="login">
        <h2
          onClick={() => toggleTab(1)}
          className={toggleState === 1 ? "sign active" : "sign"}
        >
          {" "}
          sign in{" "}
        </h2>

        <h2
          onClick={() => toggleTab(2)}
          className={toggleState === 2 ? "sign active" : "sign"}
        >
          {" "}
          sign up{" "}
        </h2>

        <form className={toggleState === 1 ? "form form_active" : "form"}>
          <input onChange={(e) => setEmail(e.target.value)} type="text" className="text" name="username" />
          <span className="titletext">username</span>

          <br />

          <br />

          <input onChange={(e) => setPassword(e.target.value)} type="password" className="text" name="password" />
          <span className="titletext">password</span>
          <br />

          <button onClick={handleLogin} className="signin">Sign In</button>

          <hr />
        </form>
        <form className={toggleState === 2 ? "form form_active" : "form"}>
          <input type="text" className="text" name="Email" />
          <span className="titletext">username</span>

          <br />

          <br />

          <input type="password" className="text" name="password" />
          <span className="titletext">password</span>
          <br />
          <br />
          <input type="password" className="text" name="password" />
          <span className="titletext">Enter the password</span>

          <button className="signin">Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

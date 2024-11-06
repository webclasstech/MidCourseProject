import { useState } from "react";
import "./Login.css";

export const Login = () => {
  const [isLoginDetailsCorrect, setIsLoginDetailsCorrect] = useState(false);
  const [name, setName] = useState("");
  const userClickedBtn = () => {
    let theLoginData = {
      email: "",
      password: "",
    };
    theLoginData.email = (
      document.querySelector("#uname") as HTMLInputElement
    ).value;
    theLoginData.password = (
      document.querySelector("#pass") as HTMLInputElement
    ).value;
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    console.log(theLoginData);
    fetch("http://localhost:3001/login", {
      method: "POST",
      body: JSON.stringify(theLoginData),
      headers: myHeaders,
    })
      .then((data) => {
        return data.json();
      })
      .then((dataAsObj) => {
        console.log(dataAsObj);
        setIsLoginDetailsCorrect(dataAsObj.isLoginDetailsCorrect);
        setName(dataAsObj.name);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <input id="uname" type="text" placeholder="username" />
      <input id="pass" type="text" placeholder="password" />
      <input type="submit" value={"send"} onClick={userClickedBtn} />
      <h3>{name}</h3>
    </div>
  );
};

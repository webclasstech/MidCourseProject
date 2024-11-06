import { useEffect, useState } from "react";
import "./Home.css";
export const Home = () => {
  const [theMessage, setTheMessage] = useState("");
  useEffect(() => {
    fetch("http://localhost:3001/hello")
      .then((data) => {
        return data.json();
      })
      .then((dataAsObj) => {
        if (dataAsObj) {
          setTheMessage(dataAsObj.msg);
        }
      });
  }, []);

  return (
    <div>
      <h2>Home</h2>
      <h2>{theMessage}</h2>
    </div>
  );
};

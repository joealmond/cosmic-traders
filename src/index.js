/*jshint esversion: 9 */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// function renderUserName(userName) {
//   return <li>{userName}</li>;
// }

// const userNames = ["Via", "Jocó", "Pancsa"];

// const h1 = (
//   <h1>
//     Hello, <ul>{userNames.map((userName) => renderUserName(userName))}</ul>
//   </h1>
// );
// root.render(h1);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

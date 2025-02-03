import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Analytics } from "@vercel/analytics/react"

ReactDOM.render(
  <Analytics>
    <App />
  </Analytics>
    
  ,
  document.getElementById("root")
);

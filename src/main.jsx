import React from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter as Router } from "react-router-dom";

import { InternetIdentityProvider } from "ic-use-internet-identity";
import App from "./App.jsx";
import './index.css';



// import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        
        <InternetIdentityProvider>

            <App />
        </InternetIdentityProvider>
            
            
        
    </React.StrictMode>
);

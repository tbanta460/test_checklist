import React from 'react'
import { BrowserRouter as Router} from "react-router-dom";
import { AuthProvider } from '../context/index.js'
import "./main.css"
// Components
import { Routess } from '../config/index';
import { Header, Footer } from '../components'

function Main() {
  return (
   <>
   <div>
      <Router>
        <AuthProvider>
          <div className="header">
            <Header />
          </div>
          <div className="main">
            <Routess />
          </div>
          <div className="footer">
            <Footer />
          </div>
        </AuthProvider>
      </Router>
    </div>
   </>
  );
}

export default Main;

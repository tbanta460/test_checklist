import React from 'react'
import { BrowserRouter as Router} from "react-router-dom";
import "./main.css"

// Components
import { Routess } from '../config/index';

function Main() {
  return (
   <>
   <div>
      <Router>
          <div className="main">
            <Routess />
          </div>
      </Router>
    </div>
   </>
  );
}

export default Main;

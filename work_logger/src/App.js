import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const Card = (props) => {

}

const App = () => {
  //render() {
    return (
      <div style = {{height: "100vh"}}>
        <div className="header">
          <h1>Welcome to React</h1>
        </div>
        <div style = {{height: "40vh"}}>
          <form>
            <div>
              <label>Project </label>
              <select>
                <option value = "personal">Personal</option>
                <option value = "work">Work</option>
              </select>
            </div>
            <br />
            <div>
              <label>Description </label>
              <input type="text" placeholder="At least 5 characters"></input>
            </div>
            <br />
            <div>
              <label>Minutes </label>
              <input type="number" placeholder="Between 0 and 240"></input>
            </div>
            <br />
            <div>
              <button>Add</button>
            </div>
          </form>
        </div>
        <div style = {{height: "60vh", borderTop: "1px solid black", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <div style = {{height: "300px", width: "300px", border: "1px solid black", display:"inline-block", margin: "10px"}}>
          <div style = {{height: "60px", display:"flex"}}>
            <div style = {{width: "50%", textAlign:"left", padding: "5px", fontSize: "24px"}}>
              Personal
            </div>
            <div style = {{width: "50%", textAlign:"right", padding: "5px", fontSize: "24px"}}>
              0:30
          </div>
          </div>
          <div style = {{height: "240px", paddingLeft: "5px"}}>
            <div style = {{width: "100%", display: "flex"}}>
              <div style={{paddingRight:"5px"}}>0:30</div><div>Learn React</div>
            </div>
          </div>
        </div>
        <div style = {{height: "300px", width: "300px", border: "1px solid black", display:"inline-block", margin: "10px"}}>
          <div style = {{height: "60px", display:"flex"}}>
            <div style = {{width: "50%", textAlign:"left", padding: "5px", fontSize: "24px"}}>
              Work
            </div>
            <div style = {{width: "50%", textAlign:"right", padding: "5px", fontSize: "24px"}}>
              4:00
          </div>
          </div>
          <div style = {{height: "240px", paddingLeft: "5px"}}>
            <div style = {{width: "100%", display: "flex"}}>
              <div style={{paddingRight:"5px"}}>2:30</div><div>Sprint planning</div>
            </div>
            <div style = {{width: "100%", display: "flex"}}>
            <div style={{paddingRight:"5px"}}>1:30</div><div>Usability testing</div>
          </div>
          <div style = {{width: "100%", display: "flex"}}>
          <div style={{paddingRight:"5px"}}>1:30</div><div>Another Line</div>
        </div>
          </div>
        </div>
     </div>
      </div>
    );
  }
//}
/*
        <div style = {{height: "60vh", borderTop: "1px solid black", display: "flex", alignItems: "center", justifyContent: "center"}}>
           <div style = {{height: "150px", width: "150px", border: "1px solid black", display:"inline-block", margin: "10px"}}>
             stuff
           </div>
           <div style = {{height: "150px", width: "150px", border: "1px solid black", display:"inline-block", margin: "10px"}}>
            stuff
          </div>
         <div style = {{height: "150px", width: "150px", border: "1px solid black", display:"inline-block", margin: "10px"}}>
         stuff
       </div>
                  <div style = {{height: "150px", width: "150px", border: "1px solid black", display:"inline-block", margin: "10px"}}>
           stuff
         </div>
        </div>
*/
export default App;

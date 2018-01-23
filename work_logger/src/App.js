import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      project: 'Personal',
      description: '',
      minutes: 0,
      personalItems: [],
      workItems: []
    };

    this.handleProjectChange = this.handleProjectChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleMinuteChange = this.handleMinuteChange.bind(this)
    this.buttonClicked = this.buttonClicked.bind(this)
  }

  handleProjectChange (event) {
    console.log("product changing")
    this.setState({project: event.target.value})
  }

  handleDescriptionChange (event) {
    console.log("description changing")
    this.setState({description: event.target.value})
  }

  handleMinuteChange (event) {
    console.log("minute changing")
    this.setState({minutes: event.target.value})
  }

  buttonClicked (event) {
    event.preventDefault();
    console.log("add new item button clicked")
  }


  render() {
    let descriptionError = null
    if (this.state.description.trim().length === 0)
      descriptionError = "The description should not be empty"
    else if (this.state.description.length < 5)
      descriptionError = "The description should be at least 5 characters."

    let minuteError = null;
    if (this.state.minutes < 0 || this.state.minutes > 240)
      minuteError = "The minutes must be between 0 and 240"

    return (
      <div style = {{height: "100vh"}}>
        <div className="header">
          <h1>Welcome to React</h1>
        </div>
        <div style = {{height: "40vh"}}>
          <form>
            <div>
              <label>Project </label>
              <select onChange={this.handleProjectChange}>
                <option>Personal</option>
                <option>Work</option>
              </select>
            </div>
            <br />
            <div>
              <label>Description </label>
              <input onChange={this.handleDescriptionChange} type="text" placeholder="At least 5 characters"></input>{descriptionError}
            </div>
            <br />
            <div>
              <label>Minutes </label>
              <input onChange={this.handleMinuteChange} type="number" placeholder="Between 0 and 240"></input>{minuteError}
            </div>
            <br />
            <div>
              <button onClick={this.buttonClicked} >Add</button>
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
}
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

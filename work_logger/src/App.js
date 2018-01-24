import React, { Component } from 'react';
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
    this.minutesInHours = this.minutesInHours.bind(this)
    this.getSumOfTime = this.getSumOfTime.bind(this)
  }

  handleProjectChange (event) {
    //console.log("product changing")
    this.setState({project: event.target.value})
  }

  handleDescriptionChange (event) {
    //console.log("description changing")
    this.setState({description: event.target.value})
  }

  handleMinuteChange (event) {
    //console.log("minute changing")
    this.setState({minutes: event.target.value})
  }

  minutesInHours (minutes) {
    let timeInHours = "";
    let hours = 0;
    let min = 0;

    hours = parseInt(minutes / 60, 10)
    min = minutes % 60
    if (min < 10)
      min = "0" + min
    timeInHours = hours + ":" + min
    return timeInHours
  }

  getSumOfTime (items) {
    let totalTimeInMinutes = 0
    for (let i = 0; i < items.length; i++) {
      totalTimeInMinutes += parseInt(items[i].mins, 10)
    }
    return this.minutesInHours(totalTimeInMinutes);
  }

  buttonClicked (event) {
    event.preventDefault();
    //console.log("add new item button clicked")
    if (this.state.project === "Personal") {
      const personalObject = {desc: this.state.description, mins: this.state.minutes}
      let temp = this.state.personalItems;
      temp.push(personalObject)
      temp.sort(function(a, b){ return b.mins - a.mins })
      this.setState({personalItems: temp})
    } else if (this.state.project === "Work") {
      const workObject = {desc: this.state.description, mins: this.state.minutes}
      let temp = this.state.workItems;
      temp.push(workObject)
      temp.sort(function(a, b){ return b.mins - a.mins })
      this.setState({workItems: temp})
    }
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

    let disableButton = true;
    if (descriptionError === null && minuteError === null && this.state.minutes !== "")
      disableButton = false;

    return (
      <div className="App">
        <div className="header">
          <h1>Work Logger</h1>
        </div>
        <div className="formStyle">
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
              <button disabled={disableButton} onClick={this.buttonClicked} >Add</button>
            </div>
          </form>
        </div>
        <div className="bottomPane">
        <div className="listBox">
          <div className="topOfListBox">
            <div className="topLeftListBox">
              Personal
            </div>
            <div className="totalTime">
              {this.getSumOfTime(this.state.personalItems)}
            </div>
          </div>
          <div className="boxContent">
            {this.state.personalItems.map((item, idx) => (
            <div key={idx} className="listItem">
              <div className="lineTime">{this.minutesInHours(item.mins)}</div><div className="lineDescription">{item.desc}</div>
            </div>

          ))}
          </div>
        </div>
        <div className="listBox">
          <div className="topOfListBox">
            <div className="topLeftListBox">
              Work
            </div>
            <div className="totalTime">
              {this.getSumOfTime(this.state.workItems)}
            </div>
          </div>
          <div className="boxContent">
            {this.state.workItems.map((item, idx) => (
              <div key={idx} className="listItem">
              <div className="lineTime">{this.minutesInHours(item.mins)}</div><div className="lineDescription">{item.desc}</div>
            </div>
          ))}
          </div>
        </div>
     </div>
      </div>
    );
  }
}

export default App;

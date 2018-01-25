import React, { Component } from 'react';
import './App.css';
import './ui-toolkit/css/nm-cx/main.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      project: 'Personal',
      description: '',
      minutes: '',
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
          <form>
            <div className="row">
              <div className="small-1 medium-1 large-1 columns alignRight">
                <label>Project</label>
              </div>
              <div className="small-1 medium-2 large-2 columns">
                <select onChange={this.handleProjectChange}>
                  <option>Personal</option>
                  <option>Work</option>
                </select>
              </div>
              <div className="small-1 medium-9 large-9 columns">
              </div>
            </div>
            <div className="row">
              <div className="small-1 medium-1 large-1 columns alignRight">
                <label>Description</label>
              </div>
              <div className="small-1 medium-3 large-3 columns" >
                <input onChange={this.handleDescriptionChange} type="text" placeholder="At least 5 characters"></input>
              </div>
              <div className="small-1 medium-8 large-8 columns">
                {descriptionError ? <label className="label small alert errorMargin">{descriptionError}</label> : null}
              </div>
            </div>
            <div className="row">
              <div className="small-1 medium-1 large-1 columns alignRight">
                <label>Minutes</label>
              </div>
              <div className="small-1 medium-2 large-2 columns">
                <input onChange={this.handleMinuteChange} type="number" placeholder="0-240"></input>
              </div>
              <div className="small-1 medium-9 large-9 columns">
                {minuteError ? <label className="label small alert errorMargin">{minuteError}</label> : null}
              </div>
            </div>

            <div className="row">
              <div className="small-1 medium-1 large-1 columns">
              </div>
              <div className="small-1 medium-11 large-11 columns">
                <button disabled={disableButton} onClick={this.buttonClicked}>Add</button>
              </div>
            </div>
          </form>

        <div className="row bottomPane">
          <br />
          <div className="small-1 medium-1 large-1 columns">&nbsp;
          </div>
          <div className="small-4 medium-4 large-4 columns"> 
            <div className="card">
              <div className="row">
                <div className="small-6 medium-6 large-6 columns">
                  <div>Personal</div>
                </div>
                <div className="small-6 medium-6 large-6 columns alignRight">
                  <div>{this.getSumOfTime(this.state.personalItems)}</div>
                </div>
              </div>

              {this.state.personalItems.map((item, idx) => (

              <div key={idx} className="row">
                <div className="small-2 medium-2 large-2 columns">
                  <div>{this.minutesInHours(item.mins)}</div>
                </div>
                <div className="small-10 medium-10 large-10 columns">
                  <div className='lineDescription'>{item.desc}</div>
                </div>
              </div>

              ))}

            </div>
          </div>

          <div className="small-2 medium-2 large-2 columns"> &nbsp;
          </div>

          <div className="small-4 medium-4 large-4 columns"> 
            <div className="card">
              <div className="row">
                <div className="small-6 medium-6 large-6 columns">
                  <div>Work</div>
                </div>
                <div className="small-6 medium-6 large-6 columns alignRight">
                  <div>{this.getSumOfTime(this.state.workItems)}</div>
                </div>
              </div>

              {this.state.workItems.map((item, idx) => (

              <div key={idx} className="row">
                <div className="small-2 medium-2 large-2 columns">
                  <div>{this.minutesInHours(item.mins)}</div>
                </div>
                <div className="small-10 medium-10 large-10 columns">
                  <div className='lineDescription'>{item.desc}</div>
                </div>
              </div>

              ))}
              
            </div>
          </div>

          <div className="small-1 medium-1 large-1 columns"> &nbsp;
          </div>
        </div>
      </div>
    );
  }
}

export default App;

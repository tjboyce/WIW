import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  state = {
    date: '',
    start: '',
    end: '',
  }

  componentDidMount = () => {
    console.log('component did mount');

    this.props.dispatch({ type: 'FETCH_SHIFTS' })
  }
  handleClick = () => {
    if (this.state.date && this.state.start && this.state.end) {
      this.props.dispatch({ type: 'ADD_SHIFT', payload: this.state })
      // this.toggle()
    }
    else if (!this.state.date) {
      window.alert('Please enter a date type');
    }
    else if (!this.state.start) {
      window.alert('Please enter the start time of the shift');
    }
    else if (!this.state.end) {
      window.alert('Please enter the end time of the shift');
    }
  }
  handleChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div className="App">

        <h1>When I Work</h1>
        <div>

          <div>
            <h2>Add New Shift Here</h2><input placeholder="Date" type="date" onChange={this.handleChangeFor('date')} value={this.state.date}></input>
            <input placeholder="Shift Start Time" type="time" onChange={this.handleChangeFor('start')} value={this.state.start}></input>
            <input placeholder="Shift End Time" type="time" onChange={this.handleChangeFor('end')} value={this.state.end}></input>
            <button onClick={this.handleClick}>Add New Shift</button>
          </div>
          <br></br>
          <table>
            <tr>
              <th>Date</th>
              <th>Shift Start Time</th>
              <th>Shift End Time</th>
            </tr>

            <tbody>
              {this.props.shiftReducer.map((shift) => (
                <tr key={shift.id}>
                  <td>  {new Date(shift.date).getMonth() + 1}/
                        {new Date(shift.date).getDate()}/
                        {new Date(shift.date).getFullYear()}
                  </td>
                  <td>{shift.start}</td>
                  <td>{shift.end}</td>
                </tr>
              )
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
const mapReduxStateToProps = reduxState => {
  return reduxState;
};


// if (NEwdate ==== EXISTINHdate &&& NEWstart > EXISTINGstart)

export default connect(mapReduxStateToProps)(App);

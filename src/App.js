import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      Acount: 0,
      Ccount: 0,
      Dcount: 0,
      time: 0.0,
      hitFactor: 0.0
    };

    this.changeTime = this.changeTime.bind(this);
  }

  calculate = (a = null, c = null, d = null, time = null) => {
    let points = 0
    let hitFactor = 0.0

    if (a === null) {
      points = points + this.state.Acount * 5
    } else {
      points = points + a * 5
    }

    if (c === null) {
      points = points + this.state.Ccount * 3
    } else {
      points = points + c * 3
    }

    if (d === null) {
      points = points + this.state.Dcount * 1
    } else {
      points = points + d * 1
    }

    if (time === null) {
      hitFactor = points / this.state.time
    } else {
      hitFactor = points / time
    }

    return hitFactor.toFixed(4)
  }

  AincrementCount = () => {
    this.setState({
      Acount: this.state.Acount + 1,
      hitFactor: this.calculate(this.state.Acount + 1, null, null, null)
    });
  };

  AdecrementCount = () => {
    this.setState({
      Acount: this.state.Acount - 1,
      hitFactor: this.calculate(this.state.Acount - 1, null, null, null)
    });
  };

  CincrementCount = () => {
    this.setState({
      Ccount: this.state.Ccount + 1,
      hitFactor: this.calculate(null, this.state.Ccount + 1, null, null)
    });
  };

  CdecrementCount = () => {
    this.setState({
      Ccount: this.state.Ccount - 1,
      hitFactor: this.calculate(null, this.state.Ccount - 1, null, null)
    });
  };

  DincrementCount = () => {
    this.setState({
      Dcount: this.state.Dcount + 1,
      hitFactor: this.calculate(null, null, this.state.Dcount + 1, null)
    });
  };

  DdecrementCount = () => {
    this.setState({
      Dcount: this.state.Dcount - 1,
      hitFactor: this.calculate(null, null, this.state.Dcount - 1, null)
    });
  };

  changeTime = (event) => {
    this.setState({
      time: event.target.value,
      hitFactor: this.calculate(null, null, null, event.target.value)
    })
  }

  render() {
    let { Acount, Ccount, Dcount, hitFactor } = this.state;
    return (
      <div className="app">
        <div>
          <div class="hit-factor">
            <h3>Hit Factor:</h3>
            <h1>{hitFactor}</h1>
          </div>
          <div class="buttons">
            <p>
              <b>A </b>
              <button onClick={this.AdecrementCount}>-</button>
              <button onClick={this.AincrementCount}>+</button>
              <b> {Acount}</b>
            </p>
            <p>
              <b>C </b>
              <button onClick={this.CdecrementCount}>-</button>
              <button onClick={this.CincrementCount}>+</button>
              <b> {Ccount}</b>
            </p>
            <p>
              <b>D </b>
              <button onClick={this.DdecrementCount}>-</button>
              <button onClick={this.DincrementCount}>+</button>
              <b> {Dcount}</b>
            </p>
            <p>
              <b>Time: </b>
              <input
                type="number"
                step="0.01"
                value={this.state.time}
                onChange={this.changeTime}
              />
            </p>
          </div>
        </div>
      </div>
    );
  }
}
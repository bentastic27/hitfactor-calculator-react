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

  calculate = () => {
    let points = 0;
    points = this.state.Acount * 5
    points = points + this.state.Ccount * 3
    points = points + this.state.Dcount * 1

    if (this.state.time > 0) {
      this.setState({
        hitFactor: points / this.state.time
      })
    }
  }

  AincrementCount = () => {
    this.setState({
      Acount: this.state.Acount + 1
    });
  };

  AdecrementCount = () => {
    this.setState({
      Acount: this.state.Acount - 1
    });
  };

  CincrementCount = () => {
    this.setState({
      Ccount: this.state.Ccount + 1
    });
  };

  CdecrementCount = () => {
    this.setState({
      Ccount: this.state.Ccount - 1
    });
  };

  DincrementCount = () => {
    this.setState({
      Dcount: this.state.Dcount + 1
    });
  };

  DdecrementCount = () => {
    this.setState({
      Dcount: this.state.Dcount - 1
    });
  };

  changeTime = (event) => {
    this.setState({
      time: event.target.value
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
            <p>
              <button onClick={this.calculate}>calculate</button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
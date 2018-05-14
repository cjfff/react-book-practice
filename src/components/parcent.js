import React, { Component } from 'react';

class Input extends Component {
  render () {
    return (
      <div>
        <input type='number' onChange={this.props.onChange}/>
      </div>
    )
  }
}

class PercentageShower extends Component {
  render () {
    return (
      <div>{this.props.showText}%</div>
    )
  }
}

export default class PercentageApp extends Component {
  constructor() {
    super();
    this.state = {
      percent: 0,
      number: 0,
    }
    this.onChange = this.onChange.bind(this)
  }



  onChange (e) {
    if (!e.target.value) this.setState({percent: 0})
    let value = (Number.parseFloat(e.target.value) * 100 ).toFixed(2);
    this.setState({
      percent: value,
    })
  }

  render () {
    return (
      <div>

      <Input onChange={this.onChange}/>
      <PercentageShower showText={this.state.percent}/>
      </div>
    )
  }
}

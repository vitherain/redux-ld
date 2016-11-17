import React, { Component } from 'react'
export default class Sum extends Component{
  constructor(props) {
    super(props);
    this.state = {sum: 3, a:1, b: 2}
      this.sum = this.sum.bind(this);
  }
    sum() {
        this.setState({sum: Number(this.state.a) + Number(this.state.b)});
        this.props.sumDesc('Click "Sum" button');
    }
  render() {
    console.log('Sum.render()');
    return (
      <div>
        <input value={this.state.a} onChange={(e)=>this.setState({a: e.target.value})}/> 
        + <input value={this.state.b} onChange={(e)=>this.setState({b: e.target.value})}/>
        = <span>{this.state.sum}</span>
        <button onClick={this.sum}>Sum</button>
        <p/>
      </div>
    )
  }
}
import * as React from 'react';
 
export interface ClunterProps {
}
export interface CounterState {
  count: number;
}
 
class Counter extends React.Component<ClunterProps, CounterState> {
  state:CounterState = { 
   count: 0  
  };

  onCountIncrease = (): void => {
    this.setState({count: this.state.count + 1});
  }

  onCountDecrease = (): void => {
    this.setState({count: this.state.count - 1});
  }

  render() { 
    return ( 
      <div>
        <h2>Simple Counter</h2>
        <p>{this.state.count}</p>
        <button onClick={this.onCountIncrease}>+</button>
        <button onClick={this.onCountDecrease}>-</button>
      </div>
     );
  }
}
 
export default Counter;
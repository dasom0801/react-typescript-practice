import * as React from 'react';
import './App.css';
import Counter from './components/Counter';
import MyClass from './components/MyClass';

class App extends React.Component{
  render() {
    return (
      <div className="App">
        <MyClass firstName={'dasom'} lastName={'kim'}/>
        <Counter />
      </div>
    );
  }
}

export default App;

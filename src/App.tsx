import * as React from 'react';
import './App.css';
import Counter from './components/Counter';
import MyClass from './components/MyClass';
import Palette from './components/Palette';

interface AppProps {

}

interface AppState {
  backgroundColor: string;
  colors: string[];
}

class App extends React.Component<AppProps, AppState>{
  state: AppState = {
    backgroundColor: '#fff',
    colors: ['#A9DBB8', '#F3DAD8', '#FCE588']
  }

  onColorChange = (color: string):void => {
    this.setState({
      backgroundColor: color
    })
  }

  render() {
    const { colors } = this.state;
    const PaletteItem: React.ReactElement[] = colors.map(color => (
      <Palette 
        key={color}
        onColorChange={() => this.onColorChange(color)}
        color={color}
      />
    ))

    return (
      <div className="App" style={{backgroundColor: this.state.backgroundColor}}>
        <MyClass firstName={'dasom'} lastName={'kim'}/>
        <h2>Change Background Color</h2> 
        {PaletteItem}
        <Counter />
      </div>
    );
  }
}

export default App;

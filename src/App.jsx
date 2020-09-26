import React from 'react'
import './App.scoped.css'
import Selector from './components/selector'
// import VimeoVideo from './components/vimeoVideo'
import Counter from './components/Couter'

function App() {

  return (
    <div className="App">

      <div className="App-workplace">
        <h1>Test</h1>
      </div>

      <div className="App-workplace">
        <Selector/>

        {/*<VimeoVideo/>*/}
      </div>

      <Counter/>

    </div>
  );
}

export default App;

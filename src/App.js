/* Note:React Lazy component is available only after the version ^16.6 and it's used in class based component.
  Lazy import should be accompanied by a Suspense Wrapper component with a fallback component to use it as a loader .
*/
import React, { Component,lazy,Suspense } from 'react';
import './App.css';
import Dummy from './components/DummyComponent';
/*syntax to import a lazy component*/
const Lazycomp = lazy(()=>import('./components/MyLazycomponent'));

class App extends Component {
  render() {
    return (
      <>
    <div className="App">
        <Suspense fallback={<h1>Loading.........</h1>}>
          <Lazycomp />
        </Suspense>
    </div>
      <Dummy/>
      </>
      )
  }
}
export default App;





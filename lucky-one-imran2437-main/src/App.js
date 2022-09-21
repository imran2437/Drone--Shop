import logo from './logo.svg';
import './App.css';
import Shop from './Components/Shop/Shop';
import Nav from './Components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Shop></Shop>

      <div className='Defination'>
        <h2>How React works?....</h2>
        <p> React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props.

          Returned React elements determine how the UI will look at the client end.</p>

        <h2> Difference between props and state in react....</h2>
        <p>
          Both Props and states are used for storing data related to a component.
          States can only be used in Class components, whereas props do not have such restriction.</p>

        <h2>How useState works?...</h2>
        <p>You create a functional component and throw some React hook at it that tracks state, can also update it, and it just works.</p>
      </div>
    </div>
  );
}

export default App;

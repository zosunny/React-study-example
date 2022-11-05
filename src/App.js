// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// import MyComponent from "./MyComponent";
// import Counter from "./Counter";
import Say from "./Say";

const App = () => {
  // return <MyComponent name="react"/>;
  // return <MyComponent>리액트 children~</MyComponent>
  // return <Counter />
  return <Say />
};

export default App;

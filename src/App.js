

import React from "react";
import {render} from "react-dom";

import { User } from './app/components/User';
import { Main } from './app/components/Main';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "Max"
        };
    }

    changeUsername(newName) {
        this.setState({
            username: newName
        });
    }

    render() {
        return (
            <div>
            <h1>Hello Redux World!</h1>
            <div className="container">
                <Main changeUsername={this.changeUsername.bind(this)}/>
                <User username={this.state.username}/>
            </div>
            </div>
        );
    }
}
export default App;
// import React from 'react';
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
//           Learn React and Redux
//         </a>
//       </header>
//     </div>
//   );
// }
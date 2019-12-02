

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


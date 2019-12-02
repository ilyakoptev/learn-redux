

import React from "react";
import {render} from "react-dom";

import { User } from './app/components/User';
import { Main } from './app/components/Main';


export class App extends React.Component {
    constructor() {
        super();
       
    }

    changeUsername(newName) {
       
    }

    render() {
        return (
            <div>
            <h1>Hello Redux World!</h1>
            <div className="container">
                <Main changeUsername={this.changeUsername.bind(this)}/>
                <User username="Ilya"/>
            </div>
            </div>
        );
    }
}





import React from "react";
import {render} from "react-dom";
import {connect} from "react-redux";
import { User } from './app/components/User';
import {Main}  from './app/components/Main';

import {setName} from "./app/actions/userActions"

 class App extends React.Component {
    constructor() {
        super();
       
    }

    render() {
        return (
            <div>
            <h1>Hello Redux World!</h1>
            <div className="container">
                <Main changeUserName={() => this.props.setName('Anna')}/>
                <User username={this.props.user.name} age={this.props.user.age}/>
            </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => { //  state 
  return {
    user: state.user,  // user state include name and age 
    match: state.match // match state 
  }
}

const mapDispatchToProps = (dispatch) => {  // action 
  return {
          setName: (name) => {
              dispatch({
                type:"SET_NAME",
                payload: name
              })
          }
        }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);


import React from "react";
import {render} from "react-dom";
import {connect} from "react-redux";
import { User } from './app/components/User';
import { Main } from './app/components/Main';


 class App extends React.Component {
    constructor() {
        super();
       
    }

    render() {
        return (
            <div>
            <h1>Hello Redux World!</h1>
            <div className="container">
                <Main changeUsername={() => this.props.setName("Max") }/>
                <User username={this.props.user.name}/>
            </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    match: state.match
  }
}

const mapDispatchToProps = (dispatch) => {
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
import React from "react";
import {connect} from "react-redux";

 class Main extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h1>The Main Page</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <button
                            className="btn btn-primary"
                            onClick={() => this.props.setName("Max")}>Change the Username</button>
                    </div>
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
  export default connect(mapStateToProps,mapDispatchToProps)(Main);
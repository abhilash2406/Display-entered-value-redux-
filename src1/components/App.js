import React from "react";
import Form from "./Form";
import Display from "./Display";
import { connect } from "react-redux";

const App=(props)=> {
    return <div>
      <div className="container m-5">
        {! props.showTxt ? <Form/> : <Display />} 
      </div>
    </div>
}
const mapStateToProps = (state) => {
    console.log(state);
    return state;
  };

export default connect(mapStateToProps)(App);
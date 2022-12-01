import React from "react";
import { connect} from "react-redux";
import {showComponent } from '../Actions/Index';

const Display=({showComponent})=> {
   return( <div>
      <button onClick={() => showComponent()}>Back</button>
    </div>
   )
}
const mapStateToProps=(state)=> {
    console.log(state);
    return state
}
export default connect(mapStateToProps,{showComponent})(Display);
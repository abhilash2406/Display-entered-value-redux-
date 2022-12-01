import React from 'react';
import { connect } from 'react-redux';
import { detectInput, showComponent } from '../Actions/Index';
const Form = ({ onTextChange, showTxt }) => {
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter the text here "
          className="form-control m-5"
          onChange={(e) => onTextChange(e.target.value)}
        />
        <button className="btn btn-success mx-5" onClick={(e) => showTxt()}>
          Submit
        </button>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  return state;
};
export default connect(mapStateToProps, {
  onTextChange: detectInput,
  showTxt: showComponent,
})(Form);

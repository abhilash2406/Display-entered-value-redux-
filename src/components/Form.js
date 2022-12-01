import React from 'react';
import { connect } from 'react-redux';
import { onFormSubmit, componentToggle, onInputChange } from '../actions';

const Form = (props) => {
  const onDataSubmitValue = (e) => {
    e.preventDefault();
    props.onDataSubmit(props.inputChangeControl);
    props.toggleValue();
  };
  return (
    <div>
      <form onSubmit={onDataSubmitValue}>
        <input
          type="text"
          placeholder="Enter the text here..."
          className="form-control m-5"
          onChange={(e) => props.onValueChange(e.target.value)}
        />
        <button type="submit" className="btn btn-success mx-5">
          Submit
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, {
  onValueChange: onInputChange,
  onDataSubmit: onFormSubmit,
  toggleValue: componentToggle,
})(Form);

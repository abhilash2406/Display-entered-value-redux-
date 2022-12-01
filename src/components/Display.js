import React from 'react';
import { componentToggle } from '../actions';
import { connect } from 'react-redux';

const Display = (props) => {
  const listing = props.inputControl.map((data, index) => {
    return <div key={index}>{data}</div>;
  });
  return (
    <div>
      <button
        className="btn btn-danger"
        onClick={() => props.componentToggle()}
      >
        Back
      </button>
      {listing}
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { componentToggle })(Display);

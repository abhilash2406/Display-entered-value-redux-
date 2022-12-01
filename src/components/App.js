import React from 'react';
import Form from './Form';
import Display from './Display';
import { connect } from 'react-redux';

const App = (props) => {
  return (
    <div className="container m-5">
      {!props.toggleControl ? <Form /> : <Display />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(App);

import React from 'react';
import { connect } from 'react-redux';
import { incrementCountAction } from './actions';
import './App.css';

function App({increment, myCountOne}) {

  return (
    <div className="App">
      <button onClick={() => increment()}>
        {myCountOne}
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myCountOne: state.count,
  }
};

const mapDispatchToProps = {
  increment: incrementCountAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

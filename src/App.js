import React, { Component } from 'react';
import { Provider } from "react-redux";
import Cake from './app/Cake';
import store from "./store";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Cake />
      </Provider>
    );
  }
}

export default App;
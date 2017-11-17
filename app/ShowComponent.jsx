/**
 * Created by Jinxin on 2017/11/16.
 */
import React from 'react';
import { createStore } from 'redux';
import ShowList from './ShowList';
import reducer from '../reducer/reducer';

const store = createStore(reducer, []);
class ShowComponent extends React.Component {
  constructor() {
    super();
    this.getInputValue = this.getInputValue.bind(this);
    this.linster = this.linster.bind(this);
  }

  componentDidMount() {
    store.subscribe(this.linster);
  }

  linster() {
    const newState = store.getState();
    this.setState(newState);
  }

  getInputValue() {
    const inputValue = this.input.value;
    store.dispatch({ type: 'addList', payload: inputValue });
  }

  render() {
    return (
      <div>
        <p>Hello World!</p>
        <input type="text" name="saveValue" ref={(value) => { this.input = value; }} />
        <button onClick={this.getInputValue}>Click me</button>
        <ShowList values={store.getState()} />
      </div>);
  }
}

export default ShowComponent;


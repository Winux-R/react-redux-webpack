/**
 * Created by Jinxin on 2017/11/16.
 */
import React from 'react';
import ReactDom from 'react-dom';
import ShowComponent from './ShowComponent';

function main() {
  ReactDom.render(<ShowComponent />, document.getElementById('app'));
}
main();

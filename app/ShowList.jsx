/**
 * Created by Jinxin on 2017/11/16.
 */
import React from 'react';

class ShowList extends React.Component {
  render() {
    const { values } = this.props;
    const list = [];
    for (const i in values) {
      if (Object.prototype.hasOwnProperty.call(values, i)) {
        list.push(<div>{values[i].value}</div>);
      }
    }
    return list;
  }
}

export default ShowList;


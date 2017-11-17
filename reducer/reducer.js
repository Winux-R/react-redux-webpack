/**
 * Created by Jinxin on 2017/11/17.
 */
const init = [];
export default (state = init, action) => {
  switch (action.type) {
    case 'addList':
      return [...state, { value: action.payload }];
    default:
      return state;
  }
};

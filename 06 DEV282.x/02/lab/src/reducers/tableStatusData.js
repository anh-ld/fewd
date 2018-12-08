import { TOGGLE_TABLE } from "../constants/constants";

var initialTableStatusData = [];

for (let i = 0; i < 16; i++) {
  initialTableStatusData.push(false);
}

const tableStatusData = (state = initialTableStatusData, action) => {
  switch (action.type) {
    case TOGGLE_TABLE:
      var stateCopy = state.slice();
      stateCopy[action.id] = !stateCopy[action.id];
      return stateCopy;
    default:
      return state;
  }
};

export default tableStatusData;
const INITIAL_STATE = {
    location: {
        coords: {
            latitude: '',
            longitude: ''
        }
    }
}

const tflData = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'Location':
      return Object.assign({}, state, {
          location:action.data
      });

    default:
      return state
  }
}

export default tflData;

const INITIAL_STATE = {
    location: {
        coords: {
            latitude: 0,
            longitude: 0
        }
    },
    tflData: {
        places: [{
            modes: []
        }]
    }
}

const tflData = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOCATION_UPDATE':
      return Object.assign({}, state, {
          location:action.data
      });

      case 'UPDATE_TFL_DATA':
      return Object.assign({}, state, {
          tflData: action.data
      })

      case 'RECEIVE_DISRUPTION_DATA':
      return Object.assign({}, state, {
          disruptionData: action.data
      })

    default:
      return state
  }
}

export default tflData;

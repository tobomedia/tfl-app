const INITIAL_STATE = {
    location: {
        coords: {
            latitude: 0,
            longitude: 0
        }
    },
    modes: [],
    currentMode: null,
    tflData: {
        places: [{
            modes: []
        }]
    },
    cycleData: [],
    searches: []
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

      case 'UPDATE_MODES_AVIALABLE':
      return Object.assign({}, state, {
          modes: action.data
      })

      case 'UPDATE_CURRENT_MODE':
      return Object.assign({}, state, {
          currentMode: action.data
      })

      case 'RECEIVE_DISRUPTION_DATA':
      return Object.assign({}, state, {
          disruptionData: action.data
      })

      case 'MAP_DISRUPTION_DATA':
      return Object.assign({}, state, {
          mappedDisruptionData: action.data
      })

      case 'UPDATE_SERVICE_DISRUPTION':
      return Object.assign({}, state, {
          serviceDisruption: state.serviceDisruption[action.data]++
      })

      case 'RECEIVE_CYCLE_DATA':
      return Object.assign({}, state, {
          cycleData: action.data
      })

      case 'LOG_SEARCH_EVENT':
      let searches = state.searches;
      if (searches.length >= 3) {
          searches.shift();
      }
      searches.push(action.data)

      return Object.assign({}, state, {
          searches: searches
      })

    default:
      return state
  }
}

export default tflData;

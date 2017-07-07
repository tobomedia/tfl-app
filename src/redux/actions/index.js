export const getLocation = (location) => {
    return {
        type: 'LOCATION_UPDATE',
        data: location
    }
}

export const updateTflData = (data) => {
    return {
        type: 'UPDATE_TFL_DATA',
        data: data.body
    }
}

export const startUpdateTflData = () => {
    return {
        type: 'START_UPDATE_TFL_DATA'
    }
}

export const startUpdateDisruptionData = () => {
    return {
        type: 'START_UPDATE_DISRUPTION_DATA'
    }
}

export const receiveDisruptionData = (data) => {
    return {
        type: 'RECEIVE_DISRUPTION_DATA',
        data: data.body
    }
}

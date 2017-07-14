import { mapServiceToDisruption } from '../../utils/dataParser';

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

export const updateModesAvailable = (modes) => {
    return {
        type: 'UPDATE_MODES_AVIALABLE',
        data: modes
    }
}

export const updateCurrentMode = (mode) => {
    return {
        type: 'UPDATE_CURRENT_MODE',
        data: mode
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

export const mapDisruptionData = (disruption,services) => {
    return {
        type: 'MAP_DISRUPTION_DATA',
        data: mapServiceToDisruption(services,disruption)
    }
}

export const updateServiceDisruption = (type) => {
    return {
        type: 'UPDATE_SERVICE_DISRUPTION',
        data: type
    }
}

export const receiveCycleData = (data) => {
    return {
        type: 'RECEIVE_CYCLE_DATA',
        data: data.body
    }
}

export const logSearch = (data) => {
    return {
        type: 'LOG_SEARCH_EVENT',
        data: data
    }
}

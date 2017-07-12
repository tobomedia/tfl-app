import { connect } from 'react-redux';
import AvailableTransport from './AvailableTransport';
import * as actions from '../redux/actions';

import ajax from '../utils/ajax';
import { parsePlaces, parseModes } from '../utils/dataParser';

const mapStateToProps = state => {
    const { tflData, location, modes, currentMode, mappedDisruptionData } = state;
    return {
        tflData,
        location,
        modes,
        currentMode,
        mappedDisruptionData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getTflData: (location) => {
            let tflResponseCache;
            dispatch(actions.startUpdateTflData());
            const TFL_REQUEST_LOCATION = ajax('https://api.tfl.gov.uk/Place?type=NaptanMetroStation,NaptanRailStation&lat=51.505404&lon=-0.109849&radius=800')

            TFL_REQUEST_LOCATION.then((data) => {
                return new Promise((resolve, reject) => {
                    dispatch(actions.updateTflData(data));
                    tflResponseCache = data;
                    resolve(data);
                })
            }).then((data) => {
                const MODES = parseModes(data);
                dispatch(actions.updateModesAvailable(MODES));
            })

            TFL_REQUEST_LOCATION.then((data) => {
                    let lines = parsePlaces(data);
                    dispatch(actions.startUpdateDisruptionData());

                    ajax(`https://api.tfl.gov.uk/line/${lines.toString()}/Status?detail=false`).then((data) => {
                        dispatch(actions.receiveDisruptionData(data))
                        dispatch(actions.mapDisruptionData(data,tflResponseCache));
                        tflResponseCache = {};
                    }).catch((error)=> console.log(error));
            });

        },
        updateCurrentMode: (domElement) => {
            domElement.preventDefault();

            const selectedMode = domElement.target.innerText;

            dispatch(actions.updateCurrentMode(selectedMode));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AvailableTransport);

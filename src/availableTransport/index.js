import { connect } from 'react-redux';
import AvailableTransport from './AvailableTransport';
import * as actions from '../redux/actions';

import ajax from '../utils/ajax';
import { parsePlaces } from '../utils/dataParser';

const mapStateToProps = state => {
    const { tflData, location } = state;
    return {
        tflData,
        location
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getTflData: (location) => {
            dispatch(actions.startUpdateTflData());
            const TFL_REQUEST_LOCATION = ajax('https://api.tfl.gov.uk/Place?type=NaptanMetroStation,NaptanRailStation&lat=51.505404&lon=-0.109849&radius=800')

            TFL_REQUEST_LOCATION.then((data) => {
                return new Promise((resolve, reject) => {
                    dispatch(actions.updateTflData(data));
                })
            })

            TFL_REQUEST_LOCATION.then((data) => {
                let lines = parsePlaces(data);

                dispatch(actions.startUpdateDisruptionData());

                ajax(`https://api.tfl.gov.uk/line/${lines.toString()}/status`).then((data) => {
                    debugger;
                    dispatch(actions.receiveDisruptionData(data))
                }).catch((error)=> console.log(error));
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AvailableTransport);

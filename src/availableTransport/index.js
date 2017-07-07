import { connect } from 'react-redux';
import AvailableTransport from './AvailableTransport';
import * as actions from '../redux/actions';

import ajax from '../utils/ajax';

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
            ajax('https://api.tfl.gov.uk/Place?type=NaptanMetroStation,NaptanRailStation&lat=51.505404&lon=-0.109849&radius=800').then((data) => {
                dispatch(actions.updateTflData(data));
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AvailableTransport);

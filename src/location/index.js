import { connect } from 'react-redux';
import Location from './Location';
import * as actions from '../redux/actions';

const mapStateToProps = state => {
    const { location } = state;
    return {
        location
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateLocation: latlon => {
            dispatch(actions.getLocation(latlon));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Location);

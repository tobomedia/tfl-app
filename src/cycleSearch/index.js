import { connect } from 'react-redux';
import CycleSearch from './CycleSearch';
import * as actions from '../redux/actions';

import ajax from '../utils/ajax';

const mapStateToProps = state => {
    const { cycleData, searches } = state;
    return {
        cycleData,
        searches
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCycleData: () => {
            ajax('https://api.tfl.gov.uk/bikepoint').then((data) => {
                dispatch(actions.receiveCycleData(data));
            })
        },
        startSearch(query) {
            dispatch(actions.logSearch(query));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CycleSearch);

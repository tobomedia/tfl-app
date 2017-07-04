import { connect } from 'react-redux';
import AvailableTransport from './AvailableTransport';
// import * as actions from '../redux/actions';

const mapStateToProps = state => {
    const { tflData } = state;
    return {
        tflData
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AvailableTransport);

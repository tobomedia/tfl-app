import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AvailableTransport extends Component {

    constructor() {
        super();
        this.displayAvaialbleStations = this.displayAvaialbleStations.bind(this);
    }

    componentDidMount() {
        this.props.getTflData(this.props.location);
    }

    displayAvaialbleStations() {
        if (this.props.currentMode) {
            return this.props.tflData.places.map((item,i) => {
                let travelModes = [];
                if (item.modes.indexOf(this.props.currentMode) > -1) {
                    travelModes.push(<li key={i}>{item.commonName} - <ul>{item.modes.map((mode,i) => <li key={i}>{mode}</li>)}</ul></li>);
                }
                return travelModes;
            })
        } else {
            return 'select a mode of travel for more information'
        }
    }

    render() {

        return (<div>
            <h1> Available Transport </h1>
            <nav>
                {this.props.modes.map((mode,i) => <a href onClick={this.props.updateCurrentMode} key={mode}>{mode}</a>)}
            </nav>
            <ul>
                {this.displayAvaialbleStations()}
            </ul>
        </div>);
    }
};

AvailableTransport.propTypes = {
    modes: PropTypes.array,
    tflData: PropTypes.object,
    location: PropTypes.object,
    currentMode: PropTypes.string,
    getTflData: PropTypes.func,
    updateCurrentMode: PropTypes.func

}

export default AvailableTransport;

import React, { Component } from 'react';

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
                if (item.modes.indexOf(this.props.currentMode) > -1) {
                    return <li key={i}>{item.commonName} - <ul>{item.modes.map((mode,i) => <li key={i}>{mode}</li>)}</ul></li>
                }
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

export default AvailableTransport;

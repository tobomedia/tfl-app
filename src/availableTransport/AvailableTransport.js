import React, { Component } from 'react';

class AvailableTransport extends Component {
    componentDidMount() {
        this.props.getTflData(this.props.location);
    }
    render() {

        return (<div>
            <h1> Available Transport </h1>
            <ul>
                {this.props.tflData.places.map((item,i) => {
                        return <li key={i}>{item.commonName} - <ul>{item.modes.map((mode,i) => <li key={i}>{mode}</li>)}</ul></li>
                })}
            </ul>
        </div>);
    }
};

export default AvailableTransport;

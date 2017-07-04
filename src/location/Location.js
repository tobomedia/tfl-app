import React, { Component } from 'react';

import AvailableTransport from '../availableTransport';

class Location extends Component {
    constructor() {
        super();

        this.updateLocation = this.updateLocation.bind(this);
    }

    updateLocation(longLat) {
        this.props.updateLocation(longLat);
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(this.updateLocation)
    }

    render() {
        return (
        <div>
            <h1>this is the location component Lat: {this.props.location.coords.latitude} Long: {this.props.location.coords.longitude}</h1>
            {(this.props.location.coords.latitude.length > 0 ? <AvailableTransport /> : null)}
        </div>)
    }
}

export default Location;

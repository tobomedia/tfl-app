import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
            <small>Current location: Lattitude: {this.props.location.coords.latitude} Longitude: {this.props.location.coords.longitude}</small>
            {(this.props.location.coords.latitude ? <AvailableTransport /> : null)}
        </div>)
    }
}

Location.propTypes = {
    location: PropTypes.object,
    updateLocation: PropTypes.func
}

export default Location;

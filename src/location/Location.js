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
            {(this.props.location.coords.latitude ? <AvailableTransport /> : null)}
            <small>Current location: Lattitude: <span className="t-lattitude">{this.props.location.coords.latitude}</span>  Longitude: <span className="t-longitude">{this.props.location.coords.longitude}</span></small>
        </div>)
    }
}

Location.propTypes = {
    location: PropTypes.object,
    updateLocation: PropTypes.func
}

export default Location;

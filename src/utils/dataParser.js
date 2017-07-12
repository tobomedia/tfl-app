
export const parsePlaces = (data, dispatch) => {
    let lines = [];
    data.body.places.map((place) => {
        return place.lines.map((line) => {
            lines.push(line.id);
            return true;
        });
    });
    return lines;
};

export const parseModes = (data) => {
    let modes = [];
    data.body.places.map((place) => {
        return place.modes.map((mode) => {
            if (modes.indexOf(mode) < 0) {
                modes.push(mode);
            }
            return true;
        });
    });
    return modes;
}

export const parseCycleDocks = (data, desiredVal) => {
    let value = '';
    data.additionalProperties.find((property) => {
        if ( property.key === desiredVal) {
            value = property.value;
        }
        return false;
    })
    return value;
}

export const mapServiceToDisruption = (service,disruption) => {
    let mappedServices = {};
    /*eslint-disable array-callback-return*/
    service.body.places.map((place) => {
        place.lines.map((line) => {
            disruption.body.map((service) => {
                if (line.id === service.id) {
                    return mappedServices[line.id] = service;
                }
            })
        })
    })
    /*eslint-enable array-callback-return*/

    return mappedServices;
}

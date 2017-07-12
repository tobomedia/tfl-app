
export const parsePlaces = (data, dispatch) => {
    let lines = [];
    data.body.places.map((place) => {
        return place.lines.map((line) => {
            if (lines.indexOf(line.id) < 0) {
                lines.push(line.id);
            }
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

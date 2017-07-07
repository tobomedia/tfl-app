import * as actions from '../redux/actions';

export const parsePlaces = (data, dispatch) => {
    dispatch(actions.updateTflData(data));
        let modes = [];
        return new Promise((resolve,reject) => {
            data.body.places.map((place) => {
                return place.modes.map((mode) => {
                    if (!modes.indexOf(place.mode)) {
                        return modes.push(place.modes);
                    }
                });
            });
            resolve(modes);
        })
};

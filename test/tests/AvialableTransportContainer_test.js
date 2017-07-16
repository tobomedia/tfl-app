import { mapStateToProps, mapDispatchToProps } from '../../src/availableTransport';
import * as actions from '../../src/redux/actions';

describe('AvailableTransport CONTAINER', () => {
    const state = {
        location: {
            coords: {
                latitude: 0,
                longitude: 0
            }
        },
        modes: [],
        currentMode: null,
        tflData: {
            places: [{
                modes: []
            }]
        }
    };

    const dispatch = spy();

    it('map state to props', () => {
        // Call
        const result = mapStateToProps(state);
        // Assert
        expect(result).to.an('object');
        expect(result.location).to.equal(state.location);
        expect(result.modes).to.equal(state.modes);
        expect(result.currentMode).to.equal(state.currentMode);
        expect(result.tflData).to.equal(state.tflData);

    })
    it.skip('maps dispatch to props', () => {
        // Setup
        spy(actions, 'startUpdateTflData');
        spy(actions, 'updateCurrentMode');
        // Call
        const result = mapDispatchToProps(dispatch);
        result.getTflData(state.location);
        result.updateCurrentMode({target:{innerText: 'test'},preventDefault: spy()})
        // Assert
        expect(actions.startUpdateTflData.called).to.equal(true);
        expect(actions.updateCurrentMode.called).to.equal(true);
    })
})

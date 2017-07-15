import Line from '../../src/availableTransport/Line';

describe('<Line/>', () => {
    let props;
    beforeEach(() => {
        props = {
            item: {
                lineModeGroups: [{
                    modeName: 'tube',
                    lineIdentifier: ['piccadilly']
                }]
            },
            currentMode: 'tube',
            disruptions: {
                piccadilly: {}
            }
        };
    })
    afterEach(() => {
        props = {};
    })
    it('should render', () => {

        // Call
        const comp = shallow(<Line {...props} />);
        // Assert
        expect(comp.length).to.equal(1);
    });
    it('should display the correct information', () => {
        // Call
        const comp = shallow(<Line {...props} />);
        // Assert
        expect(comp.find('.e-travel-modes__service').length).to.equal(1);
    })
    it('should not display if props dont match', () => {
        // Setup
        props.currentMode = 'bus';
        // Call
        const comp = shallow(<Line {...props} />);
        // Assert
        expect(comp.find('.e-travel-modes__service').length).to.equal(0);
    })
});

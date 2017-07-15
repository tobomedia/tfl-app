import Disruptions from '../../src/availableTransport/Disruptions';

describe('<Disruptions/>', () => {
    let props;
    beforeEach(() => {
        props = {
            lineStatuses: [{
                disruption: {},
                id: 'tube-station',
                reason: 'things are running slowly',
                statusSeverityDescription: 'Minor Delays'
            }]
        }
    })
    afterEach(() => {
        props = {};
    })
    it('should render', () => {
        // Setup

        // Call
        const comp = shallow(<Disruptions {...props}/>);
        // Assert
        expect(comp.length).to.equal(1);
        expect(comp.find('.bad').length).to.equal(1);
    })
    it('should allow for no disruption data', () => {
        // Setup
        delete props.lineStatuses[0].disruption;
        // Call
        const comp = shallow(<Disruptions {...props}/>);
        // Assert
        expect(comp.find('.good').length).to.equal(1);
    })
})

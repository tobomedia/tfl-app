import AvailableTransport from '../../src/availableTransport/AvailableTransport';

describe('<AvailableTransport/>', () => {
    let props;
    beforeEach(() => {
        props = {
            modes: ['tube','bus'],
            tflData: {
                places: [{
                    modes: ['tube','bus'],
                    commonName: 'underground station'
                }]
            },
            mappedDisruptionData: {},
            currentMode: null,
            updateCurrentMode: spy()
        }
    })
    it('should render', () => {
        // Call
        const comp = shallow(<AvailableTransport {...props}/>);
        // Assert
        expect(comp.find('.e-travel-modes__link').length).to.equal(2);
        expect(comp.find('.e-travel-modes__info').length).to.equal(0)
    })
    it('should handle clicks', () => {
        // Call
        const comp = shallow(<AvailableTransport {...props}/>);

        comp.find('.e-travel-modes__link').first().simulate('click');
        // Assert
        expect(comp.find('.e-travel-modes__link').length).to.equal(2);
        expect(props.updateCurrentMode.calledOnce).to.equal(true)
    })
    it('should render stations for a certain mode', () => {
        // Setup
        props.currentMode = 'tube';
        // Call
        const comp = shallow(<AvailableTransport {...props}/>);
        // Assert
        expect(comp.find('.e-travel-modes__info').length).to.equal(1);
        expect(comp.find('.e-travel-modes__info').text()).to.equal('underground station -<Line />');
    })
})

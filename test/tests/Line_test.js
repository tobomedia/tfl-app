import Line from '../../src/availableTransport/Line';

describe('<Line/>', () => {
    it('should render', () => {
        let props = {
            item: {
                lineModeGroups: [{
                    modeName: 'tube',
                    lineIdentifier: []
                }]
            },
            currentMode: 'tube'
        };
        // Call
        const comp = shallow(<Line {...props} />);
        // Assert
        expect(comp.find('li').length).to.equal(1);
    });
});

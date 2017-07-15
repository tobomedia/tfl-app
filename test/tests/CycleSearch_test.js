import CycleSearch from '../../src/cycleSearch/CycleSearch';
import * as dataParser from '../../src/utils/dataParser';

describe('<CycleSearch/>', () => {
    let props;
    beforeEach(() => {
        props = {
            searches: [],
            cycleData: [{
                commonName: 'The Strand',
                additionalProperties: [{
                    key: 'NbBikes',
                    value: 2
                },{
                    key: 'NbEmptyDocks',
                    value: 12
                }]
            }],
            getCycleData: spy(),
            startSearch: spy()
        };
        spy(dataParser, 'parseCycleDocks');
    });
    afterEach(() => {
        props = {};
        dataParser.parseCycleDocks.restore();
    });
    it('should render', () => {
        // Call
        const comp = shallow(<CycleSearch {...props} />);
        // Assert
        expect(comp.length).to.equal(1);
    });
    it('should request data', () => {
        // Call
        const comp = mount(<CycleSearch {...props} />);
        // Assert
        expect(props.getCycleData.called).to.equal(true);
    })
    it('should submit a search', () => {
        // Call
        const comp = mount(<CycleSearch {...props} />);
        comp.find('form').simulate('submit');
        // Assert
        expect(props.getCycleData.called).to.equal(true);
        expect(dataParser.parseCycleDocks.calledTwice).to.equal(true);
    })
    it('should handle text changes in the search field', () => {
        // Call
        const comp = mount(<CycleSearch {...props} />);
        comp.find('.c-cycle-search__search-input').text('strand');
        comp.find('.c-cycle-search__search-submit').simulate('click');
        // Assert
        expect(props.getCycleData.called).to.equal(true);
        expect(dataParser.parseCycleDocks.calledTwice).to.equal(true);
        expect(comp.find('.e-cycle-search__terminal-result').length).to.equal(1);
        expect(props.startSearch.called).to.equal(true);
    })
    it('should display previous searches', () => {
        // Setup
        props.searches.push('strand');
        // Call
        const comp = mount(<CycleSearch {...props} />);

        // Assert
        expect(comp.find('.c-cycle-search__previous-search').text()).to.equal('strand');
    })
});

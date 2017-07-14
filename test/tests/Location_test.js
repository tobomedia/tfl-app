import Location from '../../src/location/Location';
import AvailableTransport from '../../src/availableTransport';

describe('<Location/>', () => {
    let props;
    beforeEach(() => {
        props = {
            location: {
                coords: {
                    longitude: '12345',
                    latitude: '246810'
                }
            },
            updateLocation: spy()
        };
    });
    afterEach(() => {
        props = {};
    });
  it('should render', () => {
    //   Call
    const comp = shallow(<Location {...props} />);
    //   Assert
    expect(comp.find('.t-longitude').text()).to.eql(props.location.coords.longitude);
    expect(comp.find(AvailableTransport).length).to.eql(1);
  });
  it('should render before location is available', () => {
    //   Setup
    props.location.coords.longitude = null
    props.location.coords.Lattitude = null

    const store = {
      subscribe: () => {},
      dispatch: () => {},
      getState: () => ({
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
          },
          cycleData: [],
          searches: []
      })
    }
    global.navigator = {
        geolocation: {
            getCurrentPosition: (callback) => {
                callback( {location: {
                    coords: {
                        latitude: 0,
                        longitude: 0
                    }
                }});
            }
        }
    }
    const options = {
      context: { store },
      childContextTypes: { store: React.PropTypes.object.isRequired }
    }

    //   Call
    const comp = mount(<Location {...props} />, options);

    //   Assert
    expect(comp.find('.t-longitude').text()).to.eql('');
    expect(props.updateLocation.called).to.equal(true);
  });
});

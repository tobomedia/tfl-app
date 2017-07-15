import React from 'react';
import PropTypes from 'prop-types';

import Disruptions from './Disruptions';

const Line = (props) => {
    return (<ul>
        {props.item.lineModeGroups.map((mode,i) => {
            if(mode.modeName === props.currentMode) {
                return (
                    <li key={i}>
                        {mode.modeName}
                            <ul>
                                {mode.lineIdentifier.map((service,i) => {
                                    return <li className='e-travel-modes__service' key={service}>{service} - <Disruptions {...props.disruptions[service]}/></li>
                                })}
                            </ul>
                    </li>
                )
            } else {
                return false;
            }
        })}
    </ul>)
}

Line.propTypes = {
    item: PropTypes.shape({
        lineModeGroups: PropTypes.arrayOf(PropTypes.shape({
            modeName: PropTypes.string,
            lineIdentifier: PropTypes.array
        }))
    }),
    currentMode: PropTypes.string
}

export default Line;

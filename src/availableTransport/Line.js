import React from 'react';

import Disruptions from './Disruptions';

const Line = (props) => {
    // debugger;
    return (<ul>
        {props.item.lineModeGroups.map((mode,i) => {
            return (
                <li key={i}>
                    {mode.modeName}
                        <ul>
                            {mode.lineIdentifier.map((service,i) => {
                                return <li key={service}>{service} - <Disruptions {...props.disruptions[service]}/></li>
                            })}
                        </ul>
                </li>

            )
        })}
    </ul>)
}

export default Line;

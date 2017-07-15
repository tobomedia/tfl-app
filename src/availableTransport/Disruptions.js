import React from 'react';

import PropTypes from 'prop-types';

const Disruption = (props) => {
    debugger;
    return (<span>
        {props.lineStatuses.map((d,i) => {
            return <span key={`${d.id}_${i}`} title={d.reason} className={`e-disruption-indicatior ${(d.disruption ? 'bad' : 'good')}`}>{d.statusSeverityDescription}</span>
        })}
    </span>)
}

Disruption.propTypes = {
    lineStatuses: PropTypes.arrayOf(PropTypes.shape({
        disruption: PropTypes.object,
        id: PropTypes.number,
        reason: PropTypes.string,
        statusSeverityDescription: PropTypes.string
    }))
}

export default Disruption;

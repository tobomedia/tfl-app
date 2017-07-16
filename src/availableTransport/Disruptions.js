import React from 'react';

import PropTypes from 'prop-types';

const Disruption = (props) => {
    return (<span>
        {props.lineStatuses.map((d,i) => {
            return <span key={`${d.id}_${i}`} className={`e-disruption-indicatior ${(d.disruption ? 'bad' : 'good')}`}>{d.statusSeverityDescription}  {d.reason}</span>
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

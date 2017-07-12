import React from 'react';

const Disruption = (props) => {
    return (<span>
        {props.lineStatuses.map((d,i) => {
            return <i key={`${d.id}_${i}`} title={d.reason} className={`${(d.disruption ? 'bad' : 'good')}`}></i>
        })}
    </span>)
}

export default Disruption;

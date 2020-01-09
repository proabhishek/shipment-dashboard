import React from 'react';

const StatusCard = ({ status, counter }) => {
	return (
		<div className="statuscard">
			<h4>{status}</h4>
			<h2>{counter}</h2>
		</div>
	);
};

const StatusCardContainer = ({ statusViaCounters }) => {
	return (
		<div className="statuscard-counters">
			{Object.keys(statusViaCounters).map((status, index) => {
				return <StatusCard status={status} counter={statusViaCounters[status]} key={index} />;
			})}
		</div>
	);
};

export default React.memo(StatusCardContainer);

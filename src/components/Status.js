import React, { useState } from 'react';

const StatusCard = (props) => {
	const { status, counter } = props.dataSource;
	return (
		<div className="statuscard">
			<h4>{status}</h4>
			<h2>{counter}</h2>
		</div>
	);
};

const StatusCardContainer = () => {
	const defaultStatusCodes = [
		{ status: 'DEL', counter: 916 },
		{ status: 'DEL', counter: 916 },
		{ status: 'DEL', counter: 916 },
		{ status: 'DEL', counter: 916 },
		{ status: 'DEL', counter: 916 }
	];
	const [ statusCodes, setStatusCodes ] = useState(defaultStatusCodes);
	return (
		<div className="statuscard-counters">
			{statusCodes.map((cardData, index) => {
				return <StatusCard dataSource={cardData} key={index} />;
			})}
		</div>
	);
};

export default StatusCardContainer;

import React from 'react';

const Timeline = ({ data }) => {
	return (
		<div className="timeline-item">
			{data !== undefined &&
				data.map((object, index) => {
					const { time, location, status_detail } = object;
					return (
						<div className="item" key={index}>
							<p>{time}</p>
							<p>{location}</p>
							<p>{status_detail}</p>
						</div>
					);
				})}
		</div>
	);
};

export default React.memo(Timeline);

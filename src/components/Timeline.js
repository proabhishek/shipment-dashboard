import React from 'react';

const Timeline = ({ data }) => {
	return (
		<React.Fragment>
			{data !== undefined &&
				data.map((object) => {
					const { time, location, status_detail } = object;
					return (
						<React.Fragment>
							<h1>{time}</h1>
							<p>{location}</p>
							<p>{status_detail}</p>
						</React.Fragment>
					);
				})}
		</React.Fragment>
	);
};

export default React.memo(Timeline);

import React, { useState, useEffect } from 'react';
import './App.css';
import { fetchShipments } from './components/api';

import Navbar from './components/Navbar';
import StatusCardContainer from './components/Status';
import ShipmentList from './components/ShipmentList';
import Timeline from './components/Timeline';

function App() {
	const [ shipmentsData, setShipmentsData ] = useState([]);
	const [ timeLineData, setTimeLineData ] = useState([]);
	const [ statusViaCounters, setStatusViaCounters ] = useState({});

	useEffect(() => {
		const getShipmentsData = async () => {
			const data = await fetchShipments();
			setShipmentsData(data);
		};
		getShipmentsData();
	}, []);

	useEffect(
		() => {
			let counters = {};
			for (const data of shipmentsData) {
				if (counters[data['current_status_code']] !== undefined) {
					counters[data['current_status_code']] += 1;
				} else {
					counters[data['current_status_code']] = 1;
				}
			}
			setStatusViaCounters(counters);
		},
		[ shipmentsData ]
	);

	useEffect(
		() => {
			const scan = shipmentsData[0] ? shipmentsData[0] : '';
			setTimeLineData(scan['scan']);
		},
		[ shipmentsData ]
	);

	const handleListItem = (index) => {
		const scan = shipmentsData[index];
		setTimeLineData(scan['scan']);
	};

	return (
		<div className="App">
			<header>
				{' '}
				<Navbar />{' '}
			</header>
			<content>
				<StatusCardContainer statusViaCounters={statusViaCounters} />
				<div className="shipments-timeline">
					<div className="timeline">
						<Timeline data={timeLineData} className="timeline-body" />
					</div>
					<ShipmentList shipmentsData={shipmentsData} handleListItem={handleListItem} />
				</div>
			</content>
		</div>
	);
}

export default App;

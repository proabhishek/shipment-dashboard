import React, { useState, useEffect } from 'react';
import './App.css';
import { fetchShipments } from './components/api';

import Navbar from './components/Navbar';
import StatusCardContainer from './components/Status';
import ShipmentList from './components/ShipmentList';

function App() {
	const [ shipmentsData, setShipmentsData ] = useState('');

	useEffect(() => {
		const getShipmentsData = async () => {
			const data = await fetchShipments();
			console.log(data);
		};
		getShipmentsData();
	}, []);
	return (
		<div className="App">
			<header>
				<Navbar />
			</header>
			<content>
				<StatusCardContainer />
				<ShipmentList />
			</content>
		</div>
	);
}

export default App;

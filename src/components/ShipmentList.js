import React from 'react';

const ShipmentList = ({ shipmentsData, handleListItem }) => {
	return (
		<React.Fragment>
			<table className="shipmentlist-table">
				<thead>
					<tr>
						<th>AWB NUMBER</th>
						<th>TRANSPORTER</th>
						<th>SOURCE</th>
						<th>DESTINATION</th>
						<th>BRAND</th>
						<th>START DATE</th>
						<th>ETD</th>
						<th>STATUS</th>
					</tr>
				</thead>
				<tbody>
					{shipmentsData.length > 0 &&
						shipmentsData.map((data, index) => {
							const { awbno, carrier, from, to, pickup_date, extra_fields, current_status } = data;
							return (
								<tr key={index} onClick={() => handleListItem(index)}>
									<td>{awbno}</td>
									{/* transporter */}
									<td>{carrier}</td>
									<td>{from}</td>
									<td>{to}</td>
									{/* brand */}
									<td>{carrier}</td>
									<td>
										{extra_fields !== undefined ? (
											extra_fields['expected_delivery_date'].slice(12)
										) : (
											''
										)}
									</td>
									<td>{pickup_date ? pickup_date.slice(12) : ''}</td>
									<td>{current_status}</td>
								</tr>
							);
						})}
				</tbody>
			</table>
		</React.Fragment>
	);
};

export default React.memo(ShipmentList);

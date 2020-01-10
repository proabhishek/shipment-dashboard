import React from 'react';

const ShipmentList = ({ shipmentsData, handleListItem }) => {
	return (
		<div className="shipmentlist">
			<div className="shipmentlist-table">
				<div className="thead">
					<div className="tr">
						<p>AWB NUMBER</p>
						<p>TRANSPORTER</p>
						<p>SOURCE</p>
						<p>DESTINATION</p>
						<p>BRAND</p>
						<p>START DATE</p>
						<p>ETD</p>
						<p>STATUS</p>
					</div>
				</div>
				<div className="tbody" id="scrollbar">
					{shipmentsData.length > 0 &&
						shipmentsData.map((data, index) => {
							const { awbno, carrier, from, to, pickup_date, extra_fields, current_status } = data;
							return (
								<div className="tr" key={index} onClick={() => handleListItem(index)}>
									<p>{awbno}</p>
									{/* transporter */}
									<p>{carrier}</p>
									<p>{from}</p>
									<p>{to}</p>
									{/* brand */}
									<p>{carrier}</p>
									<p>
										{extra_fields !== undefined ? (
											extra_fields['expected_delivery_date'].slice(0, 10)
										) : (
											''
										)}
									</p>
									<p>{pickup_date ? pickup_date.slice(0, 10) : ''}</p>
									<p
										className={
											current_status === 'Delivered' ? (
												'status-green'
											) : current_status === 'Undelivered' ? (
												'status-red'
											) : (
												'status-wait'
											)
										}
									>
										{current_status}
									</p>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default React.memo(ShipmentList);

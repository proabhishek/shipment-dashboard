import axios from 'axios';

const url = `https://93870v1pgk.execute-api.ap-south-1.amazonaws.com/latest/shipments/mayank`;
const bearerToken = `tTU3gFVUdP`;
const fetchShipments = async () => {
	const shipments = await axios
		.post(
			url,
			{
				email: 'theabhishek.srm@gmail.com'
			},
			{
				headers: { Authorization: 'Bearer ' + bearerToken }
			}
		)
		.then((res) => res)
		.catch((err) => alert(JSON.stringify(err)));
	return shipments.data.data;
};

export { fetchShipments };

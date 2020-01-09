import axios from 'axios';

const url = `https://93870v1pgk.execute-api.ap-south-1.amazonaws.com/latest/shipments/mayank`;
const bearerToken = `tTU3gFVUdP`;
const fetchShipments = async () => {
	const shipments = await axios
		.post(url, {
			Authorization: {
				Token: bearerToken
			},
			body: {
				email: 'abhishek@gmail.com'
			}
		})
		.then((res) => res)
		.catch((err) => console.log(err));
	return shipments;
};

export { fetchShipments };

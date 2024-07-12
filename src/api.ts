import axios from 'axios'

const api = axios.create({
	baseURL: 'https://rendaref.callix.com.br/api/v1',
	headers: {
		Authorization: `Bearer ${process.env.CALLIX_TOKEN}`,
		'Content-Type': 'application/vnd.api+json'
	}
})

export default api

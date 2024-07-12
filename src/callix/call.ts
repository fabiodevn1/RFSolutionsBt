import api from '../api'

interface CallAttributes {
	user_id: string
	phone: string
}

export const initiateCall = async (user_id: string, phone: string) => {
	try {
		const response = await api.post('/click_to_call', {
			data: {
				type: 'click_to_call',
				attributes: {
					user_id,
					phone
				}
			}
		})
		return response.data
	} catch (error) {
		console.error('Erro ao iniciar a chamada:', error)
		throw error
	}
}

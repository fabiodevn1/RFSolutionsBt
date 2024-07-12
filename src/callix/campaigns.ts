import api from '../api'

export const getActiveCampains = async () => {
	try {
		const response = await api.get('/chat_campaigns')
		return response.data
	} catch (error) {
		console.error('Erro ao obter campanhas ativas:', error)
		throw error
	}
}

export const getCampain = async (id: number) => {
	try {
		const response = await api.get(`/chat_campaigns/${id}`)
		return response.data
	} catch (error) {
		console.error(`Erro ao obter campanha com id ${id}:`, error)
		throw error
	}
}

import api from '../api'

export const listTeams = async () => {
	try {
		const response = await api.get('/teams')
		return response.data
	} catch (error) {
		console.error('Erro ao listar equipes:', error)
		throw error
	}
}

export const viewTeam = async (id: number) => {
	try {
		const response = await api.get(`/teams/${id}`)
		return response.data
	} catch (error) {
		console.error(`Erro ao visualizar equipe com id ${id}:`, error)
		throw error
	}
}

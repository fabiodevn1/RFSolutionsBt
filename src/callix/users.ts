import api from '../api'

export const listUsers = async () => {
	try {
		const response = await api.get('/users')
		return response.data
	} catch (error) {
		console.error('Erro ao listar usuários:', error)
		throw error
	}
}

export const viewUser = async (id: number) => {
	try {
		const response = await api.get(`/users/${id}`)
		return response.data
	} catch (error) {
		console.error(`Erro ao visualizar usuário com id ${id}:`, error)
		throw error
	}
}

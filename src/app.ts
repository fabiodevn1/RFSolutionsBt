import 'dotenv/config'
import { getActiveCampains, getCampain } from './callix/campaigns'
import { initiateCall } from './callix/call'
import { listTeams } from './callix/teams'

const simulateCall = async (user_id: string, phone: string) => {
	try {
		console.log(
			`Iniciando chamada para o usuário ${user_id} e número ${phone}...`
		)
		const callResponse = await initiateCall(user_id, phone)
		console.log('Resposta da chamada:', callResponse)
	} catch (error) {
		console.error('Erro ao simular a chamada:', error)
	}
}

const main = async () => {
	try {
		console.log('Obtendo campanhas ativas...')
		const campanhasAtivas = await getActiveCampains()
		console.log('Campanhas ativas:', campanhasAtivas)

		const campanhaId = 1 // Substitua pelo ID da campanha que deseja buscar
		console.log(`Obtendo campanha com id ${campanhaId}...`)
		const campanha = await getCampain(campanhaId)
		console.log('Campanha:', campanha)

		// Simulando uma chamada
		await simulateCall('151', '5541999474476')
	} catch (error) {
		console.error('Erro no processo principal:', error)
	}
}

listTeams()
// main()

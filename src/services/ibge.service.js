import axios from "axios"

const IBGE_BASE_URL = "https://servicodados.ibge.gov.br/api/v1"

export async function getStates() {
  const response = await axios.get(`${IBGE_BASE_URL}/localidades/estados`)

  return response.data.map((state) => ({
    id: state.id,
    nome: state.nome,
    sigla: state.sigla,
    regiao: state.regiao.nome
  }))
}

export async function getMunicipiosByState(sigla) {
  const response = await axios.get(
    `${IBGE_BASE_URL}/localidades/estados/${sigla}/municipios`
  )

  return response.data.length
}

export async function getStatesWithMunicipios() {
  const states = await getStates()

  const result = []

  for (const state of states) {
    const totalMunicipios = await getMunicipiosByState(state.sigla)

    result.push({
      estado: state.nome,
      sigla: state.sigla,
      regiao: state.regiao,
      totalMunicipios
    })
  }

  return result
}


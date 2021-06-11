import { get, patch } from '../utils/axiosService'

const getHeroProfile = async (id) => {
  const res = await get(`/heroes/${id}/profile`)
  return res
}

const patchHeroProfile = async (id, data) => {
  const res = await patch(`/heroes/${id}/profile`, data)
  return res
}

export { getHeroProfile, patchHeroProfile }

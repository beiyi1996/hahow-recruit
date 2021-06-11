import { get } from '../utils/axiosService'

const getHeroByID = async (id) => {
  const res = await get(`/heroes/${id}`)
  return res
}

export { getHeroByID }

import { get } from '../utils/axios'

const getHeroByID = async (id) => {
  const res = await get(`/heroes/${id}`)
  return res
}

export { getHeroByID }

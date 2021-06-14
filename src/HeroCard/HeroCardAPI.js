import { get } from '../utils/axios'

const getHeroByID = async (id) => {
  try {
    const res = await get(`/heroes/${id}`)
    return res
  } catch (err) {
    return { code: 400, message: 'Oops... 出了點問題。' }
  }
}

export { getHeroByID }

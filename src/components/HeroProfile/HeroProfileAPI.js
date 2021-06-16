import { get, patch } from '../../utils/axios'

const getHeroProfile = async (id) => {
  const res = await get(`/heroes/${id}/profile`)
  return res
}

const patchHeroProfile = async (id, data) => {
  try {
    const res = await patch(`/heroes/${id}/profile`, data)
    return res
  } catch (err) {
    if (err?.response.status === 404) {
      return { code: 404, message: 'Oops... 出了點問題。' }
    }
    return { code: 400, message: '能力點數未設置完成。' }
  }
}

export { getHeroProfile, patchHeroProfile }

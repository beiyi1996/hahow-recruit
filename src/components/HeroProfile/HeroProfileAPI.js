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
      return { code: 404, message: '你的能力點數尚未設定完畢。' }
    }
    return { code: 400, message: 'Oops... 出了點問題。' }
  }
}

export { getHeroProfile, patchHeroProfile }

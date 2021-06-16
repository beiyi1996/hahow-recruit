import { get } from '../utils/axios'

const getHeros = async () => {
  try {
    const res = await get('/heroes')
    return res
  } catch (err) {
    return { code: 400, message: 'Oops... 出了點問題。' }
  }
}

export { getHeros }

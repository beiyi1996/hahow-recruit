import { get } from '../utils/axiosService'

const getHeros = async () => {
  const res = await get('/heroes')
  return res
}

export { getHeros }

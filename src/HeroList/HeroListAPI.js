import { get } from '../utils/axios'

const getHeros = async () => {
  const res = await get('/heroes')
  return res
}

export { getHeros }

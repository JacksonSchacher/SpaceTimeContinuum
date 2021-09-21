import axios from 'axios'
import { AppState } from '../AppState'
import { Photo } from '../assets/models/Photo'
import { logger } from '../utils/Logger'
const apiKey = 'api_key=QcSgzpNkyJo1SpKrrRIvlLzLPCFfQAWRk6dsjXrF'

const NASAApi = axios.create({
  baseURL: 'https://api.nasa.gov/planetary'
})

class NASAService {
  async findSpacePic(date) {
    const res = await NASAApi.get(`/apod?${apiKey}&date=${date}`)
    logger.log('Logging the RES', res.data)
    AppState.photo = new Photo(res.data)
    logger.log(AppState.photo)
  }
}
export const nasaService = new NASAService()

import axios from 'axios'

export const fetchTeam = url => {
  return axios
    .get(url)
    .then(response => response.data)
    .catch(error => error)
}

export const endpointReuqest = (reqType, apiObjUrl, objData) => {
  const config = {
    method: reqType,
    url: apiObjUrl,
    data: objData
  }
  return axios(config)
    .then(response => response)
    .catch(error => error)
}

export const deleteRequest = url => {
  return axios
    .delete(url)
    .then(response => response)
    .catch(error => error)
}

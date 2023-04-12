import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../_metronic/helpers'
import {Client, ClientQueryResponse} from './_models'

const DATA_URL = 'https://jsonplaceholder.typicode.com'
const CLIENT_URL = `${DATA_URL}/users`

const getClient = (query: string): Promise<ClientQueryResponse> => {
  return axios
    .get(`${CLIENT_URL}?${query}`)
    .then((d: AxiosResponse<ClientQueryResponse>) => d.data)
}

const getClientById = (id: ID): Promise<Client | undefined> => {
  return axios
    .get(`${CLIENT_URL}/${id}`)
    .then((response: AxiosResponse<Response<Client>>) => response.data)
    .then((response: Response<Client>) => response.data)
}

// const createUser = (user: User): Promise<User | undefined> => {
//   return axios
//     .put(USER_URL, user)
//     .then((response: AxiosResponse<Response<User>>) => response.data)
//     .then((response: Response<User>) => response.data)
// }

// const updateUser = (user: User): Promise<User | undefined> => {
//   return axios
//     .post(`${USER_URL}/${user.id}`, user)
//     .then((response: AxiosResponse<Response<User>>) => response.data)
//     .then((response: Response<User>) => response.data)
// }

// const deleteUser = (userId: ID): Promise<void> => {
//   return axios.delete(`${USER_URL}/${userId}`).then(() => {})
// }

// const deleteSelectedUsers = (userIds: Array<ID>): Promise<void> => {
//   const requests = userIds.map((id) => axios.delete(`${USER_URL}/${id}`))
//   return axios.all(requests).then(() => {})
// }

// export {getUsers, deleteUser, deleteSelectedUsers, getUserById, createUser, updateUser}
export { getClient, getClientById }

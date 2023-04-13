import axios from 'axios'

export class ClientService {
  private static URL: string = 'https://jsonplaceholder.typicode.com'

  public static getAllUsers(pageNumber: number, pageSize: number) {
    let ClientURL: string = `${this.URL}/users`
    let params = {
      _page: pageNumber,
      _limit: pageSize,
    }
    return axios.get(ClientURL, {params: params})
  }
}

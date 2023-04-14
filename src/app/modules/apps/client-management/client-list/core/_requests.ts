import axios from "axios";


export class ClientService {
  private static URL: string = "https://jsonplaceholder.typicode.com";

  public static getAllUsers() {
    let ClientURL: string = `${this.URL}/users`;
    return axios.get(ClientURL);
  }

  public static addUser(data: any) {
    let ClientURL: string = `${this.URL}/users`;
    return axios.post(ClientURL, data);
  }

  public static deleteUser() {
    let ClientURL: string = `${this.URL}/users`;
    return axios.delete(ClientURL);
  }
}
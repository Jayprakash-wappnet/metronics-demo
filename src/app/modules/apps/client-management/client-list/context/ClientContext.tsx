import { createContext } from "react";

export interface ClientContextInterface {
  user: Client;
  addUser: (user: Client) => void;
}

export interface Client {
  name: string;
  username: string;
  email: string;
}

const ClientContext = createContext<ClientContextInterface>({
  user: { name: "", username: "", email: "" },
  addUser: (user: Client) => {},
});

export default ClientContext;
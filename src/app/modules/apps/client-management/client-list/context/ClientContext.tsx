import { createContext } from "react";

export interface ClientContextInterface {
  user: Client[];
  addUser: (user: Client) => void;
}

export interface Client {
  id: string;
  name: string;
  username: string;
  email: string;
}

const ClientContext = createContext<ClientContextInterface>({
  user: [{ id: "", name: "", username: "", email: "" }],
  addUser: (user: Client) => {},
});

export default ClientContext;

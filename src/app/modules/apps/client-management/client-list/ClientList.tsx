import { QueryRequestProvider } from "./core/QueryRequestProvider";
import { ClientListHeader } from "./components/header/ClientListHeader";
import { ClientTable } from "./table/ClientTable";
import { KTCard } from "../../../../../_metronic/helpers";
import ClientContext, {
  Client,
  ClientContextInterface,
} from "./context/ClientContext";
import { useState } from "react";

const ClientList = () => {
  const [user, setUser] = useState<Client[]>([]);

  const addUser = (newUser: Client) => {
    setUser([...user, newUser]);
  };

  const clientContextValue: ClientContextInterface = {
    user,
    addUser,
  };

  return (
    <>
      <KTCard>
        <ClientContext.Provider value={clientContextValue}>
          <ClientListHeader />
          <ClientTable />
        </ClientContext.Provider>
      </KTCard>
    </>
  );
};

const ClientListWrapper = () => (
  <QueryRequestProvider>
    <ClientList />
  </QueryRequestProvider>
);

export { ClientListWrapper };

import {QueryRequestProvider} from './core/QueryRequestProvider'
import {ClientListHeader} from './components/header/ClientListHeader'
import {ClientTable} from './table/ClientTable'
import {KTCard} from '../../../../../_metronic/helpers'
import ClientContext, { Client, ClientContextInterface } from './context/ClientContext'
import { useState } from 'react'

const ClientList = () => {

  const [user, setUser] = useState<Client>({ name: "", username: "", email: "" });

  const addUser = (newUser: Client) => {
    setUser(newUser);
  };

  const userContextValue: ClientContextInterface = {
    user,
    addUser,
  };
  
  return (
    <>
      <KTCard>
        <ClientContext.Provider value={userContextValue} />
        <ClientListHeader />
        <ClientTable />
      </KTCard>
    </>
  )
}

const ClientListWrapper = () => (
  <QueryRequestProvider>
    <ClientList />
  </QueryRequestProvider>
)

export {ClientListWrapper}

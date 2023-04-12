import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {ClientListHeader} from './components/header/ClientListHeader'
import { ClientTable } from '../../client-management/client-list/table/ClientTable'
// import {UserEditModal} from './user-edit-modal/UserEditModal'
import {KTCard} from '../../../../../_metronic/helpers'

const ClientList = () => {
//   const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <ClientListHeader />
        <ClientTable />
      </KTCard>
      {/* {itemIdForUpdate !== undefined && <UserEditModal />} */}
    </>
  )
}

const ClientListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <ClientList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {ClientListWrapper}

import {QueryRequestProvider} from './core/QueryRequestProvider'
import {ClientListHeader} from './components/header/ClientListHeader'
import {ClientTable} from './table/ClientTable'
import {KTCard} from '../../../../../_metronic/helpers'

const ClientList = () => {
  return (
    <>
      <KTCard>
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

import {ClientListToolbar} from './ClientListToolbar'
import {useListView} from '../../core/ListViewProvider'

import {ClientListSearchComponent} from './ClientListSearchComponent'
import { ClientListGrouping } from './ClientListGrouping' 

const ClientListHeader = () => {
  const {selected} = useListView()

  return (
    <div className='card-header border-0 pt-6'>
      <ClientListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <ClientListGrouping /> : <ClientListToolbar />}
        {/* end::Group actions end */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {ClientListHeader}

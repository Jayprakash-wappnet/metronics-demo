// import {useListView} from '../../core/ListViewProvider'
import {ClientListToolbar} from './ClientListToolbar'
import {ClientListSearchComponent} from './ClientListSearchComponent'

const ClientListHeader = () => {
//   const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <ClientListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
         <ClientListToolbar />
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {ClientListHeader}

import {KTSVG} from '../../../../../../../_metronic/helpers'
import {useState} from 'react'
import AddUserModal from './AddUserModal'

const ClientListToolbar = () => {
  const [showAddUserModal, setShowAddUserModal] = useState(false)

  const openAddUserModal = () => {
    setShowAddUserModal(true)
  }

  const closeAddUserModal = () => {
    setShowAddUserModal(false)
  }

  return (
    <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
      {/* begin::Export */}
      <button type='button' className='btn btn-light-primary me-3'>
        <KTSVG path='/media/icons/duotune/arrows/arr078.svg' className='svg-icon-2' />
        Export
      </button>
      {/* end::Export */}

      {/* begin::Add user */}
      <button type='button' className='btn btn-primary' onClick={openAddUserModal}>
        <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
        Add User
      </button>
      {/* end::Add user */}

      {showAddUserModal && <AddUserModal onClose={closeAddUserModal} />}
    </div>
  )
}

export {ClientListToolbar}

import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import {ClientListWrapper} from './client-list/ClientList'

const usersBreadcrumbs: Array<PageLink> = [
  {
    title: 'Client Management',
    path: '/apps/client-management/client',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const ClientPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='client'
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}>Client list</PageTitle>
              <ClientListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/client-management/client' />} />
    </Routes>
  )
}

export default ClientPage

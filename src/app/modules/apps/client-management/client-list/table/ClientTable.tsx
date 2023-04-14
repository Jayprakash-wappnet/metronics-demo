import React, {useState, useEffect, useContext} from 'react'
import {Client} from '../core/_models'
import {ClientService} from '../core/_requests'
import { ClientListLoading } from '../components/loading/ClientListLoading'
import { ClientActionsCell } from './columns/ClientActionsCell'
import {KTCardBody} from '../../../../../../_metronic/helpers'
import { ClientListPagination } from '../components/pagination/ClientListPagination'
import ClientContext from '../context/ClientContext'

interface IState {
  loading: boolean
  users: Client[]
  id: any
}

export const ClientTable: React.FC = () => {

  const {user} = useContext(ClientContext)

  const [state, setState] = useState<IState>({
    loading: false,
    users: [] as Client[],
    id:""
  })
  // network request

  useEffect(() => {
    setState({...state, loading: true})
    ClientService.getAllUsers()
      .then((res: any) =>
        setState({
          ...state,
          loading: false,
          users: res.data,
        })
      )
      .catch(() =>
        setState({
          ...state,
          loading: false,
        })
      )
    //eslint-disable-next-line
  }, [])

    const {loading, users} = state

  return (
    <KTCardBody className='py-4'>

    <div className='container'>
      <h1>CLIENT DATA FROM JSON PLACEHOLDER</h1>
      {loading && <ClientListLoading/>}
      <table className='table table-striped'>
        <thead>
          <tr>
            <td>ID</td>
            <td>NAME</td>
            <td>USER NAME</td>
            <td>EMAIL</td>
            <td>ACTIONS</td>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td> <ClientActionsCell/> </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>
                <div className='d-flex text-center w-100 align-content-center justify-content-center'>
                  No matching records found
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>

    </div>
    <ClientListPagination/>
    {loading && <ClientListLoading />}
    </KTCardBody>
    
    
  )
}
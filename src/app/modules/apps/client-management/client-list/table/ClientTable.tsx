import React, {useState, useEffect} from 'react'
import ReactPaginate from 'react-paginate'
import {Client} from '../core/_models'
import {ClientService} from '../core/_requests'
import { ClientListLoading } from '../components/loading/ClientListLoading'
import { ClientActionsCell } from './columns/ClientActionsCell'
interface IState {
  loading: boolean
  users: Client[]
  id: any
  page: number;
  totalPages: number;
}

export const ClientTable: React.FC = () => {
  const [state, setState] = useState<IState>({
    loading: false,
    users: [] as Client[],
    id:"",
    page: 0,
    totalPages: 0,
  })


  const pageSize = 5; // number of items per page


  // network request

  useEffect(() => {
    setState({...state, loading: true})
    ClientService.getAllUsers(state.page + 1, pageSize)
      .then((res: any) =>
        setState({
          ...state,
          loading: false,
          users: res.data,
          totalPages: Math.ceil(res.total / pageSize),

        })
      )
      .catch(() =>
        setState({
          ...state,
          loading: false,
        })
      )
    //eslint-disable-next-line
  }, [state.page])

  const {loading, users, totalPages } = state;

  const handlePageClick = (data: { selected: number }) => {
    setState({ ...state, page: data.selected });
  };

  return (
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
      <ReactPaginate
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName='pagination justify-content-center'
        activeClassName='active'
      />
    </div>
    
  )
}

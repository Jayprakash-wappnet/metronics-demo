// @ts-nocheck
import {Column} from 'react-table'
import {ClientInfoCell} from './ClientInfoCell'
import {ClientCustomHeader} from './ClientCustomHeader'
import {User} from '../../core/_models'

const clientColumns: ReadonlyArray<Column<User>> = [
 
  {
    Header: (props) => <ClientCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    id: 'name',
    Cell: ({...props}) => <ClientInfoCell client={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <ClientCustomHeader tableProps={props} title='email' className='min-w-125px' />,
    accessor: 'role',
  },
 
  
  {
    Header: (props) => (
      <ClientCustomHeader tableProps={props} title='Joined day' className='min-w-125px' />
    ),
    accessor: 'joined_day',
  },
  
]

export {clientColumns}

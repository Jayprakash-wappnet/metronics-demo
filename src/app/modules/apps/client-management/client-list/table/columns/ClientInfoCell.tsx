/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'

import {Client} from '../../core/_models'

type Props = {
  client: Client
}

const ClientInfoCell: FC<Props> = ({client}) => (
  <div className='d-flex align-items-center'>
    {/* begin:: Avatar */}

    <div className='d-flex flex-column'>
      <a href='#' className='text-gray-800 text-hover-primary mb-1'>
        {client.name}
      </a>
      <span>{client.email}</span>
    </div>
  </div>
)

export {ClientInfoCell}

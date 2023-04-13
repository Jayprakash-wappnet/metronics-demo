import { useState } from 'react'
import { Modal } from 'react-bootstrap'

interface EditUserModalProps {
  onClose: () => void
}

const AddUserModal = ({ onClose }: EditUserModalProps) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log(name)
    console.log(userName)
    console.log(email)
    event.preventDefault()

    // Basic validation for input fields
    if (!name || !email || !userName ) {
      setErrorMessage('All fields are required.')
      return
    }

    // Add logic to handle submitting the form


    onClose()
  }

  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {errorMessage && <div className='alert alert-danger'>{errorMessage}</div>}
        <form onSubmit={handleSubmit} id='add-user-form'>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input type='text' className='form-control' id='name' value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>User Name</label>
            <input type='text' className='form-control' id='userName' value={userName} onChange={(e) => setUserName(e.target.value)} />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' className='form-control' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>  
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button type='submit' className='btn btn-primary' form='add-user-form'>
          Edit User
        </button>
      </Modal.Footer>
    </Modal>
  )
}

export default AddUserModal

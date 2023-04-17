import { useState, useContext } from "react";
import { Modal } from "react-bootstrap";
import ClientContext, { Client } from "../../context/ClientContext";

interface AddUserModalProps {
  onClose: () => void;
}

interface AddUserModalState {
  id: string;
  name: string;
  username: string;
  email: string;
}

const AddUserModal = ({ onClose }: AddUserModalProps) => {
  const { addUser } = useContext(ClientContext);
  const [state, setState] = useState<AddUserModalState>({
    id: "",
    name: "",
    username: "",
    email: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const user: Client = {
      id: state.id,
      name: state.name,
      username: state.username,
      email: state.email,
    };
    console.log(user);

    addUser(user);
    event.preventDefault();

    // Basic validation for input fields
    if (!state.name || !state.email || !state.username) {
      setErrorMessage("All fields are required.");
      return;
    }

    // Add logic to handle submitting the form

    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {errorMessage && (
          <div className="alert alert-danger">{errorMessage}</div>
        )}
        <form onSubmit={handleSubmit} id="add-user-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              onChange={handleChange}
              value={state.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">User Name</label>
            <input
              type="text"
              className="form-control"
              id="userName"
              name="username"
              onChange={handleChange}
              value={state.username}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              onChange={handleChange}
              value={state.email}
            />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button type="submit" className="btn btn-primary" form="add-user-form">
          Add User
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddUserModal;

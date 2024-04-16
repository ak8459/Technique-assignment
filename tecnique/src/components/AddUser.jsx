import { useState } from 'react'
import { addUser } from '../utils/utils'

import { notify, ToastContainer } from './useToast';
const AddUser = ({ toggleIsUserAddedOpen }) => {
    const [newUser, setNewUser] = useState({
        name: '',
        username: '',
        email: '',
    })

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            await addUser(newUser)
            notify('User added successfully!')
        } catch (error) {
            if (error.response.status === 404) {
                notify('cannot add user!')
            }
        }

    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    }

    return (
        <div className="edit-form">
            <h2>Edit User Details</h2>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="editName">Name:</label>
                <input type="text" id="editName" name="name" value={newUser.name} onChange={handleInputChange} />
                <label htmlFor="editUsername">Username:</label>
                <input type="text" id="editUsername" name="username" value={newUser.username} onChange={handleInputChange} />
                <label htmlFor="editEmail">Email:</label>
                <input type="email" id="editEmail" name="email" value={newUser.email} onChange={handleInputChange} />
                <button type="submit" className="btn btn-success">Save</button>
                <button type="button" className="btn btn btn-danger btn-round-1" onClick={toggleIsUserAddedOpen}>Cancel</button>
            </form>
            <ToastContainer />
        </div>
    )
}

export default AddUser
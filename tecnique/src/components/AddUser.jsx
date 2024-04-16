import { useState } from 'react'
import { addUser } from '../utils/utils'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddUser = ({ toggleIsUserAddedOpen }) => {
    const [newUser, setNewUser] = useState({
        name: '',
        username: '',
        email: '',
    })
    const notify = () => {
        toast.success("User added successfully!", {
            position: "top-center",
            hideProgressBar: false,
            autoClose: 1000,
        });
    }
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            await addUser(newUser)
            notify()
        } catch (error) {
            if (error.response.status === 404) {
                toast.error("cannot add user!", {
                    position: "top-center"
                });
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
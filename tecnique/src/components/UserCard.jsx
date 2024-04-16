import { useState } from 'react';
import './usercard.css'
import EditUser from './EditUser';
import { editUser } from '../utils/utils';
const UserCard = ({ user, handleDelete, users, setUsers }) => {
    const [isEditFormOpen, setIsEditFormOpen] = useState(false);
    const [editedUser, setEditedUser] = useState(user);
    const handleEdit =  () => {
        setIsEditFormOpen(!isEditFormOpen);
    };

    const handleSave = async () => {
        const response = await editUser(editedUser.id, editedUser);
        console.log(response);

    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };


    return (
        <>
            <div className={`center ${isEditFormOpen ? 'blur' : ''}`}>
                <div className="article-card">
                    <div className="content">
                        <p className="title">Id: {user.id}</p>
                        <p className="title">Name: {user.name}</p>
                        <p className="title">Username: {user.username}</p>
                        <p className="title">Email: {user.email}</p>
                        <div className="btn-container">
                            <button className="edit-btn btn  btn-success" onClick={handleEdit}>Edit</button>
                            <button className="delete-btn btn btn-danger btn-round-1" onClick={() => handleDelete(user.id)}>Delete</button>
                        </div>
                    </div>

                    <img src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-855.jpg?w=740&t=st=1713276416~exp=1713277016~hmac=e30283a33b08af0d8da6358410af3bb9d628cc3c2f45a600f17ea76598446a49" alt="article-cover" />
                </div>
                {isEditFormOpen && (
                    <EditUser editedUser={editedUser} setIsEditFormOpen={setIsEditFormOpen} handleSave={handleSave} handleChange={handleChange} />
                )}
            </div >
        </>
    )
}

export default UserCard
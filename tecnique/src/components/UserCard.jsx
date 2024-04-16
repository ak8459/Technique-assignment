import { useState } from 'react';
import './usercard.css'
import EditUser from './EditUser';
import { editUser } from '../utils/utils';
const UserCard = ({ user, handleDelete }) => {
    const [isEditFormOpen, setIsEditFormOpen] = useState(false);
    const [editedUser, setEditedUser] = useState(user);
    const handleEdit = async () => {
        setIsEditFormOpen(!isEditFormOpen);
    };

    const handleSave = async () => {
        console.log(editedUser.id, editedUser);
        await editUser(editedUser.id, editedUser);

        setEditedUser(user);

        setIsEditFormOpen(false);
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

                    <img src="https://api.dicebear.com/7.x/lorelei/svg" alt="article-cover" />
                </div>
                {isEditFormOpen && (
                    <EditUser editedUser={editedUser} setIsEditFormOpen={setIsEditFormOpen} handleSave={handleSave} handleChange={handleChange} />
                )}
            </div >
        </>
    )
}

export default UserCard
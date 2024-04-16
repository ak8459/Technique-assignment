
const EditUser = ({ editedUser, handleSave, handleChange, setIsEditFormOpen }) => {
   
    return (
        <div className="edit-form">
            <h2>Edit User Details</h2>
            <form onSubmit={handleSave}>
                <label htmlFor="editName">Name:</label>
                <input type="text" id="editName" name="name" value={editedUser.name} onChange={handleChange} />
                <label htmlFor="editUsername">Username:</label>
                <input type="text" id="editUsername" name="username" value={editedUser.username} onChange={handleChange} />
                <label htmlFor="editEmail">Email:</label>
                <input type="email" id="editEmail" name="email" value={editedUser.email} onChange={handleChange} />
                <button type="submit" className="btn btn-success">Save</button>
                <button type="button" className="btn btn btn-danger btn-round-1" onClick={() => setIsEditFormOpen(false)}>Cancel</button>
            </form>
        </div>
    )
}

export default EditUser
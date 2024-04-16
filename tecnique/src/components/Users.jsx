import { useEffect, useState, } from "react"
import { getUsers } from "../utils/utils"
import UserCard from "./UserCard"
import { deleteUser } from "../utils/utils"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Todos = () => {
    const [users, setUsers] = useState([])
    const notify = () => {
        toast.success("User Deleted Successfully!", {
            position: "top-center",
            hideProgressBar: false,
            autoClose: 1000,
        });
    }

    useEffect(() => {
        (async () => {
            const response = await getUsers()
            // console.log(response);
            setUsers(response.data)
        })()
    }, [])

    const handleDelete = async (id) => {
        try {
            const response = await deleteUser(id);
            if (response.status === 200) {
                notify()
                setUsers(users.filter((user) => user.id !== id))
            }
        } catch (error) {
            if (error.response.status === 404) {
                toast.error("cannot delete user!", {
                    position: "top-center"
                });
            }

        }
    }


    return (
        <div className="center">
            {
                users?.map((user) => <UserCard key={user.id} user={user} users={users} handleDelete={handleDelete} setUsers={setUsers} />)
            }
            <ToastContainer />
        </div>
    )
}

export default Todos
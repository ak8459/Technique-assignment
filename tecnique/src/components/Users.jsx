import { useEffect, useState, } from "react"
import { getUsers } from "../utils/utils"
import UserCard from "./UserCard"
import { deleteUser } from "../utils/utils"
import { notify, ToastContainer } from './useToast';
const Todos = () => {
    const [users, setUsers] = useState([])

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
                notify('User Deleted Successfully!')
                setUsers(users.filter((user) => user.id !== id))
            }
        } catch (error) {
            if (error.response.status === 404) {
                notify('cannot delete user!')

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
import axios from "axios"
let baseUrl = "https://jsonplaceholder.typicode.com/users"


// request to get all users
export function getUsers() {
    return axios.get(baseUrl)
}
// request to delete user
export function deleteUser(userId) {
    return axios.delete(`${baseUrl}/${userId}`)
}

// request to edit user
export function editUser(userId,user) {
    return axios.patch(`${baseUrl}/${userId}`, {
        name: user.name,
        username: user.username,
        email: user.email
    })
}





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
export function editUser(userId, user) {
    console.log(userId)
    return axios.patch(`${baseUrl}/${userId}`, {
        name: user.name,
        username: user.username,
        email: user.email
    })
}

export function addUser(user) {
    return axios.post(baseUrl, user)
}





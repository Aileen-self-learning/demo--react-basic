import axios from 'axios'

const USER_URL = 'http://localhost:8080/users'

export const fetchUsers = () => axios.get(USER_URL).then((res) => res.data)

import Axios from 'axios'

//creating an instance of axios
const axios=Axios.create({
    baseURL:'http://localhost:3040'
})

export default axios
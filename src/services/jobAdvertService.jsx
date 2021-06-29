import axios from "axios";

export default class JobAdvertService {
    getAll() {
        return axios.get("http://localhost:8080/api/jobadvert/getAll")
    }
}
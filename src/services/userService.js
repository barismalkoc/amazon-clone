import axios from "axios";

export default class UserService {
  add(values) {
    return axios.post("http://localhost:8080/Amazonclone/user/add", values);
  }

  getAll() {
    return axios.get("http://localhost:8080/Amazonclone/user/getAll");
  }
}

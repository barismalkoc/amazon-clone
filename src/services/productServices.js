import axios from "axios";

export default class ProductService {
  getAll() {
    return axios.get("http://localhost:8080/Amazonclone/product/getAll");
  }
}

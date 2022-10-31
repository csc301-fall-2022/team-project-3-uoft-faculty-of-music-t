import axios from 'axios';

const server_url = "http://127.0.0.1:8000/"

export const getAllBooks = () => {
    axios
    .get(server_url + "api/book/")
    .then((res) => {
      return res.data
    });
}
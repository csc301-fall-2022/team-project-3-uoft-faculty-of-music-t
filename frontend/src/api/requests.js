import axios from 'axios';

const server_url = "http://127.0.0.1:8000/"

/** requests and sets list of books according to the passed in setter*/
export function getAllBooks(setBooks) {
    axios
    .get(server_url + "api/book/")
    .then((res) => {
      setBooks(res.data.results);
    });
}

/** requests and sets book details according to the passed in setter and book id*/
export function getBookDetails(setBookDetails, id) {
    axios
    .get( `${server_url}api/book/${id}/` )
    .then((res) => {
      setBookDetails(res.data);
    });
}

/** requests and sets list of exercises according to the passed in setter*/
export function getAllExercises(setExercises) {
    axios
    .get(server_url + "api/exerciseinfo/")
    .then((res) => {
      setExercises(res.data.results);
    });
}

/** requests and sets exercise details according to the passed in setter and exercise id*/
export function getExerciseDetails(setExerciseDetails, id) {
    axios
    .get( `${server_url}api/exerciseinfo/${id}/` )
    .then((res) => {
      setExerciseDetails(res.data);
    });
}

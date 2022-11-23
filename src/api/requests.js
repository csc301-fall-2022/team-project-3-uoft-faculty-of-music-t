import axios from 'axios';

const server_url = "https://cello-exercise-index.herokuapp.com/"

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

export function getAllTags(setTopics) {
  axios
  .get( `${server_url}api/tag/` )
  .then((res) => {
    setTopics(res.data.results);
  });
}

export function getTagsByLevel(level) {
  return new Promise((resolve, reject) => {
    axios
    .get(`${server_url}api/tag/level/${level}`)
    .then((res) => {
      resolve(res.data.results)
    })
  })
}

export function getSubTagsByTag(id) {
  return new Promise((resolve, reject) => {
    axios
    .get(`${server_url}api/tag/subtag/${id}`)
    .then((res) => {
      resolve(res.data.results)
    })
  })
}

/** requests and sets exercises according to the passed in setter and book id */
export function getExerciseByBook(setExercises, id) {
  axios
    .get( `${server_url}api/exerciseinfo/book/${id}/` )
    .then((res) => {
      setExercises(res.data.results);
    });
}
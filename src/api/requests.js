import axios from "axios";

const server_url = "https://cello-exercise-index.herokuapp.com/"

/** requests and sets list of books according to the passed in setter*/
export function getAllBooks(setBooks) {
  axios.get(server_url + "api/book/").then((res) => {
    setBooks(res.data.results);
  });
}

/** requests and sets book details according to the passed in setter and book id*/
export function getBookDetails(setBookDetails, id) {
  axios.get(`${server_url}api/book/${id}/`).then((res) => {
    setBookDetails(res.data);
  });
}

/** requests and sets list of exercises according to the passed in setter*/
export function getAllExercises(setExercises) {
  axios.get(server_url + "api/exerciseinfo/").then((res) => {
    setExercises(res.data.results);
  });
}

/** requests and sets exercise details according to the passed in setter and exercise id*/
export function getExerciseDetails(setExerciseDetails, id) {
  axios.get(`${server_url}api/exerciseinfo/${id}/`).then((res) => {
    setExerciseDetails(res.data);
  });
}

/** requests and sets <num> count of random exercises according to the passed in setter*/
export function getRandomExercises(setRandomExercises, num) {
  axios.get(`${server_url}api/exerciseinfo/exercises/random/?page_size=${num}`).then((res) => {
    setRandomExercises(res.data.results);
  });
}

export function getAllTags(setTopics) {
  axios.get(`${server_url}api/tag/`).then((res) => {
    setTopics(res.data.results);
  });
}

export function getTagsByLevel(level) {
  return new Promise((resolve, reject) => {
    axios.get(`${server_url}api/tag/level/${level}/`).then((res) => {
      resolve(res.data.results);
    });
  });
}

export function getSubTagsByTag(id) {
  return new Promise((resolve, reject) => {
    axios
    .get(`${server_url}api/tag/subtag/${id}/`, {headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}})
    .then((res) => {
      resolve(res.data.results)
    })
  })
}

/** requests and sets exercises according to the passed in setter and book id */
export function getExerciseByBook(setExercises, id) {
  axios
    .get( `${server_url}api/exerciseinfo/?book_id=${id}` )
    .then((res) => {
      setExercises(res.data.results);
    });
}

export function getExerciseByFiltersOrSearch(setExercises, tags, searchString, sides, clefs, bookId) {
  let paramsEndpoint = ""
  for (const tag in tags) {
    if (paramsEndpoint === "") {
      paramsEndpoint += "?tag_id=" + tags[tag]
    } else {
      paramsEndpoint += "&tag_id=" + tags[tag];
    }
  }

  if (searchString) {
    if (paramsEndpoint === "") {
      paramsEndpoint = "?search=" + searchString
    } else {
      paramsEndpoint += "&search=" + searchString
    }
  }

  for (const side of sides) {
    if (paramsEndpoint === "") {
      paramsEndpoint += "?side=" + side
    } else {
      paramsEndpoint += "&side=" + side
    }
  }

  for (const clef of clefs) {
    if (paramsEndpoint === "") {
      paramsEndpoint += "?clef=" + clef
    } else {
      paramsEndpoint += "&clef=" + clef
    }
  }

  if (bookId) {
    paramsEndpoint += "&book_id=" + bookId
  }

  axios
    .get( `${server_url}api/exerciseinfo/${paramsEndpoint}` )
    .then((res) => {
      setExercises(res.data.results);
    });
}

import axios from "axios";
import authHeader from "../services/auth-header";

// const server_url = "https://cello-exercise-index.herokuapp.com/";
const server_url = "http://127.0.0.1:8000/";

/** log into the system */
export function adminLogin(loginInfo, setSuccess) {
  axios
    .post(`${server_url}api/token/`, loginInfo)
    .then((response) => {
      if (response.data.access) {
        localStorage.setItem("admin", JSON.stringify(response.data));
        setSuccess(true);
      }

      return response.data;
    })
    .catch((err) => {
      console.log(err);
      setSuccess(false);
    });
}

/** get all the requests */
export function getAllRequests(setRequests) {
  axios.get(server_url + "api/requested/").then((res) => {
    console.log(res.data.results);
    setRequests(res.data.results);
  });
}

/** get all the approved exercises */
export function getAllApprovedRequests(setApprovedRequests) {
  axios.get(server_url + "api/requested/exercises/approved/").then((res) => {
    setApprovedRequests(res.data.results);
  });
}

/** approves the request (need authHeader) */
export function approveRequest(id, navigate, setMsg) {
  axios
    .post(server_url + `${server_url}api/requested/approve/${id}/`, {
      headers: authHeader(),
    })
    .then((res) => {
      if (res.status === 200) {
        alert("Approved!");
        navigate(-1);
      } else {
        setMsg(true);
      }
    });
}

/** reject the request (need authHeader) */
export function rejectRequest(id, navigate, setMsg) {
  axios
    .post(server_url + `${server_url}api/requested/reject/${id}/`, {
      headers: authHeader(),
    })
    .then((res) => {
      if (res.status === 200) {
        alert("Rejected!");
        navigate(-1);
      } else {
        setMsg(true);
      }
    });
}

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
export function getAllExercises(setExercises, setExercisesPaginationNextUrl) {
  axios.get(server_url + "api/exerciseinfo/").then((res) => {
    setExercisesPaginationNextUrl(res.data.next);
    setExercises(res.data.results);
  });
}

/** requests and sets exercise details according to the passed in setter and exercise id*/
export function getExerciseDetails(setExerciseDetails, id) {
  axios.get(`${server_url}api/exerciseinfo/${id}/`).then((res) => {
    setExerciseDetails(res.data);
  });
}

export function getAllTags(setTopics, setTopicsPaginationNextUrl) {
  axios.get(`${server_url}api/tag/`).then((res) => {
    setTopicsPaginationNextUrl(res.data.next)
    setTopics(res.data.results);
  });
}

export function getAllTagsByPaginationUrl(topics, setTopics, topicsPaginationNextUrl, setTopicsPaginationNextUrl) {
  axios.get(topicsPaginationNextUrl).then((res) => {
    setTopicsPaginationNextUrl(res.data.next)
    setTopics([...topics, ...res.data.results]);
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
      .get(`${server_url}api/tag/subtag/${id}/`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        resolve(res.data.results);
      });
  });
}

/** requests and sets exercises according to the passed in setter and book id */
export function getExerciseByBook(
  setExercises,
  id,
  setExercisesPaginationNextUrl
) {
  axios.get(`${server_url}api/exerciseinfo/?book_id=${id}`).then((res) => {
    setExercisesPaginationNextUrl(res.data.next);
    setExercises(res.data.results);
  });
}

export function getExerciseByFiltersOrSearch(
  setExercises,
  tags,
  searchString,
  sides,
  clefs,
  bookId,
  setExercisesPaginationNextUrl
) {
  let paramsEndpoint = "";
  for (const tag in tags) {
    if (paramsEndpoint === "") {
      paramsEndpoint += "?tag_id=" + tags[tag];
    } else {
      paramsEndpoint += "&tag_id=" + tags[tag];
    }
  }

  if (searchString) {
    if (paramsEndpoint === "") {
      paramsEndpoint = "?search=" + searchString;
    } else {
      paramsEndpoint += "&search=" + searchString;
    }
  }

  for (const side of sides) {
    if (paramsEndpoint === "") {
      paramsEndpoint += "?side=" + side;
    } else {
      paramsEndpoint += "&side=" + side;
    }
  }

  for (const clef of clefs) {
    if (paramsEndpoint === "") {
      paramsEndpoint += "?clef=" + clef;
    } else {
      paramsEndpoint += "&clef=" + clef;
    }
  }

  if (bookId) {
    paramsEndpoint += "&book_id=" + bookId;
  }

  axios.get(`${server_url}api/exerciseinfo/${paramsEndpoint}`).then((res) => {
    setExercisesPaginationNextUrl(res.data.next);
    setExercises(res.data.results);
  });
}

export function getExerciseByPaginationUrl(
  exercises,
  setExercises,
  exercisesPaginationNextUrl,
  setExercisesPaginationNextUrl
) {
  if (exercisesPaginationNextUrl === null) {
    return;
  }

  axios.get(exercisesPaginationNextUrl).then((res) => {
    setExercisesPaginationNextUrl(res.data.next);
    setExercises([...exercises, ...res.data.results]);
  });
}

export function postNewRequest(newRequest, navigate, setMsg) {
  axios
    .post(`${server_url}api/requested/`, newRequest)
    .then((response) => {
      if (response.status === 200) {
        alert("Submitted");
        navigate(-2);
      } else {
        setMsg(true);
      }
    })
    .catch((err) => console.log(err));
}

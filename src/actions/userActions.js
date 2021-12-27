export function fetchUser() {
  return dispatch => {
    dispatch({ type: "FETCH_USER_START" });

    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: "FETCH_USER_SUCCESS", users: data });
    })
    .catch((err) => {
      dispatch({ type: "FETCH_USER_ERROR", error: err });
    });
  }
}
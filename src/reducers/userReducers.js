const initState = {
  fetching: false,
  fetched: false,
  users: [],
  error: null,
};

const userReducer = (state=initState, action) => {
  switch (action.type) {
    case "FETCH_USER_START":
      return {
        ...state,
        fetching: true,
      };
    case "FETCH_USER_SUCCESS":
      return {
        ...state,
        fetching: false,
        fetched: true,
        users: action.users,
      };
    case "FETCH_USER_ERROR":
      return {
        ...state,
        fetching: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default userReducer;
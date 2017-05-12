const user = (state = { isAuthed: false, username: "guest" }, action) => {
  switch (action.type) {
    case "SIGNUP_USER":
      return {
        ...state,
        isAuthed: true,
        username: action.username
      };
    case "LOGIN_USER":
      return {
        ...state,
        isAuthed: true,
        username: action.username
      };
    default:
      return state;
  }
};

export default user;

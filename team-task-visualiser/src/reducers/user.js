const user = (state = { user: { username: "guest" } }, action) => {
  switch (action.type) {
    case "SIGNUP_USER":
      return state;
    case "LOGIN_USER":
      return {
        ...state,
        user: { username: action.username }
      };
    default:
      return state;
  }
};

export default user;

const User = {
  isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,

  login: () => {
    User.isLoggedIn = true;
    localStorage.setItem("isLoggedIn", JSON.stringify(true));
  },

  logout: () => {
    User.isLoggedIn = false;
    localStorage.setItem("isLoggedIn", JSON.stringify(false));
  },
};

export default User;

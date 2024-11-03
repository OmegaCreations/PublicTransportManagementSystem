import m from "mithril";

const User = {
  isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,

  login: async (credentials) => {
    m.request({
      method: "POST",
      url: "http://localhost:5000/admin/login",
      body: credentials,
    })
      .then((res) => {
        alert(res.message);
        User.isLoggedIn = true;
        localStorage.setItem("isLoggedIn", JSON.stringify(true));
      })
      .catch(() => {});
  },

  logout: () => {
    User.isLoggedIn = false;
    localStorage.setItem("isLoggedIn", JSON.stringify(false));
  },
};

export default User;

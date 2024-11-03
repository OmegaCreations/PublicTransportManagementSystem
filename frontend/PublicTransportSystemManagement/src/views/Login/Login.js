import m from "mithril";
import User from "../../models/User";

const Login = {
  username: "",
  password: "",

  view: () => {
    return m("form", [
      m("h2", "Login"),
      m("label", "Username:"),
      m("input[type=text]", {
        value: Login.username,
        oninput: (e) => (Login.username = e.target.value),
      }),
      m("label", "Password:"),
      m("input[type=password]", {
        value: Login.password,
        oninput: (e) => (Login.password = e.target.value),
      }),
      m(
        "button[type=button]",
        {
          onclick: () => {
            User.login({ username: Login.username, password: Login.password });
            m.route.set("/");
          },
        }, // redirection after logging in
        "Log in"
      ),
    ]);
  },
};

export default Login;

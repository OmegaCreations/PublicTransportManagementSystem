import m from "mithril";
import User from "../../models/User";

const Login = {
  view: () => {
    return m("form", [
      m("h2", "Login"),
      m("input[type=text][placeholder=Username]"),
      m("input[type=password][placeholder=Password]"),
      m(
        "button[type=button]",
        {
          onclick: () => {
            User.login();
            m.route.set("/");
          },
        }, // redirection after logging in
        "Log in"
      ),
    ]);
  },
};

export default Login;

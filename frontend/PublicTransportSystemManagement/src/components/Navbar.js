import m from "mithril";
import User from "../models/User";

const Navbar = {
  view: () => {
    return m("nav.navbar", [
      m("a.navbar-brand", { href: "/", oncreate: m.route.link }, "Home"),

      User.isLoggedIn
        ? m("", [
            m("button.navbar-button", { onclick: User.logout }, "Logout"),
            m(
              "button.navbar-button",
              { onclick: () => m.route.set("/admin/add") },
              "Add Bus Line"
            ),
          ])
        : m(
            "button.navbar-button",
            { onclick: () => m.route.set("/login") },
            "Login"
          ),
    ]);
  },
};

export default Navbar;

import m from "mithril";
import Navbar from "../components/Navbar";

const MainLayout = {
  view: (vnode) => {
    return m("div", [m(Navbar), m("main", vnode.children)]);
  },
};

export default MainLayout;

import m from "mithril";
import BusesList from "./views/BusesList/BusesList";
import BusDetails from "./views/BusDetails/BusDetails";
import MainLayout from "./layouts/MainLayout";
import Login from "./views/Login/Login";
import AddBusLine from "./views/AddBusLine/AddBusLine";

const mountNode = document.querySelector("#app");
m.mount(mountNode, BusesList);

m.route(mountNode, "/", {
  "/": {
    render: () => m(MainLayout, m(BusesList)),
  },
  "/bus/:id": {
    render: (vnode) => m(MainLayout, m(BusDetails, vnode.attrs)),
  },
  "/login": {
    render: () => m(MainLayout, m(Login)),
  },

  // admin routes
  "/admin/add": {
    render: () => m(MainLayout, m(AddBusLine)),
  },
});

import m from "mithril";
import BusesList from "./views/BusesList/BusesList";
import BusDetails from "./views/BusDetails/BusDetails";

const mountNode = document.querySelector("#app");
m.mount(mountNode, BusesList);

m.route(mountNode, "/", {
  "/": BusesList,
  "/bus/:id": BusDetails,
});

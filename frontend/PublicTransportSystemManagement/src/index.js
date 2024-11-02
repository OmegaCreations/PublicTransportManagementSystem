import m from "mithril";
import { App } from "./App";
import { Buses } from "./models/Buses";

const mountNode = document.querySelector("#app");
m.mount(mountNode, App);

m.route(mountNode, "/", {
  "/": App,
  "/buses": Buses,
});

import m from "mithril";
import Buses from "../../models/Buses";
import "./BusesList.css";

const BusesList = {
  oninit: Buses.loadBuses,

  view: () => {
    if (!Buses.data || Buses.data.length === 0) {
      return m(".loading", "Loading buses..."); // Show a loading message
    }

    return m(
      ".buses-items",
      Buses.data.map((bus) =>
        m(
          "button.bus-data",
          {
            onclick: () => m.route.set(`/bus/${bus.line_number}`), // Redirects to /bus/{id} on click
          },
          [m(".bus-title", bus.line_number), m(".bus-subtitle", bus.direction)]
        )
      )
    );
  },
};

export default BusesList; // Export the component

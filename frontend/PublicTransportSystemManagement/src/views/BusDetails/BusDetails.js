import m from "mithril";
import Buses from "../../models/Buses";

const BusDetails = {
  oninit: (vnode) => {
    const line_number = vnode.attrs.id;
    Buses.loadBusLine(line_number);
  },

  view: () => {
    if (!Buses.currentBus || Buses.currentBus.length === 0) {
      return m(".loading", "Loading bus details...");
    }

    return m(".bus-details", [
      m("h2", `Bus Line ${Buses.currentBus[0].line_number}`),
      m("p", `Direction: ${Buses.currentBus[0].direction}`),
      m(
        ".bus-stops",
        Buses.currentBus.map((stop) =>
          m("p", `${stop.order_number}: ${stop.stop_name}`)
        )
      ),
    ]);
  },
};

export default BusDetails;

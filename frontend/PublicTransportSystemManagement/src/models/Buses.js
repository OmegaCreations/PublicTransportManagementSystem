const m = require("mithril");

const Buses = {
  data: [],
  loadBuses: () => {
    // TODO : load busses from API
  },

  oninit: this.loadBuses,

  view: () => {
    return m(
      ".buses-item",
      data.map((bus) => [
        m("bus-title", bus.number),
        m("bus-data", bus.direction),
        m(
          "bus-stops",
          bus.stops.map((stop) => {
            return m("bus-stop", stop.number + " " + stop.name);
          })
        ),
      ])
    );
  },
};

module.exports = Buses;

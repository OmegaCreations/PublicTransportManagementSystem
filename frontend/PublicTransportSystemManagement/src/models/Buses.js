const m = require("mithril");

const Buses = {
  data: [],
  loadBuses: () => {
    // TODO : load busses from API
  },

  addBusLine: () => {
    // /admin/bus/add
    //   {
    //     "line_number": "5",
    //     "stops": [
    //         {
    //             "name": "Czarnowiejska",
    //             "departures": ["8:00:00", "9:00:00", "10:00:00"],
    //             "order": 1
    //         },
    //         {
    //             "name": "Prandoty",
    //             "departures": ["8:20:00", "9:20:00", "10:20:00"],
    //             "order": 2
    //         },
    //         {
    //             "name": "Miechowity",
    //             "departures": ["8:50:00", "9:50:00", "10:50:00"],
    //             "order": 3
    //         }
    //     ]
    // }
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

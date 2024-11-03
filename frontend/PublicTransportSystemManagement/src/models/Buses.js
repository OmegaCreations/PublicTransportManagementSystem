import m from "mithril";

const Buses = {
  data: [],
  currentBus: [],

  loadBuses: async () => {
    try {
      const data = await m.request({
        method: "GET",
        url: "http://localhost:5000/bus",
      });
      Buses.data = data;
    } catch (err) {
      return console.log(err);
    }
  },

  loadBusLine: async (line_number) => {
    try {
      const data = await m.request({
        method: "GET",
        url: `http://localhost:5000/bus/${line_number}`,
      });
      Buses.currentBus = data;
      console.log(Buses.data);
    } catch (err) {
      return console.log(err);
    }
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
};

export default Buses;

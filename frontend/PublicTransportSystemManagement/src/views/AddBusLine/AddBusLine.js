import m from "mithril";
import User from "../../models/User";

const AddBusLine = {
  lineNumber: "",
  stops: [],

  // adding new bus stop
  addStop: () => {
    AddBusLine.stops.push({
      name: "",
      departures: [""],
      order: AddBusLine.stops.length + 1,
    });
  },

  // removing stop from list
  removeStop: (index) => {
    AddBusLine.stops.splice(index, 1);
    AddBusLine.stops.forEach((stop, idx) => {
      stop.order = idx + 1;
    });
  },

  // sending data to api endpoint
  submitForm: () => {
    if (!User.isLoggedIn) {
      m.route.set("/login");
    }

    const busData = {
      line_number: AddBusLine.lineNumber,
      stops: AddBusLine.stops,
    };

    m.request({
      method: "POST",
      url: "http://localhost:5000/admin/bus",
      body: busData,
    })
      .then((res) => {
        alert(res);
        AddBusLine.lineNumber = "";
        AddBusLine.stops = [];
      })
      .catch((error) => {
        alert(error);
      });
  },

  view: () => {
    return m("form", [
      m("h2", "Add new bus line"),

      // line numberw
      m("label", "Bus Line number: "),
      m("input[type=text]", {
        value: AddBusLine.lineNumber,
        oninput: (e) => (AddBusLine.lineNumber = e.target.value),
      }),

      // adding bus stops
      m("h3", "Bus Stops"),
      AddBusLine.stops.map((stop, index) =>
        m("div.stop", [
          m("label", `Stop name ${index + 1}: `),
          m("input[type=text]", {
            value: stop.name,
            oninput: (e) => (stop.name = e.target.value),
          }),

          m("label", `Departures (comma separated): `),
          m("input[type=text]", {
            value: stop.departures.join(", "),
            oninput: (e) => {
              stop.departures = e.target.value.split(",").map((d) => d.trim());
            },
          }),

          m("label", `Order: `),
          m("input[type=number]", {
            value: stop.order,
            readonly: true,
          }),

          // removing bus stop
          m(
            "button[type=button]",
            {
              onclick: () => AddBusLine.removeStop(index),
            },
            "Remove bus stop"
          ),
        ])
      ),

      // Przycisk dodawania nowego przystanku
      m("button[type=button]", { onclick: AddBusLine.addStop }, "Add bus stop"),

      // Przycisk wysłania formularza
      m(
        "button[type=button]",
        { onclick: AddBusLine.submitForm },
        "Save Bus Line"
      ),
    ]);
  },
};

export default AddBusLine;

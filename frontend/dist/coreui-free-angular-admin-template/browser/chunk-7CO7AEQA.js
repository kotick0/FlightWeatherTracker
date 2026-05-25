import "./chunk-WDMUDEB6.js";

// src/app/views/settings/routes.ts
var routes = [
  {
    path: "",
    data: {
      title: "Settings"
    },
    children: [
      {
        path: "",
        redirectTo: "airports",
        pathMatch: "full"
      },
      {
        path: "airports",
        loadComponent: () => import("./chunk-IG2BOGBQ.js").then((m) => m.AirportsComponent),
        data: {
          title: "Airports"
        }
      },
      {
        path: "thresholds",
        loadComponent: () => import("./chunk-WOQHFT6H.js").then((m) => m.ThresholdsComponent),
        data: {
          title: "Thresholds"
        }
      }
    ]
  }
];
export {
  routes
};
//# sourceMappingURL=chunk-7CO7AEQA.js.map

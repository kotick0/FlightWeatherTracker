import "./chunk-WDMUDEB6.js";

// src/app/views/reports/routes.ts
var routes = [
  {
    path: "",
    data: {
      title: "Reports"
    },
    children: [
      {
        path: "",
        redirectTo: "metar",
        pathMatch: "full"
      },
      {
        path: "metar",
        loadComponent: () => import("./chunk-XUVFCKW6.js").then((m) => m.MetarComponent),
        data: {
          title: "METAR"
        }
      },
      {
        path: "taf",
        loadComponent: () => import("./chunk-JRSZICE2.js").then((m) => m.TafComponent),
        data: {
          title: "TAF"
        }
      },
      {
        path: "sigmet",
        loadComponent: () => import("./chunk-PDI4YF2D.js").then((m) => m.SigmetComponent),
        data: {
          title: "SIGMET"
        }
      }
    ]
  }
];
export {
  routes
};
//# sourceMappingURL=chunk-2OTDKGI7.js.map

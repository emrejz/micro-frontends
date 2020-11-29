import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";

const routes = constructRoutes(document.querySelector("#single-spa-layout"));
console.log("🚀 ~ file: mf-root-config.js ~ line 9 ~ routes", routes);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
console.log(
  "🚀 ~ file: mf-root-config.js ~ line 16 ~ applications",
  applications
);
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();

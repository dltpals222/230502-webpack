import path, { resolve } from "path";

export default {
  entry: "/paging.js",
  mode: "production",
  output: {
    filename: "module_bundle_production.js",
    path: path.join(resolve(), "dist"),
  },
};

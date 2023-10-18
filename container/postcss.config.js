/* eslint-disable @typescript-eslint/no-var-requires */
const tailwindcss = require("tailwindcss");

module.exports = {
  plugins: [
    tailwindcss("./tailwind.config.js"),
    require("tailwindcss/nesting")(require("postcss-nesting")),
    require("postcss-flexbugs-fixes"),
    require("autoprefixer")({
      flexbox: "no-2009",
    }),
    require("postcss-import"),
  ],
};

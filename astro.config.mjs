import { defineConfig } from "astro/config";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  i18n: {
    defaultLocale: "en_",
    locales: ["en_", "lt_"],
    routing: {
      prefixDefaultLocale: true
    }
  }
  // adapter: node({
  //   mode: "standalone",
  // }),
  ,
  adapter: node({
    mode: "standalone"
  })
});
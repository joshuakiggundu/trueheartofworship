import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        "gallery-grid": resolve(__dirname, "./gallery-grid.html"),
        "gallery-masonry": resolve(__dirname, "./gallery-masonry.html"),
        shop: resolve(__dirname, "shop.html"),
        "post-formats": resolve(__dirname, "post-formats.html"),
        "about-us": resolve(__dirname, "about-us.html"),
        cart: resolve(__dirname, "cart.html"),
        checkout: resolve(__dirname, "checkout.html"),
        contacts: resolve(__dirname, "contacts.html"),
        "event-single": resolve(__dirname, "event-single.html"),
        "events-calendar": resolve(__dirname, "events-calendar.html"),
        events: resolve(__dirname, "events.html"),
        "page-404": resolve(__dirname, "page-404.html"),
        "post-single": resolve(__dirname, "post-single.html"),
        "product-single": resolve(__dirname, "product-single.html"),
        "sermons-single": resolve(__dirname, "sermons-single.html"),
        sermons: resolve(__dirname, "sermons.html"),
        shortcodes: resolve(__dirname, "shortcodes.html"),
        "team-single": resolve(__dirname, "team-single.html"),
        "service-single": resolve(__dirname, "service-single.html"),
        "donation-single": resolve(__dirname, "donation-single.html"),
        "donate-now": resolve(__dirname, "donate-now.html"),
      },
    },
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "components/*",
          dest: "components",
        },
        {
          src: "media/*",
          dest: "media",
        },
        {
          src: "js/*",
          dest: "js",
        },
        {
          src: "include/*",
          dest: "include",
        },
        {
          src: "images/*",
          dest: "images",
        },
        {
          src: "fonts/*",
          dest: "fonts",
        },
        {
          src: "css/*",
          dest: "css",
        },
        {
          src : "fontello/css/font/*",
          dest : "assets/font"
        }
      ],
    }),
  ],
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  /**
   * Modules
   */
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss"],

  /**
   * Styles
   */
  css: ["vue-json-debug/src/debug.css", "~/assets/scss/main.scss"],

  /**
   * Plugins
   */
  plugins: [
    {
      src: "@/plugins/extend-vue.ts",
      mode: "client",
    },
  ],

  /**
   * Build Configuration.
   */
  build: {
    transpile: [
      // Transpile @trapcode/browser-storage for IE11 support
      "@trapcode/browser-storage",
    ],
  },

  /**
   * Extend Vite Config.
   */
  hooks: {
    "vite:extendConfig": (config, { isClient }) => {
      if (isClient)
        // @ts-ignore
        config.resolve.alias.vue = "vue/dist/vue.esm-bundler.js";
    },
  },
});

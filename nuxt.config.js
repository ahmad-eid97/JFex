export default {
  ssr: true,
  target: "server",

  head: {
    title: "JFex",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/png", href: "/assets/images/favicon.png" },
      { rel: "stylesheet", href: "/assets/css/style.css" },
      { rel: "stylesheet", href: "animate.css/animate.min.css" },
      { rel: "stylesheet", href: "bootstrap/dist/css/bootstrap.css" },
      { rel: "stylesheet", href: "bootstrap/dist/css/bootstrap-vue.css" },
      { rel: "stylesheet", href: "/css/vars/vars.css" },
      { rel: "stylesheet", href: "/css/vars/globals.css" },
      { rel: "stylesheet", href: "/css/vars/mixins.scss" },
      { rel: "stylesheet", href: "swiper/css/swiper.css" },
      { rel: "stylesheet", href: "/assets/css/all.min.css" },
    ],
  },

  css: [],

  plugins: [
    "~plugins/bootstrap-vue.js",
    "~plugins/coolLightbox.js",
    "~plugins/fortawesome.js",
    "~plugins/vueCountDown.js",
    "~plugins/swiperVue.js",
    "~plugins/date-fns.js",
    "~plugins/vueToastify.js",
    "~plugins/sweetAlert.js",
    "~plugins/socialChat.js",
  ],

  components: false,

  buildModules: [],

  styleResources: {
    scss: ["./static/css/vars/mixins.scss"],
  },

  modules: [
    "nuxt-i18n",
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    "@nuxtjs/style-resources",
    "cookie-universal-nuxt",
    "@nuxtjs/auth-next",
  ],

  i18n: {
    locales: [
      {
        code: "en",
        file: "en.json",
      },
      {
        code: "ar",
        file: "ar.json",
      },
    ],
    defaultLocale: "en",
    vueI18n: {
      fallbackLocale: "en",
      messages: {
        en: {
          welcome: "Welcome",
        },
        ar: {
          welcome: "مرحباً",
        },
      },
    },
  },
  axios: {
    baseURL: "https://dev.jfex.net/api/v1",
  },

  build: {
    loaders: {
      scss: {
        implementation: require("sass"),
      },
    },
  },
};

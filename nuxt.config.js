export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title:
      "CW Calc | クラウドワークス（CrowdWorks）での契約金額を手取り金額から計算するツール",
    htmlAttrs: {
      lang: "ja"
    },
    meta: [
      { charset: "utf-8" },
      {
        "http-equiv": "X-UA-Compatible",
        content: "IE=edge"
      },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0"
      },
      {
        hid: "description",
        name: "description",
        content:
          "クラウドワークス（CrowdWorks）で固定報酬制の仕事に応募する際に入力を求められる契約金額を、希望の手取り金額（ワーカーが受け取る金額）から算出するための計算ツールです。"
      },
      { hid: "og:site_name", property: "og:site_name", content: "CW Calc" },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://cw-calculator.inoshunnomad.com/"
      },
      {
        hid: "og:title",
        property: "og:title",
        content:
          "CW Calc | クラウドワークス（CrowdWorks）での契約金額を手取り金額から計算するツール"
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "クラウドワークス（CrowdWorks）で固定報酬制の仕事に応募する際に入力を求められる契約金額を、希望の手取り金額（ワーカーが受け取る金額）から算出するための計算ツールです。"
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://cw-calculator.inoshunnomad.com/ogp.png"
      },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    link: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/earlyaccess/notosansjapanese.css"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Alata&display=swap"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["~assets/style/style.scss", "~assets/style/common.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~plugins/set-min-height.client.js"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-149531425-2'
    }]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/style-resources"],
  styleResources: {
    scss: ["~assets/style/variables.scss"]
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};

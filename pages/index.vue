<template>
  <div class="home">

    <Banner :banner="banner" />

    <app-home-partners :partners="partners" />

    <Benefits :benefits="benefits" />

    <Future :future="future" />

    <Awards :awards="awards" />

    <div v-if="$store.state.sectionsStatus.features">
      <app-home-feature :features="features.data"></app-home-feature>
    </div>

    <Sponsors :sponsors="sponsors" />

    <Contact />

    <SocialChat :attendants="attendants">
      <p slot="header">Click one of our representatives below to chat.</p>
      <template v-slot:button="{ open }">
        <span v-show="!open">Contact us</span>
        <span v-show="open">Close</span>
      </template>
      <small slot="footer">Opening hours: 8am to 10pm</small>
    </SocialChat>
  </div>
</template>

<script>
import AppHomeBlogs from "../components/home/AppHomeBlogs.vue";
import AppHomeContactDivider from "../components/home/AppHomeContactDivider.vue";
import AppHomeFeature from "../components/home/AppHomeFeature.vue";
import AppHomeNews from "../components/home/AppHomeNews.vue";
import AppHomeServices from "../components/home/AppHomeServices.vue";
import AppHomeServicesOffers from "../components/home/AppHomeServicesOffers.vue";
import AppHomeSlider from "../components/home/AppHomeSlider.vue";
import AppHomeTestimonials from "../components/home/AppHomeTestimonials.vue";
import AppHomeWhy from "../components/home/AppHomeWhy.vue";
import AppHomeActivities from "../components/home/AppHomeActivities.vue";
import AppHomeSteps from "../components/home/AppHomeSteps.vue";
import AppHomePartners from "../components/home/AppHomePartners.vue";
import Sponsors from "../components/home/Sponsors.vue";
import Benefits from "../components/home/Benefits.vue";
import Contact from "../components/home/Contact.vue";
import Awards from "../components/home/Awards.vue";
import Future from "../components/home/Future.vue";
import Banner from "../components/home/Banner.vue";
// @ is an alias to /src
import templates from '../config.json';

export default {
  name: "Home",
  data() {
    return {
      attendants: [
        {
          app: "whatsapp",
          label: "Support",

          name: this.$store.state.websiteSettings.find(
            (one) => one.key === "chat_widget_whatsapp_label"
          )
            ? this.$store.state.websiteSettings.find(
              (one) => one.key === "chat_widget_whatsapp_label"
            ).plain_value
            : "Laravada",

          number: this.$store.state.websiteSettings.find(
            (one) => one.key === "chat_widget_whatsapp_number"
          )
            ? this.$store.state.websiteSettings.find(
              (one) => one.key === "chat_widget_whatsapp_number"
            ).plain_value
            : "11111111111",

          avatar: {
            src: "https://avatars0.githubusercontent.com/u/8084606?s=460&u=20b6499a416cf7129a18e5c168cf387e159edb1a&v=4",
            alt: "Laravada customer support",
          },
        },
        {
          app: "messenger",
          label: "Technical support",

          name: this.$store.state.websiteSettings.find(
            (one) => one.key === "chat_widget_messenger_label"
          )
            ? this.$store.state.websiteSettings.find(
              (one) => one.key === "chat_widget_messenger_label"
            ).plain_value
            : "Laravada Facebook",

          id: this.$store.state.websiteSettings.find(
            (one) => one.key === "chat_widget_messenger_id"
          )
            ? this.$store.state.websiteSettings.find(
              (one) => one.key === "chat_widget_messenger_id"
            ).plain_value
            : "111111111111",

          avatar: {
            src: "https://avatars0.githubusercontent.com/u/8084606?s=460&u=20b6499a416cf7129a18e5c168cf387e159edb1a&v=4",
            alt: "Laravada customer support",
          },
        },
      ],
    };
  },
  components: {
    AppHomeSlider,
    AppHomeFeature,
    AppHomeBlogs,
    AppHomeContactDivider,
    AppHomeWhy,
    AppHomeServices,
    AppHomeTestimonials,
    AppHomeNews,
    AppHomeServicesOffers,
    AppHomeActivities,
    AppHomeSteps,
    AppHomePartners,
    Sponsors,
    Benefits,
    Contact,
    Awards,
    Future,
    Banner
  },
  async asyncData({ $axios, app }) {
    const banner = await $axios.get("/sections/banner", {
      headers: {
        "Accept-Language": app.i18n.locale,
      },
    });

    const partners = await $axios.get("/partners");

    const benefits = await $axios.get("/sections/benefits", {
      headers: {
        "Accept-Language": app.i18n.locale,
      },
    });

    const future = await $axios.get("/sections/future", {
      headers: {
        "Accept-Language": app.i18n.locale,
      },
    });

    const awards = await $axios.get("/sections/awards", {
      headers: {
        "Accept-Language": app.i18n.locale,
      },
    });

    const features = await $axios.get("/sections/features", {
      headers: {
        "Accept-Language": app.i18n.locale,
      },
    });

    const sponsors = await $axios.get('/sections/sponsors',
      {
        headers: {
          "Accept-Language": app.i18n.locale,
        },
      })

    return {
      banner: banner.data.data,
      partners: partners.data.data.partners,
      benefits: benefits.data.data,
      future: future.data.data,
      awards: awards.data.data,
      features: features.data,
      sponsors: sponsors.data.data
    };
  },
  mounted() {
    console.log(templates.template16)
  },
};
</script>

<style lang="scss">
.home {
  --vsc-bg-header: var(--main-color);
  --vsc-bg-footer: var(--main-color);
  --vsc-text-color-header: #000;
  --vsc-text-color-footer: #000;
  --vsc-bg-button: var(--main-color);
  --vsc-text-color-button: #000;
  --vsc-outline-color: var(--main-color);
  --vsc-border-color-bottom-header: #fff;
  --vsc-border-color-top-footer: #fff;
}
</style>

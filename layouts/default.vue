<template>
  <div id="app" :class="$i18n.locale === 'en' ? 'english' : 'arabic'">
    <pagesLoader v-if="showPageLoader" />
    <Loader v-if="$store.state.showLoader" />
    <app-header></app-header>

    <router-view />

    <app-footer></app-footer>

    <div v-if="$store.state.websiteSettings.find((one) => one.key === 'popup_status')?.plain_value !== '0'">
      <popup />
    </div>
  </div>
</template>

<script>
import Loader from "../components/UIs/Loader.vue";
import pagesLoader from '../components/pagesLoader/pagesLoader.vue';
import AppHeader from "../components/header/AppHeader.vue";
import AppFooter from "../components/footer/AppFooter.vue";
import popup from "../components/popup/Popup.vue";

export default {
  name: "App",
  // Use some async method to load your page content
  async asyncData() {
    // Simulate a delay for demo purposes
    await new Promise(resolve => setTimeout(resolve, 2000))
    return {
      // Your page data goes here
    }
  },
  data() {
    return {
      showPageLoader: true
    }
  },
  components: {
    AppHeader,
    AppFooter,
    Loader,
    popup,
    pagesLoader
  },
  watch: {
    $route(to, from) {
      window.scrollTo(0, 0);
    },
  },
  async mounted() {

    setTimeout(() => {
      this.showPageLoader = false
    }, 1000)

    const SETTINGS = await this.$axios.get("/settings");
    this.$store.commit("getWebsiteSettings", SETTINGS.data.data);

    const FOOTER_DATA = await this.$axios.get("/footer/1");
    this.$store.commit("getFooterData", FOOTER_DATA.data.data);

    const USER_DATA = await this.$cookies.get("cms-user");
    this.$store.commit("setUserData", USER_DATA);

    const TOP_MENU = await this.$axios.get("/menus");
    this.$store.commit("getTopMenu", TOP_MENU.data.data);

    const SOCIAL_LINKS = await this.$axios.get(
      "/setting/all/social_media"
    );
    this.$store.commit("getFooterSocialData", SOCIAL_LINKS.data.data);

    const PAGES = await this.$axios.get("/pages");
    this.$store.commit("getFooterPages", PAGES.data.data.pages);

    const USEFUL_LINKS = await this.$axios.get("/footer/useful-links");
    this.$store.commit("getFooterUsefulLinks", USEFUL_LINKS.data.data.data);

    const SECTIONS_STATUS = await this.$axios.get(
      "/setting/all/section_status"
    );
    this.$store.commit("getSectionsStatus", SECTIONS_STATUS.data.data);

    // this.$route.params.lang  = this.lang;
    this.$store.state.cartItems = localStorage.getItem("laravadaCart")
      ? JSON.parse(localStorage.getItem("laravadaCart"))
      : [];

    document
      .querySelector(":root")
      .style.setProperty(
        "--main-color",
        this.$store.state.websiteSettings.find(
          (one) => one.key === "primary_color"
        )?.plain_value
      );

    document
      .querySelector(":root")
      .style.setProperty(
        "--secondary-color",
        this.$store.state.websiteSettings.find(
          (one) => one.key === "secondary_color"
        )?.plain_value
      );
  },
};
</script>
<style></style>

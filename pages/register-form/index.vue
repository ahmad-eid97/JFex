<template>
  <div class="home">
    <app-register-heading />
    <AppRegisterForm :partners="partners" />
  </div>
</template>

<script>
import AppRegisterHeading from "../../components/Register/AppRegisterHeading.vue";
import AppRegisterForm from "../../components/Register-Form/RegisterForm.vue";
export default {
  name: "Register-Form",
  components: {
    AppRegisterHeading,
    AppRegisterForm
  },
  async asyncData({ $axios, app }) {
    const partners = await $axios.get('/partners',
      {
        headers: {
          "Accept-Language": app.i18n.locale,
        },
      })

    return {
      partners: partners.data.data.partners
    }
  }
};
</script>

<style></style>

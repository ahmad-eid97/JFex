<template>
  <div class="home">
    <app-register-heading />
    <AppRegisterForm />
  </div>
</template>

<script>
import AppRegisterForm from "../../components/register-form/RegisterForm.vue";
import AppRegisterHeading from "../../components/Register/AppRegisterHeading.vue";
export default {
  name: "Register-Form",
  components: {
    AppRegisterHeading,
    AppRegisterForm
  },
};
</script>

<style></style>

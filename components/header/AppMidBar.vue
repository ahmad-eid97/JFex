<template>
  <div class="medium-bar">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="wrapper">
            <div class="logo">
              <a :href="localePath('/')" class="navbar-brand justify-content-end pc-menu">
                <img id="logo_img" :src="$store.state.websiteSettings.find((one) => one.key === 'logo')
                  .plain_value
                  " alt="logoImage" />
              </a>
            </div>
            <div class="">
              <div class="ml-auto bd-highlight">
                <div class="account-cad">
                  <div class="item">
                    <div class="text">
                      <h5>GET IN TOUCH!</h5>
                      <h6>
                        {{
                          $store.state.websiteSettings.find(
                            (one) => one.key === "contact_phone"
                          ).plain_value
                        }}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppMidBar",
  components: {},
  data() {
    return {};
  },
  mounted() {
    // console.log(this.$store.state.websiteSettings)
  },
  methods: {},
};
</script>
<style scoped lang="scss">
.wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
  }
}

.medium-bar {
  padding: 10px 0;

  @include md {
    display: none;
  }
}
</style>

<template>
  <div class="top-bar">
    <div class="container">
      <div class="row m-0">
        <div class="col-lg-12">
          <div class="d-flex justify-content-between align-items-center">
            <div class="col-auto">
              <div class="float-right">
                <ul class="social-icon bordered-theme">
                  <li v-for="link in $store.state.socialLinks" :key="link.key">
                    <a :href="link.url" target="_blank">
                      <i :class="link.icon"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-auto">
              <div class="d-flex" style="gap: 25px">
                <lang-switch></lang-switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LangSwitch from "../langSwitch/langSwitch.vue";
export default {
  name: "AppTopBar",
  components: {
    LangSwitch,
  },
  data() {
    return {};
  },
  mounted() { },
  methods: {},
};
</script>
<style scoped lang="scss">
.top-bar {
  height: 55px;

  .social-icon {
    margin: 0;

    li {
      i {
        max-width: 20px;
        color: var(--main-color);
      }
      &:hover {
        background-color: var(--main-color);
        i {
          color: #000;
        }
      }
    }
  }

  ul {
    padding: 0;
  }

  .p-content {
    margin: 0;

    @include xs {
      display: none;
    }
  }
}
</style>

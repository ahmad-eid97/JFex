<template>
  <div>
    <SponsorsHeading />
    <SponsorsList :sponsors="sponsors" />
  </div>
</template>

<script>
import SponsorsHeading from '../../components/sponsors/SponsorsHeading.vue';
import SponsorsList from '../../components/sponsors/SponsorsList.vue';

export default {
  components: {
    SponsorsHeading,
    SponsorsList
  },
  async asyncData({ $axios, app }) {
    const SPONSORS = await $axios.get('/sections/sponsors',
      {
        headers: {
          "Accept-Language": app.i18n.locale,
        },
      })

    return {
      sponsors: SPONSORS.data.data
    }
  },
}
</script>